import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Productos} from "../../Modulos/Productos";
import {ProductserviceService} from "../../../Service/productservice.service";
import {VoucherService} from "../../../Service/voucher.service";
import {Voucher} from "../../Modulos/Voucher";
import {Medio} from "../../Modulos/Medio";
import {PagosService} from "../../../Service/pagos.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AutentificacionService} from "../../../Service/autentificacion.service";
import {Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-voucher-create',
  templateUrl: './voucher-create.component.html',
  styleUrls: ['./voucher-create.component.scss']
})
export class VoucherCreateComponent implements OnInit , OnDestroy, OnChanges{

  private unsubscribe$ = new Subject<void>();
  public pcventas: Productos[]
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
        var metodo = Object.values(d)[1]
      console.log("da", metodo)
        if (metodo == 'efectivo' && this.loseleccionadodelacompra != null && typeof(metodo) != 'undefined') {
            window.document.getElementById( 'elefectivo' ).hidden = false
        }else{
            window.document.getElementById('elefectivo').hidden = true
        }
  }

    cerrarsession(){
      this.offsession.logout();
        location.reload()
    }

  agregarproductos( product: Productos[], content3) {
      // impedir numero repetidos
        /*let elemento= {cantidad:1};
      console.log("productos", product)
      for (const pr of product){
          console.log("pr", pr)
            if (pr.cantidad >= elemento.cantidad){
                if (this.agregadoalalista){
                    let ObjecIndex = this.agregadoalalista.findIndex((obj => obj.id == pr.id))
                    if (ObjecIndex != -1){
                        this.modalService.open( content3, {ariaLabelledBy: 'modal-basic-title'} ).result.then( (result) => {
                            this.closeResult = `Closed with: ${result}`;
                        }, (reason) => {
                            this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
                        } );
                    }else{
                        this.agregadoalalista = [];
                        this.agregadoalalista.push(pr)
                    }
                }
            } else{
                if (this.agregadoalalista){
                    let ObjecIndex = this.agregadoalalista.findIndex((obj => obj.id == pr.id))
                    if (ObjecIndex != -1){
                        Object.assign(pr, elemento)
                            //this.pcventas[ObjecIndex].vpcventa += 1
                        this.modalService.open( content3, {ariaLabelledBy: 'modal-basic-title'} ).result.then( (result) => {
                            this.closeResult = `Closed with: ${result}`;
                        }, (reason) => {
                            this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
                        } );
                    }else{
                        this.agregadoalalista.push(pr)
                    }
                }else{
                    Object.assign(pr, elemento)

                    this.agregadoalalista = [];
                    this.agregadoalalista.push(pr)
                }
            }*/
        for (const l of product) {
            let ObjecIndex = this.agregadoalalista.findIndex((obj => obj.id == l.id))
            if (ObjecIndex != -1) {
                alert( "este producto ya esta agregado" )

            } else {
                this.agregar_producto_lista.push( l )
                this.modalService.open( content3, {ariaLabelledBy: 'modal-basic-title'} ).result.then( (result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
                } );

                this.filtrovoucher = null;

            }
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
        console.log("cancela",this.total())
    const lo =  d - this.total();
    return this.devolver = lo;
  }


   total() {
       let total = 0;
       for (const a of this.agregadoalalista) {
           total += (a.pvalor * a.cantidad);
       }
       return total;
  }

    async agregarcantidad(cantidad_requerido: any){
            const pruebaaaa = []
        pruebaaaa.push(this.agregar_producto_lista.pop())

        for (const i of pruebaaaa){
            console.log("lo almacenado",i);
            i.cantidad = cantidad_requerido;
            this.agregadoalalista.push(i)
        }
        this.cantidad_requerido = null;
        console.log(this.agregadoalalista)
        const nuwvo = this.agregadoalalista;
        console.log( 'subida', nuwvo );
        this.calculartotal( nuwvo );
    }

    nosenvia($event) {
        if ($event.keyCode == 13){
            return $event.returnValue = false;
        }
    }
}
