import { NgModule } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

@NgModule({
  declarations: [FileSizePipe],
  exports: [FileSizePipe]
})
export class NgxFilesizeModule { }
