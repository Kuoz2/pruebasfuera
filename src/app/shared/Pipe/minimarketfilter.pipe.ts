import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimarketfilter'
})
export class MinimarketfilterPipe implements PipeTransform {

  transform(value:any[], args: any):any {
    const producto_app = [];
    if(args == ''){ return []}
    console.log(args)
    if (typeof (args) != 'undefined') {
      console.log('entrante', args)

      for (const p in value) {
        producto_app.slice(0, value.length)
        if (value[p].pcodigo.toString().indexOf( args ) > -1 || value[p].category.cnombre.toString().indexOf(args.cnombre) > -1) {
          producto_app.push( value[p] )
          console.log("lo que guarda",producto_app)
        }
      }
      return producto_app
    }
    return []
  }

}
