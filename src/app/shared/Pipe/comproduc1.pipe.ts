import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comproduc1'
})
export class Comproduc1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
const rBusqueda=[];
      if(args){
        for(const u of value){
          if(u.product.category.cnombre.indexOf(args) > -1){
            rBusqueda.push(u.product.brand.bnombre)
          }
        }
        return rBusqueda
      }
    return null;
  }

}
