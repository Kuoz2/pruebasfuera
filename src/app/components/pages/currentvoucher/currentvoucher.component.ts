import { CarServiceMinimarketService } from './../../../Service/car-service-minimarket.service';
import { VoucherService } from './../../../Service/voucher.service';
import { VentasService } from './../../../Service/ventas.service';
import { Documentos } from './../../Modulos/Documentos';
import { ProductserviceService } from './../../../Service/productservice.service';
import { Categories } from './../../Modulos/Categories';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { VucherParameter } from '../../Modulos/voucherparameter';
import { Productos } from '../../Modulos/Productos';

@Component({
  selector: 'app-currentvoucher',
  templateUrl: './currentvoucher.component.html',
  styleUrls: ['./currentvoucher.component.scss']
})
export class CurrentvoucherComponent implements OnInit, OnDestroy {
  elcodigo
  public vouchermarket: VucherParameter;
  productosen:Productos
  public codigobarra:number = 0
  Cnumero
  n7="7"
  n8="8"
  n9="9"
  ndiv="/"
  n4="4"
  n5="5"
  n6="6"
  npor="*"
  n1="1"
  n2="2"
  n3="3"
  nrest="-"
  n0="0"
  nigual="="
  nC="C"
  nmas="+"
   valorVisor = 0;
   numeroA;
   numeroB;
   operacao;
    total = 0;
    ultimoTotal = 0;
  constructor(private categori: CategoriasService,
     private productos: ProductserviceService,
     private carservice:CarServiceMinimarketService, //esto debe ser cambiado mas adelante y crear uno independiente.
     private cd: ChangeDetectorRef,
     private modalService: NgbModal,
     private spinner: NgxSpinnerService,
     private code_consu: VentasService,
     private consultarcode: VoucherService) { }
     public codigovoucher:any;

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
  consultar_code(){
  
    this.consultarcode.buscarultimosemitidos().subscribe((res) => {
      res ? null : res = {id: 0}
      this.codigovoucher = res; 
      this.codigobarra = this.codigovoucher.id
      console.log("r4espuesta", res)
    for(const d in this.items){
      console.log("los items", this.items)
      Object.assign(this.items[d], {cod_market: this.codigovoucher.id})
        if(this.items[d].panaderia  == true ){
          console.log("items 1", this.items[d])
            const code ={hora_emision: '3',
              market: this.items[d].market,
              product_id: this.items[d].product.id,
              cod_market: this.items[d].cod_panaderia,
              cod_panaderia: this.items[d].cod_panaderia,
              pvalor: this.items[d].pvalor }
              this.code_consu.consultar_code(code)
        }
      }
          for(const h in this.items)
          {
            Object.assign(this.items[h], {cod_market: this.codigovoucher.id})

            if(this.items[h].market == true && this.items[h].panaderia == false){

              const code ={hora_emision: '3',
              panaderia: this.items[h].panaderia, 
              market: this.items[h].market,
              product_id: this.items[h].id,
              cod_panaderia: 0,
              cod_market: this.items[h].cod_market, 
              pvalor: this.items[h].pvalor}
              this.code_consu.consultar_code(code)
            }
          }   
   
  })

      console.log(this.items)

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

  buscarvoucheremitido(){
    return this.consultarcode.buscaVoucherEmitido().subscribe(res => {this.consultarvoucher = res})
  }
  guardarPanaderia(a){
//Lee si hay un pago realizado en la panaderia y rellena la tabla
for(const i of this.consultarvoucher){
  console.log("lo que esta en el item", i)
 if(i.cod_panaderia == a && i.panaderia == true && i.cod_panaderia == "1111" && i.voucher_vendido == false ){
   this.mandarcarro(i.product, i.cod_market, i.panaderia)
 }
 if(i.cod_panaderia == a && i.panaderia == true && i.cod_panaderia != "1111" && i.voucher_vendido == false ){
  this.mandarcarro(i , i.cod_market, i.panaderia)
}
}
  }

  
   botao(dado) {
  
    var agora = new Date;
    var data = <HTMLInputElement> document.getElementById("visor");
    var auxiliar = data.value // auxiliar recebe o valor pressionado no visor
    var info = <HTMLInputElement> document.getElementById("visor") ; // visor recebe o valor de auxiliar e concatena com dado
    info.value = auxiliar + dado


    var mierda = <HTMLInputElement> document.getElementById("visor") 
  mierda.value = auxiliar + dado;
  this. valorVisor = parseInt(mierda.value)
    //document.getElementById("historico").innerHTML = agora.getHours();
    
    // mostrar a saudação acima do visor
    var hora = agora.getHours();
    
    if(hora >= 0 && hora <= 12){
      document.getElementById("historico").textContent = "Bom dia";
    }
    if(hora >= 13 && hora <= 17){
      document.getElementById("historico").textContent = "Boa tarde";
    }
    if(hora >= 18 && hora <= 23){
      document.getElementById("historico").textContent = "Boa noite";
    }
}

 btn_soma(caracter){

  this.numeroA = this.valorVisor;
    this.operacao = "+";
    this.calcular(caracter)
    this.limpar();
    //document.getElementById("historico").innerHTML += operacao;
}

 btn_subtrai(caracter){
 
  
  this.numeroA = this.valorVisor;
  this.operacao = "-";
  this.calcular(caracter)

  this.limpar();
}

 btn_multiplica(caracter){
  
  
  this.numeroA = this.valorVisor;
  this.operacao = "*";
  this.calcular(caracter)

  this.limpar();
}

 btn_divide(caracter){

  this.numeroA = this.valorVisor;
  this.operacao = "/";
  this.calcular(caracter)
  this.limpar();
}

 reset(nC) {
 
  
    // limpar visor
   var limpiar = <HTMLInputElement> document.getElementById('visor');
   limpiar.value =   ''
    this.valorVisor = 0;
    this.operacao = "";
}
 limpar(){
   const data = <HTMLInputElement> document.getElementById('visor')
    data.value = '';
    
}

 btn_igual(nigual){

  
    this.numeroB = this.valorVisor;
    this.calcular(this.numeroB);
}

 calcular(operacao) {
  
  
    // faz o calculo, pega o resultado e colocar no visor
    //document.getElementById('visor').value = eval(resultado);

    //document.getElementById('visor').value = resultado;
    //document.getElementById('visor').value = eval(valorVisor);
    console.log(this.numeroB)
 
      switch(operacao){
        case "+":
         this.total = parseFloat(this.numeroA) + parseFloat(this.numeroB);
          break;
        case "-":
          this.total = parseFloat(this.numeroA) - parseFloat(this.numeroB);
            break;
        case "*":
          this.total = parseFloat(this.numeroA) * parseFloat(this.numeroB);
          break;
        case "/":
          this.total = parseFloat(this.numeroA) / parseFloat(this.numeroB);
          break;
      }
      this. ultimoTotal = this.total;
      this.reset(this.numeroA);
     var DATO = <HTMLInputElement> document.getElementById('visor');
     DATO.value  = this.total.toString();
      this.valorVisor = this.ultimoTotal;
      console.log("valor",this.valorVisor)

}

  mandarcarro(product: any, _b:number, panaderia){
    //manda los productos del voucher.
   console.log(product)
   if(product.quantity == undefined)
   {
     Object.assign(product, {quantity: 1})
   }
   if(product.category == undefined)
    {
      Object.assign(product, {category:{cnombnre: 'sin categoria'}})
    }
    if(panaderia != undefined && panaderia == true){
      Object.assign(product, {panaderia: panaderia})
    }else{
      Object.assign(product, {panaderia: false})
      Object.assign(product, {market: true})

    } 
    delete product.sinventario
    delete product.sinventario2
      //Object.assign(product, {cod_market:})
    if(product.pcodigo || product.product.pcodigo){
      Object.assign(product, {sinventario:true})
    }else{
      Object.assign(product, {sinventario2:false})
    }
    console.log('el producto',product)
    const data = product;
    const elemento = {quantity: 1};
    if (data.quantity >= elemento.quantity){
      this.carservice.changeCart(data)
    }else {
      const cambio = Object.assign( product, elemento )
      this.carservice.changeCart(cambio)
  }
  }
  guardarnumero(Cnumero){
    console.log(Cnumero)
    const valor = <HTMLInputElement> document.getElementById('visor')
    console.log("valor", valor.value)
    var newProduct = {}
    Object.assign(newProduct, { pcodigo:"1111", pvalor: valor.value, quantity:1, id:1, category:{cnombre:'sin categoria'}})    

    const a = 1;
    const b = false
    console.log("guardarnumero", newProduct)
    this.mandarcarro(newProduct, a, b)
    var limpiar = <HTMLInputElement> document.getElementById('visor');
    limpiar.value =   ''
     this.valorVisor = 0;
     this.operacao = "";
  }
  busquedaMark(){
    /*cordova.plugins.barcodeScanner.scan(
        function (result) {
  
             var variable =  <HTMLInputElement> document.getElementById("buscarboleta")
  
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
