import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaprodutomarket'
})
export class BusquedaprodutomarketPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    //Esta condicional almacena lo buscado.
    const voucherpanaderia = [];
    if(args == ''){ return []}

    if (typeof (args) != 'undefined') {
      console.log('entrante panaderia', args)

      for (const p in value) {
        if ( value[p].cod_market.toString().indexOf( args ) > -1 && value[p].market == true && value[p].panaderia == false && value[p].cod_market == args ) {
          console.log(value[p])

          voucherpanaderia.push( value[p] )
        }
      }
      return voucherpanaderia
    }
    return []
  }

}
