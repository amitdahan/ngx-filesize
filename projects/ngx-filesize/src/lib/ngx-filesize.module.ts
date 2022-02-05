import { NgModule } from '@angular/core';
import { FilesizePipe } from './filesize.pipe';

@NgModule({
  declarations: [FilesizePipe],
  exports: [FilesizePipe]
})
export class NgxFilesizeModule { }
