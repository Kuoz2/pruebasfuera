import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda2inventario'
})
export class Busqueda2inventarioPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    const producto_app = [];
    console.log('entrante', value)
      if(args == ''){ return []}
    if (typeof (args) != 'undefined') {

      for (const p in value) {

        if (value[p].product.pcodigo.toString().indexOf( args ) > -1) {
          producto_app.push( value[p] )
        }
      }
      return producto_app
    }
  }

}
