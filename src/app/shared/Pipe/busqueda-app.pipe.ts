import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'busquedaApp'
})
export class BusquedaAppPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    //Esta condicional almacena lo buscado.
    console.log(value)
    const producto_app = [];
    if (args) {
      for (const p of value){
        if (p.pcodigo.toString().indexOf(args) > -1 ){
          producto_app.push(p)
        }
      }
      return producto_app;
    }else {
      return ""
    }

  }

}
