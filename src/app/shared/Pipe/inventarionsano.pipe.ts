import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'inventarionsano'
})
export class InventarionsanoPipe implements PipeTransform {

  transform(value: [any] ): any {
    const valor = [];

    if (value) {
      for (const l of value) {
        // tslint:disable-next-line:triple-equals
        if (l.stock.pstock > 10 || l.stock.pstock != 0) {
          valor.push(l);
        }
      }
      return valor;
    } else {
      return value;
    }

  }

}
