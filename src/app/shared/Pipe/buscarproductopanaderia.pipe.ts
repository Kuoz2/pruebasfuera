import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarproductopanaderia'
})
export class BuscarproductopanaderiaPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    //Esta condicional almacena lo buscado.
    const voucherpanaderia = [];
    if(args == ''){ return []}

    if (typeof (args) != 'undefined') {
      console.log('entrante', args)

      for (const p in value) {
        if ( value[p].cod_panaderia.toString().indexOf( args ) > -1 ) {
          voucherpanaderia.push( value[p] )
        }
      }
      return voucherpanaderia
    }
    return []
  }

}
