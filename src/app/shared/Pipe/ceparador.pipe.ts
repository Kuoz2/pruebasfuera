import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ceparador'
})
export class CeparadorPipe implements PipeTransform {

  transform(value: any): any {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

}
