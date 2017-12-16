import {Pipe, PipeTransform} from '@angular/core';

// Issue #22243
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/22243
declare let require: Function;
const filesize = require('filesize');

@Pipe({
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
    transform(value: number | number[], options: any) {
        if (Array.isArray(value)) {
            return value.map(val => FileSizePipe.transformOne(val, options));
        }

        return FileSizePipe.transformOne(value, options);
    }

    private static transformOne(value: number, options: any): string {
        return filesize(value, options);
    }
}