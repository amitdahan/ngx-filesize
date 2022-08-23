# ngx-filesize

A [filesize.js](https://filesizejs.com) pipe for Angular.

## Preparing

### Install

Install both packages with:

```shell
npm install ngx-filesize filesize
```

### Dependency

The `filesize.js` is not compiled into the `ngx-filesize` rather than has a peer dependency.
So you can maintain the `filesize` dependency by your own.

### Disable warning

> app.component.ts depends on 'filesize'. CommonJS or AMD dependencies can cause optimization bailouts.

Warning can be disabled by [allowing common js](https://angular.io/guide/build#configuring-commonjs-dependencies).

## Usage

### Usage in your module

Required for every module where you use it in your component.

```typescript
import {NgxFilesizeModule} from 'ngx-filesize';

// ...

@NgModule({
  // ...
  imports: [
    // ...
    NgxFilesizeModule,
    // ...
  ]
  // ...
})
```

#### Usage in your component template

Without any option:

```html
{{bytes | filesize}}
```

With an option:

```html
{{bytes | filesize: {base: 10} }
```

More options and documentation at https://filesizejs.com/.

## Versioning

The package version should match used angular version to build the library.
Nevertheless, the peer dependency to angular allows higher angular versions to avoid strict versioning problems.

## Source project

https://github.com/amitdahan/ngx-filesize
