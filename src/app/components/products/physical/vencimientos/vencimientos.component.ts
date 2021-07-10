import { Fecha_vencimiento } from './../../../Modulos/Fecha_vencimiento';
import { date_expiration } from './../../../Modulos/Productos';
import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../../../../Service/productservice.service';
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
  fechas_vence_prox: Fecha_vencimiento[];
    // tslint:disable-next-line:variable-name
  obtener_mes = [];
    // tslint:disable-next-line:variable-name
  obtener_dias = [];
    // tslint:disable-next-line:variable-name
  obtener_anio = [];
    // tslint:disable-next-line:variable-name
  mes_actual = new Date().getMonth() + 1;
    // tslint:disable-next-line:variable-name
  dia_actual = new Date().getDate();
    // tslint:disable-next-line:variable-name
  anio_actual = new Date().getFullYear();

  segundas_fechas = []

  resultado = [];

    // tslint:disable-next-line:variable-name
  obtener_nombre_prd = [];

    // tslint:disable-next-line:variable-name
  cantidad_dias_vencido;
  // Obtener la marca
  obtener_marca = []
  obtener_categoria = []
  obtener_fechacompleta = []
  isloading: boolean;
  diastrascurridos2: number;

    constructor(private serproduct: ProductserviceService, private ngxspinner: NgxSpinnerService) {  this.isloading = false       }

   async ngOnInit() {
                this.ngxspinner.show();
                await this.estanPorvencer().finally(() => {this.isloading = true});
                await this.productosquevenceran().finally(() => {this.isloading = true});
          console.log('segundas fechas', this.segundas_fechas)
   }

  async estanPorvencer() {
     await this.serproduct.GetPorvencer().then(
         res => {
           this.fechas_avencer = res;
           console.log('obtengo', this.fechas_avencer)
             // tslint:disable-next-line:radix max-line-length
           console.log('fechas', this.fechas_avencer.forEach(respuesta => { this.obtener_mes.push(parseInt(respuesta.date_expiration.fecha_vencimiento.slice(5, -3)));
               // tslint:disable-next-line:max-line-length radix
                                                                            this.obtener_dias.push(parseInt(respuesta.date_expiration.fecha_vencimiento.slice(8)));
               // tslint:disable-next-line:max-line-length radix        
                                                                            this.obtener_anio.push(parseInt(respuesta.date_expiration.fecha_vencimiento.slice(0, 4)));
                                                                            this.obtener_nombre_prd.push(respuesta.pdescripcion);
                                                                            this.obtener_marca.push(respuesta.brand.bnombre)
                                                                            this.obtener_categoria.push(respuesta.category.cnombre)
                                                                            this.obtener_fechacompleta.push(respuesta.date_expiration.fecha_vencimiento)


           }));
             // tslint:disable-next-line:radix


                 for (const i in this.obtener_dias) {
                   if (this.obtener_dias[i] < this.dia_actual) {
                      console.log('Esto vencio');
                   } else {
                       let fecha2 = new Date();
                       let minisegundos = 24 * 60 * 60 * 1000;
                       let fecha1 = new Date(this.obtener_fechacompleta[i])
                       let milesegundostranscurridos = Math.abs(fecha2.getTime() - fecha1.getTime());
                       let diastranscurridos = Math.round(milesegundostranscurridos / minisegundos);
                       let porcentajedias = diastranscurridos * 100
                       let raiscuadrada = Math.sqrt(porcentajedias)
                       const objectosjsonobtenidos = raiscuadrada.toFixed(0)
                       
                       // tslint:disable-next-line:max-line-length radix
                       const jsonObtenido = {marca: this.obtener_marca[i], 
                        categoria: this.obtener_categoria[i],
                        nombrePRD: this.obtener_nombre_prd[i], 
                        vence_en:  diastranscurridos,
                         queda_un:  objectosjsonobtenidos };
                       this.resultado.push(jsonObtenido);

                   }
               }
          
         }, 
  ).catch(
         error => {console.log('error al obtener los datos', error); }
     );
     this.ngxspinner.hide();
  }

 // calculandofecha(){
   // let fecha2 = new Date()
    //let minisegundos = 24 * 60 * 60 * 1000; 
    //for(let i of this.obtener_fechacompleta){
      //    let fecha1 = new Date(i)
        //  let milesegundostranscurridos = Math.abs(fecha2.getTime() - fecha1.getTime());
          //let diastranscurridos = Math.round(milesegundostranscurridos / minisegundos);
          //let porcentajedias = diastranscurridos * 100
          //let raiscuadrada = Math.sqrt(porcentajedias)
          //const objectosjsonobtenidos = {queda_un: raiscuadrada.toFixed(2)}
          //console.log(objectosjsonobtenidos)
        //}

  //}

  productosquevenceran(){
    return this.serproduct.Getprodvencmes().then(res => {
      console.log('respues', res)
      for(const i of res){
        let fecha2 = new Date();
        let minisegundos = 24 * 60 * 60 * 1000;
        let fecha1 = new Date(i.fecha_vencimiento || i.fecha_vencimiento2)
        let milesegundostranscurridos = Math.abs(fecha2.getTime() - fecha1.getTime());
        let diastranscurridos = Math.round(milesegundostranscurridos / minisegundos);
        let porcentajedias = diastranscurridos * 100
        let raiscuadrada = Math.sqrt(porcentajedias)
        console.log('segundas fechas', diastranscurridos)
        this.diastrascurridos2 = diastranscurridos
        this.segundas_fechas.push({marca: i.marca || i.marca2,
           categoria: i.categoria || i.categoria2,
           dedscripcion: i.descripcion || i.descripcion2,
           vencido_en:  parseInt(raiscuadrada.toFixed(0))
          })
          console.log('datos finales', this.segundas_fechas)
      }
    })
  }

  tomndo() {
      // tslint:disable-next-line:forin
      for (const i in this.resultado) {
          console.log('el resultado', this.resultado[i].queda_un);
      }


          }
}
