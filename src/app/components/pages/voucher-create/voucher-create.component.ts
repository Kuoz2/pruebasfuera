import {Component, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {Productos} from "../../Modulos/Productos";
import {ProductserviceService} from "../../../Service/productservice.service";
import {VoucherService} from "../../../Service/voucher.service";
import {Voucher} from "../../Modulos/Voucher";
import {Medio} from "../../Modulos/Medio";
import {PagosService} from "../../../Service/pagos.service";
import {VentasService} from "../../../Service/ventas.service";
import {Ventas} from "../../Modulos/Ventas";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-voucher-create',
  templateUrl: './voucher-create.component.html',
  styleUrls: ['./voucher-create.component.scss']
})
export class VoucherCreateComponent implements OnInit , OnDestroy{

  private unsubscribe$ = new Subject<void>();

  filtrovoucher: number;
  productos: Productos[];
  @Input() agregadoalalista = [];
   selecciondecomra: Medio[];
   @Input() efectivoapgar: number;
    @Input() devolver: number;
  @Input()loseleccionadodelacompra= Medio;
  eltotal: number;

  busquedavoucher = [];
  voucher = new Voucher();
  fecha = new Date();
  dia = this.fecha.getDay();
  mes = this.fecha.getMonth();
  anio = this.fecha.getFullYear();

  diadehoy: string = this.dia +'/'+this.mes +'/'+ this.anio;
  constructor(private serviproducto: ProductserviceService, private vouchservicio: VoucherService, private sermedio: PagosService) {
  }

  ngOnInit() {

    this.sermedio.mostrarmediodepago().subscribe(res => {this.selecciondecomra =  res})
    this.serviproducto.products().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {this.productos =  data});
    this.vouchservicio.mostrarvoucher().pipe(takeUntil(this.unsubscribe$)).subscribe(busqueda => {
      this.busquedavoucher.push(busqueda);
      console.log(this.busquedavoucher); });
  }

ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
}

  loelejidoes(d){
    console.log("formadepago",d)
    console.log('formadepagar',this.loseleccionadodelacompra)
  }

  loapagar(efect){
    console.log("montoacancelar", efect)
  }


  agregarproductos( product) {

      // impedir numero repetidos
    /*const indicadordeproductos = this.agregadoalalista.indexOf( product )
          if (this.agregadoalalista.indexOf(product) > -1){
              alert("Esta ya existe")
              this.filtrovoucher = null
          }else {

          }*/

      // tslint:disable-next-line:no-unused-expression
      this.agregadoalalista.push( product );
      const nuwvo = this.agregadoalalista;
      console.log( 'subida', nuwvo )
      this.calculartotal( nuwvo )
      this.filtrovoucher = null;

  }

  calculartotal(d ){
    let total = 0
   for (const l of d ){
     total += l.pvalor
   }
    console.log('subida2', total);
   return this.eltotal = total
  }

  devolucion(d){
    const lo =  d - this.eltotal;
    return this.devolver = lo;
  }


   preciodelproducto(b) {
    return b.pvalor;
  }

   total() {
    let total = 0;
    for (const a of this.agregadoalalista) {
      total += a.pvalor;
    }
    return total;
  }
}
