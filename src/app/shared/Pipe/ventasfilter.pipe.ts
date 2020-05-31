import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ventasfilter'
})
export class VentasfilterPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    const resultadovoucher = [];
    for (const v of value ) {
          if ( v.vnumerodebusqueda.toString().indexOf(arg) > -1) {
          resultadovoucher.push(v);
        }
    }
    return resultadovoucher;
  }


}
