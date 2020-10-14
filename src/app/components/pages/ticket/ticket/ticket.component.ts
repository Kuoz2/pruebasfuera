import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit,} from '@angular/core';
import {VoucherService} from "../../../../Service/voucher.service";
import {DetalleVoucher} from "../../../Modulos/DetalleVoucher";
import {Ventas} from "../../../Modulos/Ventas";
import {VentasService} from "../../../../Service/ventas.service";
import {Medio} from "../../../Modulos/Medio";
import {Voucher} from "../../../Modulos/Voucher";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

import {FormBuilder, FormGroup} from "@angular/forms";
import {Productos} from "../../../Modulos/Productos";
import {ProductserviceService} from "../../../../Service/productservice.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent implements OnInit, OnDestroy {
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
  productos_actualizado = new Productos();
  voucherult: Voucher;
// Formulario para agregar el ticket
  ticketForm: FormGroup;
  //guardando denuevo los productos.
  guardar_productos_analisados = [];



  constructor(private form:FormBuilder, private vouchservicio: VoucherService, private vent: VentasService, private cd:ChangeDetectorRef, private prodi: ProductserviceService) {

    this.vouchservicio.ultimovoucher().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(res =>  {this.voucherult = res; this.cd.markForCheck()});
  }
  numerobuscado: number;
  diadehoy: string;

  eldiadehoy(){
    const  fecha = new Date();
     var h = fecha.getHours();
     var m= fecha.getMinutes();
     var s = fecha.getSeconds();
     const hora: string = h+ ':'+ m +':'+s;
     let ap = (h < 12) ? "AM":"PM";
        h = (h == 0) ? 12 : h;
        h = (h > 12) ? h - 12 : h;
        h = this.contadorhora(h);
        m = this.contadorhora(m);
        s = this.contadorhora(s);
      const dia = fecha.getUTCDay();
     const mes = fecha.getMonth();
      const anio = fecha.getFullYear();
      this.diadehoy = h +':'+m +':' +s + ap;
      setInterval(() => {
          this.eldiadehoy()
      } , 500 );
  }
  contadorhora(i){
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }

  ngOnInit() {


      this.eldiadehoy();
      this.vouchservicio.mostrarvoucher().pipe(takeUntil(this.unsubscribe$)).subscribe(busqueda => {
      this.busquedavoucher.push( busqueda);
      this.cd.markForCheck()
       });
    this.ticketForm = this.form.group({
        cantidades: this.form.array([this.form.group({cantidad:['']})])
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




  guardareldetallevoucher(detallevaucher, busquedavoucher, loseleccionado: Medio, ingresodeunvaucher: DetalleVoucher, tiketForm):void {
    // tslint:disable-next-line:forin max-line-length

          console.log("cantidad", tiketForm.value)

    this.numerobuscado = busquedavoucher[0].length;

    this.ingresodeunvaucher.dvcantidad = this.cantidad_requerida;
    this.ingresodeunvaucher.voucher.vtotal = this.total();
    this.ingresodeunvaucher.voucher.vnumerodebusqueda = this.numerobuscado;
    this.ingresodeunvaucher.voucher.vhora = this.diadehoy
        console.log("voucher", this.ingresodeunvaucher)
    this.vouchservicio.ultimovoucher().subscribe(res => {this.voucherult = res;    });

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
