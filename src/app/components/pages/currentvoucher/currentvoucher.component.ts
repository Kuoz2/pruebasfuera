import { VoucherService } from './../../../Service/voucher.service';
import { VentasService } from './../../../Service/ventas.service';
import { Documentos } from './../../Modulos/Documentos';
import { ProductserviceService } from './../../../Service/productservice.service';
import { Categories } from './../../Modulos/Categories';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-currentvoucher',
  templateUrl: './currentvoucher.component.html',
  styleUrls: ['./currentvoucher.component.scss']
})
export class CurrentvoucherComponent implements OnInit, OnDestroy {
  elcodigo
  constructor(private categori: CategoriasService,
     private productos: ProductserviceService,
     private carservice:CartServiceService,
     private cd: ChangeDetectorRef,private modalService: NgbModal,
     private spinner: NgxSpinnerService,
     private code_consu: VentasService,
     private consultarcode: VoucherService) { }
     
  ngOnDestroy(): void { 
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    }
    public imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    public categorias
    public producto
    public Fproducto
    private unsubscribe$ = new Subject<void>();
    public closeResult: string;
    public consultarvoucher:any;
    public buscarpanaderia:string = "";

    items: Array<any>;
    totalQuantity = 0;
    totalPrice = 0;

    p: any;
  ngOnInit(): void {
    this.buscarvoucheremitido()
    this.spinner.show('spinnerdashcategori')
    console.log(this.imagenes.length)
    this.obtenerCategorias()
    this.obtenerproductos()
     this.carservice.currentDataCart$.pipe(takeUntil(this.unsubscribe$)).subscribe(
      x => {
        
        if (x) { 
          this.items = x;
          this.totalQuantity = x.length;
          this.totalPrice = x.reduce((sum, current) => sum + ((current.pvalor || current.product.pvalor) * current.quantity), 0 )
          this.cd.markForCheck();
        }
      
      }
  );
  this.consultar_code()
  }

  boxClick(a,b ){
   
    const precionado = <HTMLInputElement> window.document.getElementById('checatecogira' + b)
    const inpudisable = <HTMLInputElement> window.document.getElementById('fproducto')
    console.log("valor box",precionado.value)
    if(precionado.checked){
      inpudisable.disabled = true
      this.Fproducto=""
      this.Fproducto = precionado.value
    }else{inpudisable.disabled=false}
    console.log("numero", a)
  }
 obtenerCategorias(){
    this.categori.mostrarcategorias().subscribe(( res) =>{this.categorias = res; this.spinner.hide('spinnerdashcategori')})
   
  }

  obtenerproductos(){
   return this.productos.products().subscribe(res =>{ this.producto = res; console.log('productos',this.producto)})
  }

  mandarcarro(product: any){
    delete product.sinventario
    delete product.sinventario2
    console.log('lo que entra', product)

    if(product.pcodigo){
      Object.assign(product, {sinventario:true})
    }else{
      Object.assign(product, {sinventario2:false})
    }
    const data = product;
    const elemento = {quantity: 1};
    if (data.quantity >= elemento.quantity){
      this.carservice.changeCart(data)
    }else {
      const cambio = Object.assign( product, elemento )
      this.carservice.changeCart(cambio)
  }
  }

  open(content){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size: <any>'xl ' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  imprimirvoleta(tabla,totalprice, bardcode){
    const data = '<head>' +
           '<style type="text/css">' +
           '@page {  size: 58mm 100mm;'+
            'height: 58mm;'+
            'width: 100mm; '+
            'margin: 0;}'+
           'h2{   font-size: 28px;\n position: center;\n }' +
           'td,\n' +
           'th,\n' +
           'tr,\n' +
           'table {\n' +
           'margin: auto;' +
           '  border-collapse: collapse;\n' +
           '}\n' +
           '\n' +
           'td.producto,\n' +
           'th.producto {\n' +
           '  font-size: 25px;\n' +
           '  font-family: \\\'Times New Roman\\\', serif;\n' +
           '  width: 100px;\n' +
           '  max-width: 80px;\n' +
           '}\n' +
           '.centrarCaja {\n' +
           'margin: 0;' +
           '  position:center;\n' +
           '}\n' +
           'td.cantidad,\n' +
           'th.cantidad {\n' +
           '  width: 80px;\n' +
           'font-size: 30px;\n' +
           'font-family:Times New Roman, serif;\n' +
           '  max-width: 80px;\n' +
           '  word-break: break-all;\n' +
           'margin: auto;\n' +
           '}\n' +
           '\n' +
           'td.precio,\n' +
           'th.precio {\n' +
           'text-align: center;\n' +
           'font-size: 30px;\n' +
           '  width: 110px;\n' +
           '  max-width: 110mm;\n' +
           '  word-break: 100mm;\n' +
           '}\n' +
           '\n' +
           '.centrado {\n' +
           '  text-align: center;\n' +
           '  align-content: center;\n' +
           '}\n' 
           + '.totalprice { text-align: center;}'+
           '.bardcode {text-align: center}'+
           '\n' +
           '\n' +
           '.ticket {\n' +
           '  width: 570px;\n' +
           '  max-width: 600px;\n' +
           '}' +
           '\n' +
           'img {\n' +
           'width: 356px;\n' +
           'filter: brightness(50%);'+
           'display:block;'+
           'margin: auto;' +
           '  height: 200px;' +
           '}' +
           '</style>' +
           '<title></title></head>' +
           '<body >' +
              '<div class="ticket ">' +
              window.document.getElementById(tabla).innerHTML +
              '</div>'+
            '</body>';
    const mywindow = window.open( '', '_blank' );
    mywindow.opener;
    mywindow.document.open();
    mywindow.document.write( data );
    mywindow.document.close();

    mywindow.onload = function() {
            mywindow.focus();
            mywindow.print();
       };
  }
  consultar_code(){
    const code ={hora_emision: '3', market: true, product_id: 1 }
      return this.code_consu.consultar_code(code)
  }

  buscarvoucheremitido(){
    return this.consultarcode.buscaVoucherEmitido().subscribe(res => {this.consultarvoucher = res})
  }
}
