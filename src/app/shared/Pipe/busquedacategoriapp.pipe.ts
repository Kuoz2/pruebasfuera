import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'busquedacategoriapp'
})
export class BusquedacategoriappPipe implements PipeTransform {

  transform(value: any[] , args: string): any {
    const categorias = [];
    if (typeof(args) != 'undefined' && value != null && value == [] ) {
      if (typeof (value) != 'undefined' ) {
        for (const ca in value) {
          if (value[ca].category.cnombre.toString().indexOf( args ) > -1) {
            categorias.push(value[ca]);
          }
        }
        return categorias
      }
      return categorias
    }
    console.log(value)

    return value
  }
  }

