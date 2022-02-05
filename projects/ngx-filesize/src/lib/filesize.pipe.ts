import { Pipe, PipeTransform } from '@angular/core';
import filesize from 'filesize';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  private static transformOne(value: number, options?: any): string {
    return filesize(value, options);
  }

  transform(value: number | number[], options?: any) {
    if (Array.isArray(value)) {
      return value.map(val => FilesizePipe.transformOne(val, options));
    }

    return FilesizePipe.transformOne(value, options);
  }
}
