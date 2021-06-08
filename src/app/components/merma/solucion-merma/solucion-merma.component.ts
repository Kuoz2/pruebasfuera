import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import {ProductserviceService} from '../../../Service/productservice.service';
import {ChartOptions} from 'chart.js';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-solucion-merma',
  templateUrl: './solucion-merma.component.html',
  styleUrls: ['./solucion-merma.component.scss']
})
export class SolucionMermaComponent implements OnInit {

  public GrTableMerma: Chart;
  public datosobtenidos;
  isloading: boolean;
  public pieChart: Chart;
  // tslint:disable-next-line:variable-name
   total_mermas: number;
  // tslint:disable-next-line:variable-name
   public porcentaje_consumo;
  // tslint:disable-next-line:variable-name
   public porcentaje_nofactura;
  // tslint:disable-next-line:variable-name
   public porcentaje_quebrado;
  // tslint:disable-next-line:variable-name
   public porcentaje_vencido;
    // tslint:disable-next-line:variable-name
   public total_estado;
    // tslint:disable-next-line:variable-name
   public porcentaje_nosolucionad;
    // tslint:disable-next-line:variable-name
   public porcentaje_solucionado;
  constructor( private stcn: ProductserviceService, private spinner: NgxSpinnerService) {
  this.isloading = false;
  }

  async ngOnInit() {
    this.spinner.show();
    await this.obteniendodatos();
    console.log('datos', this.datosobtenidos[0].Consumo);
    await this.grafico_mermas();
    await this.graficoestadomerma();
    await this.totalmuestra();
  }

  obteniendodatos() {
   return this.stcn.cantidadesObtenidas().then(
       res => this.datosobtenidos = res
   ).finally(() =>  {
     this.isloading = true;
   }).catch(
      err => {console.log('se obtuvo un error', err); }
   );
  }

  grafico_mermas() {
    console.log('entrante', this.datosobtenidos);
    return this.GrTableMerma = new Chart('tablemerma', {
      type: 'bar',
      data: {
        labels: ['Consumo', 'No, factura', 'Quebrado', 'Vencido'],

        datasets: [{
          label: 'Mermas',
          data: [
            this.datosobtenidos[0].Consumo,
  ],
          backgroundColor: [
            'rgba(240, 14, 14, 1)',
          ],
        },
          {
            label: 'Factura',
            data: [0, this.datosobtenidos[1].noFacutra , 0 , 0],
            backgroundColor: ['rgba(197, 29, 196, 1)', 'rgba(197, 29, 196, 1)', 'rgba(197, 29, 196, 1)']
          },
          {
            label: 'Quebrado',
            data: [0, 0, this.datosobtenidos[2].quebrado, 0],
            backgroundColor: ['rgba(184, 241, 232, 1)', 'rgba(184, 241, 232, 1)', 'rgba(184, 241, 232, 1)']
          },
          {
            label: 'Vencidos',
            data: [0, 0, 0, this.datosobtenidos[3].vencido],
            backgroundColor: ['rgba( 91, 175, 174, 1)', 'rgba( 91, 175, 174, 1)', 'rgba( 91, 175, 174, 1)', 'rgba( 91, 175, 174, 1)']
          },
        ],
      },

     options: {
       scales: {
         ticks: {
           suggestedMin: 10,
           suggestedMax: 200,
           stepSize: 0.5
         },
         xAxes: [{
           stacked: false
         }],
         yAxes: [{
           stacked: true
         }]
       }
     }


    });
  }

  graficoestadomerma() {
  return this.pieChart = new Chart('espiralsituacion', {
    type: 'pie',
    data: {labels: ['Solcionados', 'No, solucionados'],
    datasets: [
        { label: 'Solucionado',
          data: [this.datosobtenidos[5].siresuelto, this.datosobtenidos[4].noresuelto],
          backgroundColor: ['rgba(8, 109, 244, 1)', 'rgba(255, 38, 38, 1)']
        },
    ]
    },
    options: {
      scales: {
        ticks: {
          suggestedMin: 10,
          suggestedMax: 200,
          stepSize: 0.5
        },
      }
    }

  });
  }

  totalmuestra() {
    // tslint:disable-next-line:max-line-length
     this.total_mermas = this.datosobtenidos[0].Consumo + this.datosobtenidos[1].noFacutra + this.datosobtenidos[2].quebrado + this.datosobtenidos[3].vencido;
     this.total_estado = this.datosobtenidos[5].siresuelto + this.datosobtenidos[4].noresuelto;
     const totalmultiplo = this.total_mermas * 100;
     const totalestado = this.total_estado * 100;
     const porsentajeconsumo = (this.datosobtenidos[0].Consumo * 100 ) / totalmultiplo ;
     const porsentajefactura = (this.datosobtenidos[1].noFacutra * 100) / totalmultiplo ;
     const porsentajequebrado = (this.datosobtenidos[2].quebrado * 100) / totalmultiplo;
     const posentajevencido = (this.datosobtenidos[3].vencido * 100) / totalmultiplo;
     const porcentajesolucionado = (this.datosobtenidos[5].siresuelto / totalestado);
     const porcentajenosolucionado = (this.datosobtenidos[4].noresuelto / totalestado);
     // @ts-ignore
     this.porcentaje_consumo = porsentajeconsumo.toFixed(2) * 100;
     // @ts-ignore
     this.porcentaje_nofactura = porsentajefactura.toFixed(2) * 100;
     // @ts-ignore
     this.porcentaje_quebrado = porsentajequebrado.toFixed(2) * 100;
      // @ts-ignore
     this.porcentaje_vencido = posentajevencido.toFixed(2) * 100;
      // tslint:disable-next-line:triple-equals
     if (this.datosobtenidos[5].siresuelto != this.datosobtenidos[4].noresuelto) {
         // @ts-ignore
         this.porcentaje_solucionado = porcentajesolucionado.toFixed(2) * 100;
         // @ts-ignore
         this.porcentaje_nosolucionad = porcentajenosolucionado.toFixed(2) * 100;

     } else {
         this.porcentaje_solucionado = 50;
         this.porcentaje_nosolucionad = 50;
     }

     this.spinner.hide();
  }
}

