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
        if (value[p].cod_market.toString().indexOf( args ) > -1 || value[p].cod_panaderia.toString().indexOf( args ) > -1 && value[p].cod_market == args || value[p].cod_panaderia == args) {
          if(value[p].cod_market.toString().indexOf( args ) > -1 && value[p].cod_panaderia.toString().indexOf( args ) > -1 ){
            voucherencontrado.push( value[p] )
            break
          }
          if(value[p].cod_market =! 0 && value[p].cod_panaderia == 0){
            voucherencontrado.push( value[p] )
            break
          }
          if(value[p].cod_panaderia != 0 && value[p].cod_market == 0){
            voucherencontrado.push( value[p] )
            break
          }
        

        }
      }
      return voucherencontrado
    }
    return []
  }

}
