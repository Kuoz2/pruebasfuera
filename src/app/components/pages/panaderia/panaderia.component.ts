import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProductserviceService } from 'src/app/Service/productservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { findIndex, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { VoucherService } from 'src/app/Service/voucher.service';
import { VentasService } from 'src/app/Service/ventas.service';
import { dada } from '../../Modulos/respuesta';

@Component({
  selector: 'app-panaderia',
  templateUrl: './panaderia.component.html',
  styleUrls: ['./panaderia.component.scss']
})



export class PanaderiaComponent implements OnInit, OnDestroy {
public Fproducto
public codigovoucher:any;
  constructor(private categori: CategoriasService,
    private productos: ProductserviceService,
    private carservice:CartServiceService, //esto debe ser cambiado mas adelante y crear uno independiente.
     private cd: ChangeDetectorRef,
     private modalService: NgbModal,
     private spinner: NgxSpinnerService,
     private consultarcode: VoucherService,
     private code_consu: VentasService,

     ) { }
     private unsubscribe$ = new Subject<void>();
     public codigobarra:number = 0
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    }
    public categorias
    public producto
    public closeResult: string;
    public consultarvoucher:any;
    public buscarmarket:string = "";
     items: Array<any>;
     totalQuantity = 0;
     totalPrice = 0;
 
     p: any;
  ngOnInit(): void {

    this.buscarvoucheremitido()
    this.spinner.show('spinnerdashcategori')
    this.obtenerCategorias()
    this.obtenerproductos()
     this.carservice.currentDataCart$.pipe(takeUntil(this.unsubscribe$)).subscribe(
      x => {
        if (x) { 
          console.log("cantidad ", x)
          this.items = x;
          this.totalQuantity = x.length;
          this.totalPrice = x.reduce((sum, current) => sum + ((current.pvalor || current.product.pvalor) * current.quantity), 0 )
          this.cd.markForCheck();
        }

      
      }
  );
  }

  open(content){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' ,size: <any>'xl ' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  obtenerproductos(){
    return this.productos.products().subscribe(res =>{ this.producto = res; console.log('productos',this.producto)})
   }
   obtenerCategorias(){
    this.categori.mostrarcategorias().subscribe(( res) =>{this.categorias = res; this.spinner.hide('spinnerdashcategori')})
   
  }
  buscarvoucheremitido(){
    return this.consultarcode.buscaVoucherEmitido().subscribe(res => {this.consultarvoucher = res})
  }


  guardarregistro(){
    this.consultarcode.buscarultimosemitidos().subscribe((res) => {
      res ? null : res = {id: 0}
      this.codigovoucher = res; 
      this.codigobarra = this.codigovoucher.id
      console.log("se guardan", this.items)
    for(const d in this.items){
      Object.assign(this.items[d], {cod_panaderia: this.codigovoucher.id})
        if(this.items[d].market  == true && this.items[d].panaderia == false){
          console.log("items 1", this.items[d])
            const code ={hora_emision: '3',
              market: this.items[d].market,
              product_id: this.items[d].product.id,
              cod_market: this.items[d].cod_market,
              cod_panaderia: this.items[d].cod_market, 
              pvalor: this.items[d].pvalor
            }
            console.log("Registro a guardar", code)
              this.code_consu.consultar_code(code)
        }
      }
          for(const h in this.items)
          {
            Object.assign(this.items[h], {cod_panaderia: this.codigovoucher.id})

            if(this.items[h].panaderia == true && this.items[h].market == false){
              console.log("items 2", this.items[h])

              console.log("entro por la segunda opcion")
              const code ={hora_emision: '3',
              panaderia: this.items[h].panaderia, 
              market: this.items[h].market,
              product_id: this.items[h].id,
              cod_market: 0,
              cod_panaderia: this.items[h].cod_panaderia,
              pvalor: this.items[h].pvalor
             }
              this.code_consu.consultar_code(code)
            }
          }   
   
  })

  /*if(i.cod_panaderia != 0){
    var code ={hora_emision: '3',
    panaderia: true, 
    market:true,
    product_id: i.id,
    cod_market: i.cod_panaderia,
    cod_panaderia: i.cod_panaderia, 
    
 }*/
  
   // return this.code_consu.consultar_code(code)
}
  guardarPanaderia(a){
    //Lee si hay un pago realizado en la panaderia y rellena la tabla
          for(const i of this.consultarvoucher){
            console.log("lo que esta en el item", i)
           if(i.cod_market == a && i.market == true && i.cod_market == "1111" && i.voucher_vendido == false ){
             this. mandarcarro(i.product, i.cod_panaderia, i.market)
           }
           if(i.cod_market == a && i.market == true && i.cod_market != "1111" && i.voucher_vendido == false ){
            this. mandarcarro(i , i.cod_panaderia, i.market)
          }
          }
      }
   mandarcarro(product: any, _b:number, market){
    //manda los productos del voucher.
    var vouchercodigo: any 
      
    if(product.quantity == undefined)
    {
      Object.assign(product, {quantity: 1})
    }
    if(product.category == undefined)
    {
      Object.assign(product, {category:{cnombnre: 'sin categoria'}})
    }
    if(market != undefined && market == true){
      Object.assign(product, {market: market})
    }else{
      Object.assign(product, {market: false})
      Object.assign(product, {panaderia: true})
    }
    
    delete product.sinventario
    delete product.sinventario2
    console.log("cantidad ", product)
      //Object.assign(product, {cod_market:})
    if(product.pcodigo || product.product.pcodigo){
      Object.assign(product, {sinventario:true})
    }else{
      Object.assign(product, {sinventario2:false})
    }
    console.log(product)
    const data = product;
    const elemento = {quantity: 1};
    if (data.quantity >= elemento.quantity){
      this.carservice.changeCart(data)
    }else {
      const cambio = Object.assign( product, elemento )
      this.carservice.changeCart(cambio)
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
              '<div style="  text-align: center">' +
              window.document.getElementById(bardcode).innerHTML +
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

  busquedaPan(){
    /*cordova.plugins.barcodeScanner.scan(
        function (result) {
  
             var variable =  <HTMLInputElement> document.getElementById("buscarboletaPana")
  
          /  variable.value = result.text
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : true, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
           saveHistory: true, // Android, save scan history (default false)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,PDF_417,UPC_A, UPC_E,EAN_8,EAN_13,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS and Android
        }
        );
      */
    }
}
