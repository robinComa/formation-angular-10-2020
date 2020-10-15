import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, size: number = 10): string {
    const suffix = '...';
    if (value && value.length > size) {
      return value.slice(0, size - suffix.length) + suffix;
    } else {
      return value || '';
    }
  }

}
