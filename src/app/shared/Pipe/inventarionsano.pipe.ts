import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'inventarionsano'
})
export class InventarionsanoPipe implements PipeTransform {

  transform(value: [any] ): any {
    const valor = [];
    for (let l of value)
    {
      if (l.stock.pstock > 10 || l.stock.pstock != 0){
        valor.push(l)
      }
    }
    console.log("valores", valor)
    return valor;
  }

}
