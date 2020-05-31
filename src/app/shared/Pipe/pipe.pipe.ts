import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'voucher'
})
export class PipePipe implements PipeTransform {

  transform(value: any, arg: number ): any {

    const resultado = [];
    if (arg)
    for (const v of value){
      if (v.pcodigo.toString().indexOf(arg) > -1 ){
        resultado.push(v);
      }
    }
return resultado

  }
}
