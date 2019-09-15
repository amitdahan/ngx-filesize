#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const bent = require("bent");
const git = require("simple-git")();
const { promisify } = require("util");
const { execSync } = require("child_process");

const gitLog = promisify(git.log.bind(git));

const getPackage = bent("json", "https://registry.npmjs.org/");

let pkg = require(path.join(process.cwd(), "package.json"));

const getVersionBump = async () => {
  if (!process.env.NPM_AUTH_TOKEN)
    throw new Error("Merge-release requires NPM_AUTH_TOKEN");
  let latest = await getPackage(pkg.name + "/latest");

  let messages;

  if (latest) {
    if (latest.gitHead === process.env.GITHUB_SHA)
      return console.log("SHA matches latest release, skipping.");
    if (latest.gitHead) {
      try {
        let logs = await gitLog({
          from: latest.gitHead,
          to: process.env.GITHUB_SHA
        });
        messages = logs.all.map(r => r.message + "\n" + r.body);
      } catch (e) {
        latest = null;
      }
    } else {
      latest = null;
    }
  }
  if (!latest) {
    const event = JSON.parse(
      fs.readFileSync(process.env.GITHUB_EVENT_PATH).toString()
    );
    messages = event.commits.map(commit => commit.message + "\n" + commit.body);
  }

  let version = "patch";
  if (
    messages.map(message => message.includes("BREAKING CHANGE")).includes(true)
  ) {
    version = "major";
  } else if (
    messages
      .map(message => message.toLowerCase().startsWith("feat"))
      .includes(true)
  ) {
    version = "minor";
  }

  return version;
};

const run = async () => {
  const version = await getVersionBump();

  const exec = str => process.stdout.write(execSync(str));

  let current = execSync(`npm view ${pkg.name} version`).toString();
  exec(
    `npm version --allow-same-version=true --git-tag-version=false ${current} `
  );
  console.log("current:", current, "/", "version:", version);
  let newVersion = execSync(
    `npm version --git-tag-version=false ${version}`
  ).toString();
  console.log("new version:", newVersion);
  exec(`npm publish --access=public --dry-run ./dist/ngx-filesize`);
  exec(`git checkout package.json`); // cleanup
  exec(`git tag ${newVersion}`);

  const remoteRepo=`https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`;

  exec(`git config user.name "Merge Release"`);
  exec(`git config user.email "merge-release@users.noreply.github.com"`);
  exec(`git remote add merge-release "${remoteRepo}"`);
  exec(`git push merge-release --tags`);
};

if (
  process.env.GITHUB_EVENT_PATH &&
  process.env.NPM_AUTH_TOKEN &&
  process.env.GITHUB_SHA
) {
  run();
}
