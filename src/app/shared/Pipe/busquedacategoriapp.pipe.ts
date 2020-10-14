import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'busquedacategoriapp'
})
export class BusquedacategoriappPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    console.log( "lo que entra", value )
    console.log( "el argumento", args )

    const categorias = [];


    if (args[0] != "0") {
      if (typeof (value) != 'undefined') {
        for (const ca of value) {
          console.log( "la categoria", ca.category.cnombre.indexOf( args ) )
          if (ca.category.cnombre.indexOf( args ) > -1) {
            console.log( ca )
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

