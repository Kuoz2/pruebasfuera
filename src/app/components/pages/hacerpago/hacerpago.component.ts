import { Component, OnInit } from '@angular/core';
import {Ventas} from "../../Modulos/Ventas";
import {Voucher} from "../../Modulos/Voucher";
import {DetalleVoucher} from "../../Modulos/DetalleVoucher";
import {Medio} from "../../Modulos/Medio";
import {Pagos} from "../../Modulos/Pagos";
import {Documentos} from "../../Modulos/Documentos";
import {PagosService} from "../../../Service/pagos.service";
import {MedioService} from "../../../Service/medio.service";
import {VoucherService} from "../../../Service/voucher.service";
import {VentasService} from "../../../Service/ventas.service";

@Component({
  selector: 'app-hacerpago',
  templateUrl: './hacerpago.component.html',
  styleUrls: ['./hacerpago.component.scss']
})
export class HacerpagoComponent implements OnInit {
  estotengo = new Ventas();
  voucher: Voucher[];
  detallevoucher: DetalleVoucher[];
  filterpost: number;
  ejerciciodevolucion: number;
  estevoucher = new Voucher();
  ventas = new Ventas();
  guardar = [];
  mediopago: Medio[];
  cancelar = new Ventas();
  pagare =  new Pagos();
  documento = new Documentos();
  elpago: Pagos[];
  devolver: number;
  fecha = new Date();
  dia = this.fecha.getDay();
  mes = this.fecha.getMonth();
  anio = this.fecha.getFullYear();

  diadehoy: string = this.dia +'/'+this.mes +'/'+ this.anio;

  constructor(private pagoser: PagosService, private medio: MedioService, private vouch: VoucherService, private vent: VentasService) { }

  ngOnInit() {
    this.vouch.mostrarvoucher().subscribe(data => {
      this.voucher = data;
    });

    this.medio.mostrartodolosmedios().subscribe(fmedio => { this.mediopago = fmedio; });

    this.vent.mostrarventas().subscribe(esto => { this.estotengo = esto; });
    this.pagoser.mostrarpagos().subscribe( tengo => {this.elpago = tengo; } );
  }


  cambioalgo(fil) {
    if (fil != null) {
      this.devolver = null;
      this.ejerciciodevolucion = 0;
      for (const i of this.guardar) {
        this.guardar.splice(i);
      }
    }
  }


  realizardevolucion(vouch, devolver, filter) {
    this.devolver = devolver;
    const p1 = vouch.vtotal;
    console.log(p1);
    console.log(devolver);
    if (devolver === 0 || devolver < p1) {
      alert('Esto es menor al total!!.');
    } else {
      return  this.ejerciciodevolucion = (devolver - p1);
    }

  }


  realizarlaventa(voucher, devolver, ejerciciodevolucion, vouch, venta) {
    // tslint:disable-next-line:forin


    console.log('mediopago', this.medio)
    console.log('nose',venta)
    this.estevoucher = devolver.vnumero;
    console.log(this.estevoucher);
    console.log(this.voucher);
    this.cancelar.payment_id.pagomonto = devolver.vtotal;
    this.cancelar.payment_id.pagovuelto = this.ejerciciodevolucion;
    this.cancelar.payment_id.half_payment_id = venta.id;
    // tslint:disable-next-line:new-parens
    this.cancelar.voucher_id = devolver.id;
    this.vent.guardarventas(this.cancelar).subscribe();
    console.log('pago',this.cancelar);


  }



  cuandoelijo(ventapago) {
    if (ventapago === 'TARJETA') {
      this.devolver  = null;
      this.ejerciciodevolucion = 0;
      document.getElementById('devolucion').hidden = true;
    }

    if (ventapago === 'EFECTIVO') {
      document.getElementById('devolucion').hidden = false;
    }


  }
}
