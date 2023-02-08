import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEur',
})
export class UsdToEurPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(100 * (value * 0.93)) / 100;
  }
}
