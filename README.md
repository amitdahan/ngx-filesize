# ngx-filesize

A [filesize.js](https://filesizejs.com) pipe for Angular 2.X/4.X/5.X/...

##Usage:
```
npm install ngx-filesize
```

####In your module:
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

####In your component:
```typescript
{{bytes | filesize}}
```