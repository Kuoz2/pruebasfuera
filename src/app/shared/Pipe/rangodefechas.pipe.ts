import { Fecha_vencimiento } from './../../components/Modulos/Fecha_vencimiento';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { unbind } from 'mousetrap';

@Pipe({
  name: 'rangodefechas'
})
export class RangodefechasPipe implements PipeTransform {

  transform(value: any, args: string[], args2: string[]): any {
   
    const fechain = []
    const rangofechas = []
    var fechainicial =  moment(args)
    var fechafinal = moment(args2)
    var iguales = 0
    if(value){
      if(args && args2){
        while(fechainicial.isSameOrBefore(fechafinal))
        {
        rangofechas.push(fechainicial.format('YYYY/MM/DD'))
        fechainicial.add(1, 'days')
         }
        for(const c in value)
        {
          if(value[c].fecha_emision.toString().indexOf(fechafinal.format('YYYY/MM/DD')) > -1 ){ 
             for(const d in value){
          for(let u in rangofechas){
            if( rangofechas[u] == value[d].fecha_emision )
            {
              iguales++;
              fechain.push(value[d])
            }
          }
        }
          break}
           
      
      }
    } 
    }
    

    return fechain;
  }

}
