import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'buscarselectP'
})
export class BuscarselectPPipe implements PipeTransform {

    transform(value: [any], args: string): any {
        const productos = [];
        // tslint:disable-next-line:triple-equals
        if (args[0] != "0" && args[0] != '' && typeof (args[0]) != "undefined" || value != null) {
            for (const ca of value) {
                console.log(ca.category.cnombre.indexOf( args ))
                // tslint:disable-next-line:triple-equals
                if (ca.category.cnombre.indexOf( args ) == -1) {
                    console.log("descpcion", ca.pdescripcion)
                    productos.push( ca )
                }
            }
            return productos;

        }

    }

}
