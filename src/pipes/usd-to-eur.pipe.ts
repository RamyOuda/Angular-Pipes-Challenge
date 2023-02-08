import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEur',
  standalone: true,
})
export class UsdToEurPipe implements PipeTransform {
  transform(value: number): number {
    return value * 0.93;
  }
}
