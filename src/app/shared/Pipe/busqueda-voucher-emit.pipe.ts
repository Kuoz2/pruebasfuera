import { VentasService } from 'src/app/Service/ventas.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaVoucherEmit'
})
export class BusquedaVoucherEmitPipe implements PipeTransform {
  public informacion = []
   transform(value: any[], ...args: String[]) {
    //Esta condicional almacena lo buscado.
    console.log("argumento antes de entrar", args)
   if(args[0].length === 13){
    console.log("argumento despues del 13", args  )
    var voucherencontrado = [];
    var PvoucherEmit = []
    var MvoucherEmit = []
    console.log(value)
    this.informacion.push(...args)
    console.log('argumentos', args[0].length)
    if(args[0] == ''){ 
      this.informacion.splice(0,this.informacion.length)
      return []}
     var numerico = parseInt(args[0].toString() )
      
    if(typeof (args) != 'undefined') {

      for (const p in value) {
        console.log('argumentossdadas', value[p].cod_market.toString().indexOf( args[0] ) > -1 )

        if (value[p].voucher_vendido !== true && value[p].cod_market.toString().indexOf( numerico ) > -1 || value[p].cod_panaderia.toString().indexOf( numerico ) > -1 && value[p].cod_market == numerico || value[p].cod_panaderia == numerico ) {
          if(value[p].voucher_vendido == false){

          console.log('entro verificando si hay alguno', args[0].length)

          if(value[p].cod_market === value[p].cod_panaderia && 
            value[p].cod_panaderia === args || value[p].cod_market === numerico &&
             value[p].market ===  true  && 
             value[p].panaderia === true &&
             value[p].cod_market !== 0 &&
             value[p].cod_panaderia !== 0){
              console.log("panaderia y market" , value[p])  

          voucherencontrado.push( value[p] ) 
          }
        
            if(value[p].cod_market !== 0 &&
               value[p].cod_panaderia == 0 &&
                value[p].panaderia == false && 
                  value[p].market == true &&
                  value[p].cod_market == numerico )
            {
              PvoucherEmit.push(value[p])
              console.log("market" , PvoucherEmit)  
            }

            if(value[p].cod_panaderia != 0 && value[p].cod_market == 0 &&
              value[p].panaderia == true && value[p].market == false && value[p].cod_panaderia == numerico ){
                MvoucherEmit.push(value[p])
                console.log("panaderia" , MvoucherEmit)  
            }
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
    return []
  }
}
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
