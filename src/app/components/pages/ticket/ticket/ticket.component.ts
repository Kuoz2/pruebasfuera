import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges
} from '@angular/core';
import {VoucherService} from "../../../../Service/voucher.service";
import {DetalleVoucher} from "../../../Modulos/DetalleVoucher";
import {Ventas} from "../../../Modulos/Ventas";
import {VentasService} from "../../../../Service/ventas.service";
import {Medio} from "../../../Modulos/Medio";
import {Voucher} from "../../../Modulos/Voucher";
import {takeUntil} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

import {Form, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SimpleChanges} from "@angular/core";
import {Productos} from "../../../Modulos/Productos";
import {ProductserviceService} from "../../../../Service/productservice.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent implements OnInit, OnDestroy, OnChanges {
  private unsubscribe$ = new Subject<void>();


  @Input()  busquedavoucher = [];
  @Input() loseleccionado: Medio;
  @Input() elmontodelcliente: number = 0;
  @Input() devolucion: number;
  @Input() eltotal: number;
  @Input() agregadoalalista = [];

  cantidad_requerida: number;

  cancelar = new Ventas();
  ingresodeunvaucher = new DetalleVoucher();
  pasarelformulario = new DetalleVoucher();
  productos_actualizado = new Productos()
  voucherult: Voucher;
// Formulario para agregar el ticket
  ticketForm: FormGroup;
  //guardando denuevo los productos.
  guardar_productos_analisados = [];

  fecha = new Date();
  h = this.fecha.getHours();
  m= this.fecha.getMinutes();
  s = this.fecha.getSeconds();
  hora: string = this.h+ ':'+ this.m +':'+this.s;

  dia = this.fecha.getDay();
  mes = this.fecha.getMonth();
  anio = this.fecha.getFullYear();

  constructor(private form:FormBuilder, private vouchservicio: VoucherService, private vent: VentasService, private cd:ChangeDetectorRef, private prodi: ProductserviceService) {


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
    this.ticketForm = this.form.group({
        cantidades: this.form.array([this.form.group({cantidad:['']})])
    });


  }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("cambios", changes)
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




  guardareldetallevoucher(detallevaucher, busquedavoucher, loseleccionado: Medio, ingresodeunvaucher: DetalleVoucher, tiketForm):void {
    // tslint:disable-next-line:forin max-line-length

          console.log("cantidad", tiketForm.value)

    this.numerobuscado = busquedavoucher[0].length;

    this.ingresodeunvaucher.dvcantidad = this.cantidad_requerida;
    this.ingresodeunvaucher.voucher.vtotal = this.total();
    this.ingresodeunvaucher.voucher.vnumerodebusqueda = this.numerobuscado;

    this.vouchservicio.ultimovoucher().subscribe(res => {
     this.voucherult = res;
    });

      console.log("Guardando tiketForm", tiketForm.value)

    for (const i of this.agregadoalalista) {

      this.ingresodeunvaucher.product_id = i.id;
      this.ingresodeunvaucher.dvcantidad = i.cantidad;
               this.productos_actualizado= i;
        this.productos_actualizado.stock.pstock = i.stock.pstock -i.cantidad;
                    //se generea la boleta para realizar el pago
       this.vouchservicio.crearvoucher(this.ingresodeunvaucher).subscribe(res => {return res});

      //Actualizar el stock del producto
   this.prodi.actualizarstock(this.productos_actualizado.stock).subscribe()
    }


    //   setTimeout(() =>{this.guardarventa()}, 1000)
    this.cancelar.payment_id.pagomonto = this.total();
    this.cancelar.payment_id.pagovuelto = this.devolucion;
    this.cancelar.payment_id.half_payment_id = this.loseleccionado.id;
    this.cancelar.voucher_id = this.voucherult.id +1;
    console.log("lo cancelado", this.cancelar)
    //Se guarda el pago realizado.
 this.vent.guardarventas(this.cancelar).subscribe(res => {return res});

  }


  total() {
    let total = 0;
    for (const a of this.agregadoalalista) {
      total += (a.pvalor * a.cantidad);
    }
    return total;
  }

  borrarvoucher( evento) {
    // tslint:disable-next-line:forin

    const i = this.agregadoalalista.indexOf(evento.value);
    const l = this.agregadoalalista.indexOf(evento);
    this.agregadoalalista.splice(i, 1 );
  }
}
