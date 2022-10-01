import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaVoucherEmit'
})
export class BusquedaVoucherEmitPipe implements PipeTransform {

   transform(value: any[], args: string) {
    //Esta condicional almacena lo buscado.
    var voucherencontrado = [];
    var PvoucherEmit = []
    var MvoucherEmit = []
    console.log(value)
    if(args == ''){ return []}

    if (typeof (args) != 'undefined') {

      for (const p in value) {
        if (value[p].cod_market.toString().indexOf( args ) > -1 || value[p].cod_panaderia.toString().indexOf( args ) > -1 && value[p].cod_market == args || value[p].cod_panaderia == args) {


          if(value[p].cod_market == value[p].cod_panaderia && 
            value[p].cod_panaderia == args || value[p].cod_market == args &&
             value[p].market ==  true  && 
             value[p].panaderia == true &&
             value[p].cod_market !== 0 &&
             value[p].cod_panaderia !== 0){

          voucherencontrado.push( value[p] ) 
          console.log("panaderia y market" , voucherencontrado)  
          }
        
            if(value[p].cod_market !== 0 &&
               value[p].cod_panaderia == 0 &&
                value[p].panaderia == false && 
                  value[p].market == true &&
                  value[p].cod_market == args )
            {
              PvoucherEmit.push(value[p])
              console.log("market" , PvoucherEmit)  
            }

            if(value[p].cod_panaderia != 0 && value[p].cod_market == 0 &&
              value[p].panaderia == true && value[p].market == false && value[p].cod_panaderia == args ){
                MvoucherEmit.push(value[p])
                console.log("panaderia" , MvoucherEmit)  
            }
        }
      }
      if(MvoucherEmit.length !== 0){
        console.log("elimine aqui market true false", MvoucherEmit.length)
          
        return MvoucherEmit
      }
      if(voucherencontrado.length !== 0){
        console.log("elimine aqui true true", voucherencontrado.length)
        return voucherencontrado
      }
    
      if(PvoucherEmit.length !== 0){
 
        return PvoucherEmit
      }
      
    }
    return []
  }
  reducion(item){
    let total = item.reduce((a,b) => a.pvalor + b, 0);
    console.log("el total", total)
  }

    Existengiguales(a, b, arg){
        if(a.cod_market == a.cod_panaderia && a.cod_panaderia == arg ){
          b.push(a)
          console.log(b)
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
