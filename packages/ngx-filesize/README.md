# `ngx-filesize`

A [filesize.js](https://filesizejs.com) pipe for Angular.

## 3.0.0 breaking changes
- `ngx-filesize` now supports & requires Angular 14+.
- `filesize` is now a peer dependency (`>= 6.0.0 < 10.0.0`, note `10` isn't supported), and so it must be installed alongside `ngx-filesize@^3`.

## 2.0.0 breaking changes
Pipe name was changed from `{{ 123 | bytes }}` to `{{ 123 | filesize }}`

## Usage:

```sh
npm install ngx-filesize filesize@9
# or 
yarn add ngx-filesize filesize@9
```

Import the `NgxFilesizeModule` into your own `NgModule`:
```ts
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

And use the pipe in your templates:
```handlebars
{{ 123 | filesize }}
```

optionally add options to filesize e.g.
```handlebars
{{ 123 | filesize: {base: 2} }}
```
(this would transform 1024 to 1 like for bytes)
