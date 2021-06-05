import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'inventariopeligro'
})
export class InventariopeligroPipe implements PipeTransform {

  transform(value: [any]): any {
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
