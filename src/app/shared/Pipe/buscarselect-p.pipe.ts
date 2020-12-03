import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'buscarselectP'
})
export class BuscarselectPPipe implements PipeTransform {

    transform(value: [any], ...args: string[]): any {
        const productos = [];
        if (args[0] != "0" && args[0] != '' && typeof (args[0]) != "undefined") {
            for (const ca of value) {
                if (ca.category.cnombre.indexOf( args ) > -1) {
                    productos.push( ca )
                }
            }
            return productos
        }
        return productos
    }

}
