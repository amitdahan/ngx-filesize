import { Inject, InjectionToken, Optional, Pipe, PipeTransform } from '@angular/core';
import * as filesize_ from 'filesize';

export type FileSizeOptions = Parameters<typeof filesize_>['1'];

export const NGX_FILE_SIZE_DEFAULT_OPTIONS =
    new InjectionToken<FileSizeOptions>('NGX_FILE_SIZE_DEFAULT_OPTIONS');

@Pipe({
  name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
  constructor(@Optional() @Inject(NGX_FILE_SIZE_DEFAULT_OPTIONS) private readonly defaults?: FileSizeOptions) {}

  private static transformOne(value: number, options?: FileSizeOptions): string {
    const filesize = filesize_;
    return filesize(value, options);
  }

  transform(value: number | number[], options?: FileSizeOptions) {
    const transformedOptions = this.defaults ? { ...this.defaults, ...options } : options;

    if (Array.isArray(value)) {
      return value.map(val => FileSizePipe.transformOne(val, transformedOptions));
    }

    return FileSizePipe.transformOne(value, transformedOptions);
  }
}
