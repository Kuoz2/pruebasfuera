import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import {VoucherService} from "../../../../Service/voucher.service";
import {DetalleVoucher} from "../../../Modulos/DetalleVoucher";
import {Ventas} from "../../../Modulos/Ventas";
import {VentasService} from "../../../../Service/ventas.service";
import {Medio} from "../../../Modulos/Medio";
import {Voucher} from "../../../Modulos/Voucher";
import {flatMap, map, retry, takeUntil, timeout} from "rxjs/operators";
import {Observable, Subject} from "rxjs";
import {promise} from "selenium-webdriver";
import when = promise.when;
import {id} from "@swimlane/ngx-charts/release/utils";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  @Input() agregadoalalista = [];
  @Input()  busquedavoucher = [];
  @Input() loseleccionado: Medio;
  @Input() elmontodelcliente: number = 0;
  @Input() devolucion: number;
  @Input() eltotal: number;

  cancelar = new Ventas();
  ingresodeunvaucher = new DetalleVoucher();
  pasarelformulario = new DetalleVoucher();

  voucheraingresar: DetalleVoucher;
  ventarealizada: Ventas[];
  voucherult: Voucher;

  fecha = new Date();
  h = this.fecha.getHours();
  m= this.fecha.getMinutes();
  s = this.fecha.getSeconds();
  hora: string = this.h+ ':'+ this.m +':'+this.s;

  dia = this.fecha.getDay();
  mes = this.fecha.getMonth();
  anio = this.fecha.getFullYear();

  constructor( private vouchservicio: VoucherService, private vent: VentasService, private cd:ChangeDetectorRef) {

    this.vouchservicio.ultimovoucher().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(res =>  {this.voucherult = res; this.cd.markForCheck()});
  }
  numerobuscado: number;
  diadehoy: string;

  ngOnInit() {

    this.diadehoy = this.dia +'/'+this.mes +'/'+ this.anio;
    this.vouchservicio.mostrarvoucher().pipe(takeUntil(this.unsubscribe$)).subscribe(busqueda => {
      this.busquedavoucher.push( busqueda);
      this.cd.markForCheck()
       });
    console.log(this.busquedavoucher)
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  imprimir(register){
   var ficha = document.getElementById(register);
   var ventimp =  window.open( ' ', 'popimpr');
   ventimp.document.write(ficha.innerHTML);
   ventimp.document.close();
   ventimp.print();
   ventimp.close()
  }


  guardareldetallevoucher(detallevaucher, busquedavoucher, loseleccionado: Medio, ingresodeunvaucher: DetalleVoucher):void {
    // tslint:disable-next-line:forin max-line-length
    this.numerobuscado = busquedavoucher[0].length;
    console.log("numero", this.numerobuscado);
    this.ingresodeunvaucher.dvcantidad = detallevaucher.length;
    this.ingresodeunvaucher.voucher_id.vtotal = this.total();
    this.ingresodeunvaucher.voucher_id.vnumerodebusqueda = this.numerobuscado;

    this.vouchservicio.ultimovoucher().subscribe(res => {
      this.voucherult = res;
    });
    console.log('ultimoregistro', this.voucherult);

    for (const i of detallevaucher) {
      this.ingresodeunvaucher.product_id = i.id;
      console.log('guardarvaucher', this.ingresodeunvaucher);

      this.vouchservicio.crearvoucher(this.ingresodeunvaucher).subscribe(res => {return res})
    }
    //   setTimeout(() =>{this.guardarventa()}, 1000)
    this.cancelar.payment_id.pagomonto = this.total();
    this.cancelar.payment_id.pagovuelto = this.devolucion;
    this.cancelar.payment_id.half_payment_id = this.loseleccionado.id;
    this.cancelar.voucher_id = this.voucherult.id +1;
    console.log('locancelado', this.cancelar);
    this.vent.guardarventas(this.cancelar).subscribe(res => {return res});

  }


  total() {
    let total = 0;
    for (const a of this.agregadoalalista) {
      total += a.pvalor;
    }
    return total;
  }

  borrarvoucher( evento, boton) {
    // tslint:disable-next-line:forin
    console.log("evento", evento)
    console.log("boton", boton)
    const i = this.agregadoalalista.indexOf(boton);
    const l = this.agregadoalalista.indexOf(evento);
    this.agregadoalalista.splice(i, 1 );
  }
}
