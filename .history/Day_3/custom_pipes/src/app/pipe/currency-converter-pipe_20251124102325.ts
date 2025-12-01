import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let [data] =  args;
    if(data.length > 0) {
      
    }
    return value*120;
  }

}
