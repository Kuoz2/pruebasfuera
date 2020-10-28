import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'buscarmarca'
})
export class BuscarmarcaPipe implements PipeTransform {

  transform(value: [any], ...args: string[]): any {
    const marca = [];
    if (args[0] != "0" && args[0] != '' && typeof (args[0]) != "undefined") {
      for (const ca of value) {
        if (ca.category.cnombre.indexOf( args ) > -1) {
          marca.push( ca )
        }
      }
      return marca
    }
    return null;
  }

}
