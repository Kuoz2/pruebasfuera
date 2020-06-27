import {Component, Input, OnInit, OnDestroy, Output, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {Productos} from "../../Modulos/Productos";
import {ProductserviceService} from "../../../Service/productservice.service";
import {VoucherService} from "../../../Service/voucher.service";
import {Voucher} from "../../Modulos/Voucher";
import {Medio} from "../../Modulos/Medio";
import {PagosService} from "../../../Service/pagos.service";
import {VentasService} from "../../../Service/ventas.service";
import {Ventas} from "../../Modulos/Ventas";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AutentificacionService} from "../../../Service/autentificacion.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {TicketComponent} from "../ticket/ticket/ticket.component";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-voucher-create',
  templateUrl: './voucher-create.component.html',
  styleUrls: ['./voucher-create.component.scss']
})
export class VoucherCreateComponent implements OnInit , OnDestroy, OnChanges{

  private unsubscribe$ = new Subject<void>();

  filtrovoucher: number;
  productos: Productos[];
 agregadoalalista = [];
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
    agregar_producto_lista = [];

  diadehoy: string = this.dia +'/'+this.mes +'/'+ this.anio;
  constructor(private router:Router,private serviproducto: ProductserviceService, private vouchservicio: VoucherService, private sermedio: PagosService, private offsession: AutentificacionService, private modalService: NgbModal) {
  }


    //Creando el formulario por FormBuilder y los FormGroup;

    cantidad_requerido = [];
    public closeResult: string;


    ngOnInit() {

    this.sermedio.mostrarmediodepago().subscribe(res => {this.selecciondecomra =  res})
    this.serviproducto.products().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {this.productos =  data});
    this.vouchservicio.mostrarvoucher().pipe(takeUntil(this.unsubscribe$)).subscribe(busqueda => {
      this.busquedavoucher.push(busqueda);
      console.log(this.busquedavoucher); });

    if (!localStorage.getItem('ACCESS_TOKEN')){
        this.router.navigateByUrl( '/login' )
    }


  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log("cambio voucher", changes)
  }

    ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
}

  loelejidoes(d){
    console.log("formadepago",d);
    console.log('formadepagar',this.loseleccionadodelacompra)
  }

    cerrarsession(){
      this.offsession.logout();
        location.reload()
    }

  agregarproductos( product, content3) {

      // impedir numero repetidos
    const indicadordeproductos = this.agregar_producto_lista.indexOf( product )
          if (this.agregar_producto_lista.indexOf(product) > -1){
              alert("este producto ya esta agregado")
          }else {
              this.agregar_producto_lista.push(product)
              this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
                  this.closeResult = `Closed with: ${result}`;
              }, (reason) => {
                  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
              });

              this.filtrovoucher = null;
          }

      // tslint:disable-next-line:no-unused-expression
     /* this.agregadoalalista.push(product);
      const nuwvo = this.agregadoalalista;
      console.log( 'subida', nuwvo );
      this.calculartotal( nuwvo );
      this.filtrovoucher = null;
*/
  }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

  calculartotal(d ){
    let total = 0;
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


   total() {
    let total = 0;
    for (const a of this.agregadoalalista) {
      total += a.pvalor;
    }
    return total;
  }

    agregarcantidad(cantidad_requerido: any){
            const pruebaaaa = []
        pruebaaaa.push(this.agregar_producto_lista.pop())

        for (const i of pruebaaaa){
            i.cantidad = cantidad_requerido;
            this.agregadoalalista.push(i)
        }
        this.cantidad_requerido = null;
        console.log(this.agregadoalalista)
        const nuwvo = this.agregadoalalista;
        console.log( 'subida', nuwvo );
        this.calculartotal( nuwvo );
    }
}
