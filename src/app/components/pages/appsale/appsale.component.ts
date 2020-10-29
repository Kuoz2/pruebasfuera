import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartServiceService} from "../../../Service/cart-service.service";
import {Item} from "../../Modulos/Item";
import {Productos} from "../../Modulos/Productos";
import {Medio} from "../../Modulos/Medio";
import {PagosService} from "../../../Service/pagos.service";
import {Categories} from "../../Modulos/Categories";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductserviceService} from "../../../Service/productservice.service";
import {DetalleVoucher} from "../../Modulos/DetalleVoucher";
import {Voucher} from "../../Modulos/Voucher";
import {Ventas} from "../../Modulos/Ventas";
import {VentasService} from "../../../Service/ventas.service";
import {VoucherService} from "../../../Service/voucher.service";

@Component({
  selector: 'app-appsale',
  templateUrl: './appsale.component.html',
  styleUrls: ['./appsale.component.scss']
})
export class AppsaleComponent implements OnInit {
  totalQuantity: number = 0;
  totalPrice: number = 0;
  items: Array<Item>;
  selecciondecomra: Medio[];
  loseleccionadodelacompra= Medio;
  public cancelar2 = new Ventas();
  public stock_ide: number = 0
  public detallevoucher = new DetalleVoucher;
  public voucher_add: Voucher;
  public productos_add = new Productos();
  public efectivo: number = 0;
  public devolucion:number = 0
  public closeResult: string;
  @Output()
  public textoCambiado: EventEmitter<string> = new EventEmitter();
  @Output()
  public textoCambiado2: EventEmitter<string> =  new EventEmitter();
  //Variable para el formulario
  app_venta: FormGroup
  public categorias: Categories[];

  constructor(private carservice:CartServiceService,
              private sermedio:PagosService,
              private modalService: NgbModal,
              private FormBuild:FormBuilder,
              private serviCat:ProductserviceService,
              private vent: VentasService,
              private vouchservicio: VoucherService
  ) {

    //Formulario de ingreso.
    this.app_venta = this.FormBuild.group({
      loseleccionadodelacompra: new FormControl(''),
      efectivo: new FormControl('')
    })


  }


  ngOnInit(): void {
    this.carservice.currentDataCart$.subscribe(
        x => {
          if (x){
            this.items = x;
            this.totalQuantity = x.length;
            this.totalPrice = x.reduce((sum, current) => sum + (current.pvalor * current.quantity), 0 )
          }
        }

    );

    this.sermedio.mostrarmediodepago().subscribe(res => {this.selecciondecomra =  res});
    this.serviCat.categorias().subscribe(data => {this.categorias = data});

    this.vouchservicio.ultimovoucher().subscribe(res => {
      this.voucher_add = res; console.log("voucher entrada", this.voucher_add)
    });

  }

  //Habrir el modal al precionar el carrito de compra

  open2(content2):void
  {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }

  imprimir(register){

    var ficha = window.document.getElementById(register);
    var vetimp = window.open( '','PRINT', 'height=400,width=600');

    setTimeout(()=>{

      vetimp.document.write(ficha.innerHTML);
      vetimp.document.close();
      vetimp.focus();
      vetimp.print();
      vetimp.close();
    }, 1000);


    return true
  }



  //LAS FORMAS DE CERRAR EL MODAL
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';
    } else {

      return `with: ${reason}`;
    }

  }

remover_producto(producto:Item){
  this.carservice.removeElementCart(producto)

}

  _buscadorProducto(value) {
    console.log("buscador", value.target.value)
    this.textoCambiado.emit(value.target.value)
  }

  _buscandoCategoria(valor) {
    console.log("categoria", valor.target.value);
    this.textoCambiado2.emit(valor.target.value)
  }
//Aca se guardaran las ventas cuando se precione guardar luego se actualizara
  guardarVentaApp() {
    console.log("realziar venta", this.app_venta.value.loseleccionadodelacompra.id);

    this.detallevoucher.voucher.vtotal = this.totalPrice;
    this.detallevoucher.dvcantidad = this.totalPrice;
    console.log("cantidad",this.detallevoucher );
    for (const i of this.items){

      this.detallevoucher.product_id = i.id;
      this.detallevoucher.dvcantidad = i.quantity;
      this.productos_add.stock.id = i.stock.id;
      this.productos_add.stock.pstock = i.stock.pstock - i.quantity;
      console.log("el ingreso del voucher", this.detallevoucher)
      console.log("actualizacion de productos", this.productos_add.stock)

      //Guardar el voucher generado.
    this.vouchservicio.crearvoucher(this.detallevoucher).subscribe(res => {return res})

      //Actualiza el stcok generado.
    this.serviCat.actualizarstock(this.productos_add.stock).subscribe()

    }

    this.cancelar2.payment_id.pagomonto = this.app_venta.value.efectivo;
    this.cancelar2.payment_id.pagovuelto = this.devolucion_app();
    this.cancelar2.payment_id.half_payment_id = this.app_venta.value.loseleccionadodelacompra.id;
    this.cancelar2.voucher_id = this.voucher_add.id +=1;
    //Se guarda lo cancelado
    console.log("lo cancelado", this.cancelar2)
    this.vent.guardarventas(this.cancelar2).subscribe(res => {return res});


    this.app_venta.reset()
    this.items.splice(0,this.items.length)
    this.totalPrice = 0
    this.totalQuantity = 0

  }


  devolucion_app(){
    let total = 0 ;

    if (this.totalPrice != 0 && this.app_venta.value.efectivo != 0 && this.totalPrice < this.app_venta.value.efectivo){
      total = (this.app_venta.value.efectivo - this.totalPrice)
      return total
    } else {
      return total
    }

  }

  cancelar_venta() {
    this.app_venta.reset();
    this.items.splice(0, this.items.length)
    this.totalPrice = 0;
    this.totalQuantity = 0;
    alert("La venta se cancelo")
  }


}
