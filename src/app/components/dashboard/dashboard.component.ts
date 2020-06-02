import { Component, OnInit, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';
import {PagosService} from "../../Service/pagos.service";
import {Pagos} from "../Modulos/Pagos";
import {Subject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {VoucherService} from "../../Service/voucher.service";
import {DetalleVoucher} from "../Modulos/DetalleVoucher";
import {ProductserviceService} from "../../Service/productservice.service";
import {Productos} from "../Modulos/Productos";
import {GANANCIAS, Sort_Prod, V_Producto} from "../Modulos/GANANCIAS";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  public doughnutData = doughnutData;
  public pieData = pieData;
  public coleccion: Pagos[] = [];
  public vouch_prod: DetalleVoucher[] =[];
  public list_produc: Productos[]= [];
  //Lista de productos vendidos
  public lisprodsale:Sort_Prod[] = [];
   ganancias_mensuales =  GANANCIAS  ;
   public ganancias_mes_pasado:Productos[];
   public productos_vendidos: V_Producto[] = []  ;
  constructor(private gnc: PagosService, private cd: ChangeDetectorRef,
              private vouch:VoucherService, private produc:ProductserviceService) {
    Object.assign(this, { doughnutData, pieData });



  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  //Ordenamiento de productos mas vendidos.
   lista_producto_vendido(){
    const valores_obtenidos = [];
    for (const pr of this.productos_vendidos){
          valores_obtenidos.push(pr.product)
    }
    var matriz = {};
      valores_obtenidos.forEach((registro) => {
        const producto = registro  ;
        matriz[JSON.stringify(producto)] = matriz[JSON.stringify(producto)] ? (matriz[JSON.stringify(producto)] +1  ) :1 ;
      });
      console.log(matriz);
      matriz = Object.keys(matriz).map(  (producto) => {

        return {nombre: JSON.parse(producto).pdescripcion, valor: JSON.parse(producto).pvalor * matriz[producto], cantidad: matriz[producto]}
      });

    //Subir el resultado a una matriz.
    const __result =[]

    for (const i in matriz){
     __result.push(matriz[i])
    }

   this.lisprodsale = __result.sort(function (a,b) {

      return (b.valor - a.valor)
    })


    return  this.lisprodsale
  }

//Total de ingresos por mes.
  calcularpagos():number{
    const total = [] ;
    const mes = ["Enero","Febr","Marz","Abril","May","Jun","Jul","Agos","Sep","Oct","Dic"];
    const fech = new Date();
    const sum = (acumulador,sumando) => acumulador + sumando;
        for ( const l of this.coleccion){
          total.push(l.pagomonto)
        }
        console.log("fecha",fech.getDate(),fech.getMonth()+1, fech.getFullYear());
    return total.reduce(sum,0)
  }

  //Productos mas vendidos
  ven_prod() {
          //const maximo = Math.max(...this.valores_voucher);


          //this.productos_voucher.filter((obj) => {if (obj.pvalor >= maximo){norepetidos.push(obj)} });
          //norepetidos.forEach(elemen => {this.sumato = this.sumato + elemen.pvalor});


  }

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



  // events
  public chartClicked(e: any): void {
  }
  public chartHovered(e: any): void {
  }

  ngOnInit() {
    //Los pagos
    this.gnc.mostrarpagos().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data => {this.coleccion = data; this.cd.markForCheck()},(err) =>{console.log(err)});

    //Listado de productos para la lista de mas vendidos.
    this.vouch.p_vendidos().subscribe(data => {this.productos_vendidos = data; console.log(data)});

    //Ganancias del mes pasado
    this.vouch.ganancia_mes_anterior().
        pipe(takeUntil(this.unsubscribe$)).
        subscribe(res => {this.ganancias_mes_pasado  = res ; this.cd.markForCheck();});
    console.log("ganancias mes pasado", this.ganancias_mes_pasado);
    //ganancias mensuales
    this.vouch.cantidad_vendida().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(res => {this.ganancias_mensuales.push(res) ; this.cd.markForCheck();});
    console.log("ganancias mensual", this.ganancias_mensuales);

    //Los vouchers
    this.vouch.detalledeventa().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data =>{this.vouch_prod = data; this.cd.markForCheck()});

    //Los Productos
    this.produc.products().
    pipe(takeUntil(this.unsubscribe$)).
    subscribe(data => {this.list_produc = data; this.cd.markForCheck()})


  }

}
