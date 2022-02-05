# ngx-filesize

A [filesize.js](https://filesizejs.com) pipe for Angular

## v2 Migration
Pipe name was changed from `{{ 123 | bytes }}` to `{{ 123 | filesize }}`

## Usage:
```
npm install ngx-filesize
```

#### In your module:
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

#### In your component:
```typescript
{{bytes | filesize}}
```
