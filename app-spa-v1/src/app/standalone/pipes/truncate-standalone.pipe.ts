import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateStandalone',
  pure: true,
  standalone: true,
})
export class TruncateStandalonePipe implements PipeTransform {
  transform(value: string, length: number, symbol: string = '...'): string {
    return value.split(' ').slice(0, length).join(' ') + symbol;
  }
}
