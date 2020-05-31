import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarproducto'
})
export class BuscarproductoPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadovoucher = [];
    for (const v of value ) {
      if ( v.pcodigo.toString().indexOf(arg) > -1 ) {
        resultadovoucher.push(v);
      }
    }
    return resultadovoucher;
  }

}
