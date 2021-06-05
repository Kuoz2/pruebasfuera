import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../../../../Service/productservice.service';
import {Fecha_vencimiento} from '../../../Modulos/Fecha_vencimiento';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-vencimientos',
  templateUrl: './vencimientos.component.html',
  styleUrls: ['./vencimientos.component.scss']
})
export class VencimientosComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  fechas_avencer: Fecha_vencimiento[];
    // tslint:disable-next-line:variable-name
  obtener_mes = [];
    // tslint:disable-next-line:variable-name
  obtener_dias = [];
    // tslint:disable-next-line:variable-name
  obtener_anio = [];
    // tslint:disable-next-line:variable-name
    dia_avencer: Fecha_vencimiento[];
    // tslint:disable-next-line:variable-name
  mes_actual = new Date().getMonth() + 1;
    // tslint:disable-next-line:variable-name
  dia_actual = new Date().getDate();
    // tslint:disable-next-line:variable-name
  anio_actual = new Date().getFullYear();

  resultado = [];

    // tslint:disable-next-line:variable-name
  obtener_nombre_prd = [];

    // tslint:disable-next-line:variable-name
  cantidad_dias_vencido;



    constructor(private serproduct: ProductserviceService, private ngxspinner: NgxSpinnerService) {         }

   async ngOnInit() {
                this.ngxspinner.show();
                await this.estanPorvencer().finally();

   }

  async estanPorvencer() {
     await this.serproduct.GetPorvencer().then(
         res => {
           this.fechas_avencer = res;
           this.dia_avencer =  res;
             // tslint:disable-next-line:radix max-line-length
           console.log('fechas', this.fechas_avencer.forEach(respuesta => { this.obtener_mes.push(parseInt(respuesta.fecha_vencimiento.slice(5, -3)));
               // tslint:disable-next-line:max-line-length radix
                                                                            this.obtener_dias.push(parseInt(respuesta.fecha_vencimiento.slice(8)));
               // tslint:disable-next-line:max-line-length radix
                                                                            this.obtener_anio.push(parseInt(respuesta.fecha_vencimiento.slice(0, 4)));
                                                                            this.obtener_nombre_prd.push(respuesta.pdescripcion);


           }));
             // tslint:disable-next-line:radix
           console.log('mes obtenido', this.obtener_mes);
           console.log(this.obtener_dias);
           console.log(this.obtener_anio);
           console.log('fecha actual', this.mes_actual  );
           console.log('dia actual', this.dia_actual);
           console.log('anio actual', this.anio_actual);


           if (this.mes_actual === this.obtener_mes[0] && this.anio_actual === this.obtener_anio[0]) {
               for (const i in this.obtener_dias) {
                   if (this.obtener_dias[i] < this.dia_actual) {
                      console.log('Esto vencio');
                   } else {
                       console.log('esto aun no vence');
                       const resultado = [];
                       const multiplicacion = this.dia_actual * 100;
                       const porcentaje  = (this.obtener_dias[i] / multiplicacion) * 100;
                       // tslint:disable-next-line:max-line-length radix
                       const jsonObtenido = {nombrePRD: this.obtener_nombre_prd[i], vence_en:  this.obtener_dias[i] - this.dia_actual, queda_un: parseInt(String( porcentaje )) };
                       this.resultado.push(jsonObtenido);
                       console.log('resultado', this.resultado);

                   }
               }
           } else {
               console.log('no es de este mes');

           }
         }
  ).catch(
         error => {console.log('error al obtener los datos', error); }
     );
     this.ngxspinner.hide();
  }


  tomndo() {
      // tslint:disable-next-line:forin
      for (const i in this.resultado) {
          console.log('el resultado', this.resultado[i].queda_un);
      }


          }
}
