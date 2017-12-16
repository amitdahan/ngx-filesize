import { PipeTransform } from '@angular/core';
export declare class FileSizePipe implements PipeTransform {
    transform(value: number | number[], options: any): string | string[];
    private static transformOne(value, options);
}
