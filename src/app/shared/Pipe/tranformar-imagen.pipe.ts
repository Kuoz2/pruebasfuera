import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranformarImagen'
})
export class TranformarImagenPipe implements PipeTransform {

  transform(value: string, ...args: any): any {
    if (typeof(value) != 'undefined'){

      return atob(value)
    }else {
            return ""
    }
  }

}
