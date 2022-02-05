import { NgModule } from '@angular/core';
import { FilesizePipe } from './filesize.pipe';

@NgModule({
  declarations: [FileSizePipe],
  exports: [FilesizePipe]
})
export class NgxFilesizeModule { }
