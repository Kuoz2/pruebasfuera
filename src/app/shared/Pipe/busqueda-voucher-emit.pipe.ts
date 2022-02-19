import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaVoucherEmit'
})
export class BusquedaVoucherEmitPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    //Esta condicional almacena lo buscado.
    const voucherencontrado = [];
    console.log(value)
    if(args == ''){ return []}

    if (typeof (args) != 'undefined') {
      console.log('entrante', args)

      for (const p in value) {
        if (value[p].cod_market.toString().indexOf( args ) > -1 || value[p].cod_panaderia.toString().indexOf( args ) > -1 ) {
          voucherencontrado.push( value[p] )
        }
      }
      return voucherencontrado
    }
    return []
  }

}
