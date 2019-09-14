# ngx-filesize

A [filesize.js](https://filesizejs.com) pipe for Angular

## Usage:
```
npm install ngx-filesize
```

#### In your module:
```typescript
import {FileSizeModule} from 'ngx-filesize';

// ...

@NgModule({
    // ...
    imports: [
        // ...
        FileSizeModule,
        // ...
    ]
    // ...
})
```

#### In your component:
```typescript
{{bytes | filesize}}
```
