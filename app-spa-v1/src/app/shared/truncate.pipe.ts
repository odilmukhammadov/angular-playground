import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
  standalone: false,
})
export class TruncatePipe implements PipeTransform {
  /**
    Truncates a given string at the length and with the symob provided.
    e.g. 'This is a string' => 'This...', where the lenght is 1, and the symbol is '...'.
  */
  transform(value: string, length: number, symbol: string = '...'): string {
    return value.split(' ').slice(0, length).join(' ') + symbol;
  }
}
