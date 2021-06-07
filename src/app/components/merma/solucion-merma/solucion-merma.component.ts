import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import {ProductserviceService} from '../../../Service/productservice.service';

@Component({
  selector: 'app-solucion-merma',
  templateUrl: './solucion-merma.component.html',
  styleUrls: ['./solucion-merma.component.scss']
})
export class SolucionMermaComponent implements OnInit {

  public GrTableMerma: Chart;
  public datosobtenidos;
  isloading: boolean;
  constructor( private stcn: ProductserviceService) {
  this.isloading = false;
  }

  async ngOnInit() {

    await this.obteniendodatos();
    console.log('datos', this.datosobtenidos[0].Consumo);
    await this.grafico_mermas();
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
    console.log('entrante', this.datosobtenidos[3]);
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
}
