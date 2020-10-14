import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'agregarmasmermas'
})
export class AgregarmasmermasPipe implements PipeTransform {

  transform(value: [any], ...args: string[]): any {

    const productos = [];

    if (args[0] != "0" && args[0] != '' && typeof(args[0]) != "undefined"){
      console.log("esta opasando por aca");
      for (const ca of value){
        if (ca.category.cnombre.indexOf(args) > -1){
          console.log("lo que entra", ca)
          productos.push(ca)
        }
      }
      return productos
    }else{
      return value.slice(value.length)
    }

  }

}
