import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'busquedacategoriapp'
})
export class BusquedacategoriappPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
       const categorias = [];

    if (args[0] != "0") {
      if (typeof (value) != 'undefined') {
        for (const ca of value) {
          if (ca.category.cnombre.indexOf( args ) > -1) {
            categorias.push( ca );
          }
        }
        return categorias
      } else {
        return ""
      }
    }else {

      return value
    }
  }
  }

