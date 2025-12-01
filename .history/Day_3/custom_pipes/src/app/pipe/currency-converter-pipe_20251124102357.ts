import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    if(data.length > 0) {
      let [data] =  args;
      return da
    }else{

    }
    return value*120;
  }

}
