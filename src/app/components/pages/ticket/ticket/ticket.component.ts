import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit,} from '@angular/core';
import {VoucherService} from "../../../../Service/voucher.service";
import {DetalleVoucher} from "../../../Modulos/DetalleVoucher";
import {Ventas} from "../../../Modulos/Ventas";
import {VentasService} from "../../../../Service/ventas.service";
import {Voucher} from "../../../Modulos/Voucher";
import {takeUntil} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

import {FormBuilder, FormGroup} from "@angular/forms";
import {Productos} from "../../../Modulos/Productos";
import {ProductserviceService} from "../../../../Service/productservice.service";
import {HoraActualService, valorReloj} from "../../../../Service/hora-actual.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();


  @Input()  busquedavoucher = [];
  @Input() loseleccionado;
  @Input() elmontodelcliente: number = 0;
  @Input() devolucion: number;
  @Input() eltotal: number;
  @Input() agregadoalalista = [];

  cantidad_requerida: number;
  cancelar = new Ventas();
  ingresodeunvaucher = new DetalleVoucher();
  pasarelformulario = new DetalleVoucher();
  productos_actualizado = new Productos();
  voucherult: Voucher;
// Formulario para agregar el ticket
  ticketForm: FormGroup;

    numerobuscado: number;

    constructor(private form:FormBuilder,
              private vouchservicio: VoucherService,
              private vent: VentasService,
              private cd:ChangeDetectorRef,
              private prodi:ProductserviceService,
              public secoind:HoraActualService, ) {

    this.vouchservicio.ultimovoucher().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(res =>  {this.voucherult = res; this.cd.markForCheck()});


    }
    datos$: Observable<valorReloj>;
    hora: number;
    minutos: string;
    dia: string;
    fecha: string;
    ampm: string;
    segundos: string;



  ngOnInit() {
      this.datos$=this.secoind.getInfoReloj();
      this.datos$.subscribe( x => {
          document.getElementById("#horas").innerHTML = String( x.hora );
          document.getElementById("#minutos").innerHTML = x.minutos;
          this.dia = x.diadesemana;
          this.fecha = x.diaymes;
          document.getElementById("#ampm").innerHTML = x.ampm;
          document.getElementById("#segundos").innerHTML = x.segundo;}
          )
      this.vouchservicio.mostrarvoucher().pipe(takeUntil(this.unsubscribe$)).subscribe(busqueda => {
      this.busquedavoucher.push( busqueda);
      this.cd.markForCheck()
       });
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

  guardareldetallevoucher(detallevaucher, busquedavoucher):void {
        console.log("ticketform", this.ticketForm.value)

        if (!this.ticketForm.valid)
        {
            alert("Esta vacio")
        }else {

            // tslint:disable-next-line:forin max-line-length
            this.numerobuscado = busquedavoucher[0].length;
            this.ingresodeunvaucher.dvcantidad = this.cantidad_requerida;
            this.ingresodeunvaucher.voucher.vtotal = this.total();
            this.ingresodeunvaucher.voucher.vnumerodebusqueda = this.numerobuscado;
            this.ingresodeunvaucher.voucher.vhora //Aqui se coloca la hora.
            this.vouchservicio.ultimovoucher().subscribe( res => {
                this.voucherult = res;
            } );
            for (const i of this.agregadoalalista) {
                this.ingresodeunvaucher.product_id = i.id;
                this.ingresodeunvaucher.dvcantidad = i.cantidad;
                this.productos_actualizado = i;
                this.productos_actualizado.stock.pstock = i.stock.pstock - i.cantidad;
                //se generea la boleta para realizar el pago
                this.vouchservicio.crearvoucher( this.ingresodeunvaucher )
                //Actualizar el stock del producto
                this.prodi.actualizarstock( this.productos_actualizado.stock ).subscribe()
            }
            //   setTimeout(() =>{this.guardarventa()}, 1000)
            this.cancelar.payment_id.pagomonto = this.total();
            this.cancelar.payment_id.pagovuelto = this.devolucion;
            this.cancelar.payment_id.half_payment_id = this.loseleccionado.id;
            this.cancelar.voucher_id = this.voucherult.id + 1;
            //Se guarda el pago realizado.
            this.vent.guardarventas( this.cancelar ).subscribe( res => {
                return res
            } );
            location.reload();

        }

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
