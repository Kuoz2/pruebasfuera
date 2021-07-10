import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'inventarioGestion'
})
export class InventarioGestionPipe implements PipeTransform {

  transform(value: [any], ...args: any[]): any {
    const valormenor =[];
    if (value){
      for (let d of value){
        console.log("primer inventairo", d)
        if (d.stock.pstock < 10 && d.stock.pstock != 0 && d.stock.psotck != null){
          valormenor.push(d);

        }
      }
      return valormenor;
    }

  }

}
