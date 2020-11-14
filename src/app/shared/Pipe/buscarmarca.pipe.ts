import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'buscarmarca'
})
export class BuscarmarcaPipe implements PipeTransform {

  transform(value: [any], ...args: string[]): any {
    const marca = [];
    const marca2 = []
    if (args[0] != "0" && args[0] != '' && typeof (args[0]) != "undefined") {
      for (const ca of value) {
        if (ca.category.cnombre.indexOf( args ) > -1) {
          marca2.push( ca );
        }
      }
      const data = Object.values( marca2.reduce( (prev, next) => Object.assign( prev, {[next.brand]: next} ), {} ) );
        for (const de of data){
          marca.push(de)
        }
    }
    return marca
  }
}

