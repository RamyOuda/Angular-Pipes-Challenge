import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorthand',
  standalone: true,
})
export class ShorthandPipe implements PipeTransform {
  transform(value: number): string {
    return `${Math.round(10 * (value / 1000000)) / 10} M`;
  }
}
