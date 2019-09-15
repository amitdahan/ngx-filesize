#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const bent = require("bent");
const git = require("simple-git")();
const { promisify } = require("util");
const np = require("np/source");

const gitLog = promisify(git.log.bind(git));

const getPackage = bent("json", "https://registry.npmjs.org/");

const event = JSON.parse(
  fs.readFileSync(process.env.GITHUB_EVENT_PATH).toString()
);

let pkg = require(path.join(process.cwd(), "package.json"));

const getVersionBump = async () => {
  if (!process.env.NPM_AUTH_TOKEN)
    throw new Error("Merge-release requires NPM_AUTH_TOKEN");
  let latest;
  try {
    latest = await getPackage(pkg.name + "/latest");
  } catch (e) {
    // unpublished
  }

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
  await np(await getVersionBump(), {
    cleanup: false,
    tests: false,
    publish: false,
    yarn: false,
    contents: "./dist/ngx-filesize"
  });
};

if (
  process.env.GITHUB_EVENT_PATH &&
  process.env.NPM_AUTH_TOKEN &&
  process.env.GITHUB_SHA
) {
  run();
}
