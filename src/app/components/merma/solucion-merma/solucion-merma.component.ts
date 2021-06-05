import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-solucion-merma',
  templateUrl: './solucion-merma.component.html',
  styleUrls: ['./solucion-merma.component.scss']
})
export class SolucionMermaComponent implements OnInit {

  public GrTableMerma: Chart;
  constructor() {
  }

  ngOnInit(): void {
    this.grafico_mermas();

  }


  grafico_mermas() {

    return this.GrTableMerma = new Chart('tablemerma', {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Marz', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Ago', 'Sep', 'Nov', 'Dic'],

        datasets: [{
          label: 'perdida',
          data: [
            {y: 1000},
            {y: 100 },
            {y: 300}
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
        }]
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
