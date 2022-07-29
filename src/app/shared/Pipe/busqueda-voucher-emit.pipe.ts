import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaVoucherEmit'
})
export class BusquedaVoucherEmitPipe implements PipeTransform {

   transform(value: any[], args: string) {
    //Esta condicional almacena lo buscado.
    var voucherencontrado = [];
    console.log(value)
    if(args == ''){ return []}

    if (typeof (args) != 'undefined') {
      console.log('entrante', args)

      for (const p in value) {
        if (value[p].cod_market.toString().indexOf( args ) > -1 || value[p].cod_panaderia.toString().indexOf( args ) > -1 && value[p].cod_market == args || value[p].cod_panaderia == args) {
          this. Existengiguales(value[p], voucherencontrado, args) || this. ExisteNoiguales(value[p], voucherencontrado)

          console.log("valor3es nuevamente" , voucherencontrado)
          /*  if(value[p].cod_market == value[p].cod_panaderia ){
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
        */


        }
      }
      
      return voucherencontrado
    }
    return []
  }
    Existengiguales(a, b, arg){
        if(a.cod_market == a.cod_panaderia && a.cod_panaderia == arg ){
          b.push(a)
        }else
        {
          return false
        }
        return b
    }

    ExisteNoiguales(a, b){
      if(a.cod_market == 0){
        b.push(a)
      }
      return b
    }
    
}
