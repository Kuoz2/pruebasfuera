import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inventariogestion2'
})
export class Inventariogestion2Pipe implements PipeTransform {

  transform(value: [any], ...args: any[]): any {
    const valor = [];
    if (value) {
      for (const l of value) {
        // tslint:disable-next-line:triple-equals

        console.log('valor', l);

        if (l.stock_expiration < 10 && l.stock_expiration != 0) {
          valor.push(l);

        }
      }
      return valor;
    } else {
      return value;
    }
  }

}
