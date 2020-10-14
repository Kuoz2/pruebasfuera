import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'inventarioGestion'
})
export class InventarioGestionPipe implements PipeTransform {

  transform(value: [any], ...args: any[]): any {
    const valormenor =[];
    for (let d of value){
      if (d.stock.pstock < 10 && d.stock.pstock != 0){
        valormenor.push(d);

      }
    }
    return valormenor;
  }

}
