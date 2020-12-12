import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'busquedaApp'
})
export class BusquedaAppPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    //Esta condicional almacena lo buscado.
    const producto_app = [];
    if (typeof (args) != 'undefined' && value != null && value == []) {

      for (const p in value) {
        if (value[p].pcodigo.toString().indexOf( args ) > -1) {
          producto_app.push( value[p] )
        }
      }
      return producto_app
    }
    return value
  }
}
