import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inventariosinstock2'
})
export class Inventariosinstock2Pipe implements PipeTransform {

  transform(value: [any], ...args: any[]): any{
    const peligro = [];
    if (value) {
      for (let p of value) {
        if (p.stock.pstock === 0) {
          peligro.push( p )
        }
      }
      return peligro;
    } else
    {
      return value
    }
  }

}
