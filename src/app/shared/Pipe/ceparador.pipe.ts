import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ceparador'
})
export class CeparadorPipe implements PipeTransform {

  transform(value: any): any {
    if (value == null) {
      return 0;
    } else {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    }
     }

}
