import {NgModule} from '@angular/core';
import {FileSizePipe} from './filesize.pipe';


@NgModule({
  declarations: [
    FileSizePipe,
  ],
  imports: [],
  exports: [
    FileSizePipe,
  ],
})
export class NgxFilesizeModule {
}
