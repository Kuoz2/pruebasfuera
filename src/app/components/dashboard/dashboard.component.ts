import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,} from '@angular/core';
import {PagosService} from "../../Service/pagos.service";
import {Pagos} from "../Modulos/Pagos";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {VoucherService} from "../../Service/voucher.service";
import {DetalleVoucher} from "../Modulos/DetalleVoucher";
import {ProductserviceService} from "../../Service/productservice.service";
import {Productos} from "../Modulos/Productos";
import {Sort_Prod, V_Producto} from "../Modulos/GANANCIAS";
import * as Chart from "chart.js";
import {Reporte_grafico, Venta_mes_atras, Venta_por_mes,} from "../Modulos/reporte_grafico";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>();

   // public doughnutData = doughnutData;
    //public pieData = pieData;
    public coleccion: Pagos[] = [];
    public vouch_prod: DetalleVoucher[] = [];
    public list_produc: Productos[] = [];
    //Perdidas del mes anterior
    public stock_perdidas_anterior: any;
    // variable para las perdidas de este mes
    public stock_perdidas_este_mes: any;
    //Lista de productos vendidos
    public lisprodsale: Sort_Prod[] = [];
    //Toma los productos perdidas del mes pasado
    public da = [];
    // Toma los productos perdidas de este mes
    public de = [];
//Reduciendo los valores obtenidos de los productos y el stock de perdida del mes anterior
    public reducido = [];
    //Reduciendo los valors obtenidos de los productos y el stock de perdidas de este mes
    public reduciendo_est = [];

    //Obttiene los regresado por el servidor sobre las todas las ganancias.
    public todas_las_ventas:Reporte_grafico;

    public chaarti: Chart;
//Para cargar el grafico del porcentaje de ventas realizadas
    public porsentaje_venta: Chart;

    //GRAFICO PONDERADO PARA LAS PERDIDAS DE LOS MESES.

    //Ganancias por mes.
    ganancias_mensuales: Venta_por_mes;

    //OBTIENE EL PROSENTAJE DE GANANCIAS OBTENIDAS ENTRE 2 MESES.
    public porcentaje_ventas: any = 0;

    //FECHAS OBTENIDAS ESTE MES.
    fechas_registradas = [];

    //Ganancias del mes pasado
    public ganancias_mes_pasado: Venta_mes_atras;
    public productos_vendidos: V_Producto[] = [];
    p: number = 1;

    constructor(private gnc: PagosService, private cd: ChangeDetectorRef,
                private vouch: VoucherService, private produc: ProductserviceService) {
       // Object.assign( this, {doughnutData, pieData} );

    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    //Ordenamiento de productos mas vendidos.
    lista_producto_vendido() {
        const valores_obtenidos = [];
        for (const pr of this.productos_vendidos) {
            valores_obtenidos.push( pr.product )
        }
        var matriz = {};
        valores_obtenidos.forEach( (registro) => {
            const producto = registro;
            matriz[JSON.stringify( producto )] = matriz[JSON.stringify( producto )] ? (matriz[JSON.stringify( producto )] + 1) : 1;
        } );
        matriz = Object.keys( matriz ).map( (producto) => {

            return {
                nombre: JSON.parse( producto ).pdescripcion,
                valor: JSON.parse( producto ).pvalor * matriz[producto],
                cantidad: matriz[producto]
            }
        } );

        //Subir el resultado a una matriz.
        const __result = []

        for (const i in matriz) {
            __result.push( matriz[i] )
        }

        this.lisprodsale = __result.sort( function (a, b) {

            return (b.valor - a.valor)
        } );


        return this.lisprodsale
    }



    //Productos mas vendidos
        //const maximo = Math.max(...this.valores_voucher);


        //this.productos_voucher.filter((obj) => {if (obj.pvalor >= maximo){norepetidos.push(obj)} });
        //norepetidos.forEach(elemen => {this.sumato = this.sumato + elemen.pvalor});




// Perdidas del mes pasado
    _stock_productos(res):void {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
if (!res) {
    for (const l of res) {
        for (const d of l.products) {
            this.da.push( l.stock_lost * d.pvalor )
        }
    }
    this.reducido.push( this.da.reduce( reducer ) )
}else {
    this.reducido.push(0)
}
    }

    //Perdidas de este mes
    _stock_productos_perdida(res) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        if (res != 0) {
            for (const l of res) {
                for (const d of l.products) {
                    this.de.push( l.stock_lost * d.pvalor )
                }
            }
            this.reduciendo_est.push( this.de.reduce( reducer ) )

        } else{
            this.reduciendo_est.push(0)
        }


    }



/*
  // doughnut 2
  public view = chartData.view;
  public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
  public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
  public doughnutChartGradient = chartData.doughnutChartGradient;
  public doughnutChartTooltip = chartData.doughnutChartTooltip;

  public chart5 = chartData.chart5;


  // lineChart
  public lineChartData = chartData.lineChartData;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // lineChart
  public smallLineChartData = chartData.smallLineChartData;
  public smallLineChartLabels = chartData.smallLineChartLabels;
  public smallLineChartOptions = chartData.smallLineChartOptions;
  public smallLineChartColors = chartData.smallLineChartColors;
  public smallLineChartLegend = chartData.smallLineChartLegend;
  public smallLineChartType = chartData.smallLineChartType;

  // lineChart
  public smallLine2ChartData = chartData.smallLine2ChartData;
  public smallLine2ChartLabels = chartData.smallLine2ChartLabels;
  public smallLine2ChartOptions = chartData.smallLine2ChartOptions;
  public smallLine2ChartColors = chartData.smallLine2ChartColors;
  public smallLine2ChartLegend = chartData.smallLine2ChartLegend;
  public smallLine2ChartType = chartData.smallLine2ChartType;

  // lineChart
  public smallLine3ChartData = chartData.smallLine3ChartData;
  public smallLine3ChartLabels = chartData.smallLine3ChartLabels;
  public smallLine3ChartOptions = chartData.smallLine3ChartOptions;
  public smallLine3ChartColors = chartData.smallLine3ChartColors;
  public smallLine3ChartLegend = chartData.smallLine3ChartLegend;
  public smallLine3ChartType = chartData.smallLine3ChartType;

  // lineChart
  public smallLine4ChartData = chartData.smallLine4ChartData;
  public smallLine4ChartLabels = chartData.smallLine4ChartLabels;
  public smallLine4ChartOptions = chartData.smallLine4ChartOptions;
  public smallLine4ChartColors = chartData.smallLine4ChartColors;
  public smallLine4ChartLegend = chartData.smallLine4ChartLegend;
  public smallLine4ChartType = chartData.smallLine4ChartType;

    public chart3 = chartData.chart3;

*/




  // events
  public chartClicked(e: any): void {
  }
  public chartHovered(e: any): void {
  }



  ngOnInit(){
    //Los pagos
    this.gnc.mostrarpagos().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data => {this.coleccion = data; this.cd.markForCheck()},(err) =>{console.log(err)});

    //Listado de productos para la lista de mas vendidos.
    this.vouch.p_vendidos().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {this.productos_vendidos = data; console.log(data); this.cd.markForCheck()});

    //Ganancias del mes pasado
    this.vouch.ganancia_mes_anterior().
        pipe(takeUntil(this.unsubscribe$)).
        subscribe(res => {this.ganancias_mes_pasado  = res ; this.cd.markForCheck();});

    //ganancias mensuales
    this.vouch.cantidad_vendida().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(res => {this.ganancias_mensuales = res ; this.cd.markForCheck();});

    //Los vouchers
    this.vouch.detalledeventa().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data =>{this.vouch_prod = data; this.cd.markForCheck()});

    //Los Productos
    this.produc.products().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data => {this.list_produc = data; this.cd.markForCheck()});

    //El stock de perdidas de este mes.
    this.produc.stock_perida_este_mes().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data => { this.stock_perdidas_este_mes = data; this.cd.markForCheck()});

    //Stock peridasd del mes anterior
    this.produc.stock_perdida_anterior().
        pipe(takeUntil(this.unsubscribe$)).
    subscribe( data => {this.stock_perdidas_anterior = data; this.cd.markForCheck()});


    //Stock y los productos para ser calculados.
    this.produc._stock_productos().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe( res =>{this._stock_productos(res) ; this.cd.markForCheck()});

      //Retorna las perdidas de este mes.
      this.produc._stock_perdidas_hoy().
      pipe(takeUntil(this.unsubscribe$)).
      subscribe( res => {
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          const perdida_lost = [];
          if ( res) {
              for (const l of res) {
                  for (const d of l.products) {
                      perdida_lost.push(l.stock_lost * d.pvalor)
                  }
              }
              this.reduciendo_est.push( perdida_lost.reduce( reducer ) )

          } else{
              this.reduciendo_est.push(0)
          }



          this.cd.markForCheck()
      });


                //Datos del grafico
      this.produc.__graf_perdidas().pipe(takeUntil(this.unsubscribe$)).subscribe(
          res => {
              const dg = [];
              const vg = [];
              const vs = [];
              for (const d of res) {
                  for (const h of Object.keys( d ))
                  {
                      dg.push([h])
                  }
                  for (const l of Object.values(d)){
                      vg.push(parseInt(l.toString()));
                      vs.push(parseInt(l.toString()))
                      console.log("vg",vg)
                      console.log("vs",vs.reverse())
                  }
              }


              this.chaarti = new Chart('canvas',{
                  type: 'bar',
                  data:{
                      labels: dg,
                      datasets:[
                          {
                              label:'Mes anterior',
                          data: vg,

                          fill:false
                      },
                          {
                              label:'Este mes',
                              data: vs.reverse(),
                              backgroundColor:'#ff6384',
                              fill:false
                          }
                      ],

                  },
                  options: {
                      scales: {

                          ticks:{
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
              }) ;

          this.cd.markForCheck()});
      //Busca y muestra el total de ganancias obtenidas
      this.vouch.muestra_todas_ganancias().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {this.todas_las_ventas = res; this.cd.markForCheck()} );
      //BUSCA LAS GANANCIAS POR MES Y LAS MUESTRA.
      this.vouch.mostrar_ganancias_fv().pipe(takeUntil(this.unsubscribe$)).subscribe(res =>{
          const dg2 = [];
          const vg2 = [];
            if (!res) {
                for (const d of res) {
                    for (const h of Object.keys( d )) {
                        dg2.push( [h] );
                    }
                    for (const l of Object.values( d )) {
                        vg2.push( parseInt( l.toString() ) );


                    }
                }
            }else {
                vg2.push(0)
            }
          const reducer = (accumulator, currentValue) =>   (currentValue % 100) / accumulator ;
          const raiz = vg2.slice(-2).reduce(reducer)
          //console.log("raiz", Math.sqrt(raiz).toFixed(2 ))
              this.porcentaje_ventas = Math.sqrt(raiz).toFixed(2)
          //Iniciando un grafico lineal para porcentajes
          this.porsentaje_venta = new Chart('ctx1',{
              type: 'line',

              data:{
                  labels: dg2,
                  datasets: [{
                      steppedLine:true,
                      borderColor:'blue',
                      data:vg2,
                      backgroundColor:'#84B7FA'
                  }
                  ]
              },
              options:{

                  legend:{
                      display:false
                  },
                  scales: {
                      yAxes: [{
                          display:false,
                          stacked: true
                      }],
                      xAxes: [{
                          display:true,
                          stacked: false
                      }],

                  }
              }
          });

       this.cd.markForCheck()});

        //Detectar el navagador
            this.detectando()
  }//Fin del OnInit

    detectando(){
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            console.log("probando lo que buelve", navigator.userAgent.match(toMatchItem))
            return navigator.userAgent.match(toMatchItem);
        });
    }


}
