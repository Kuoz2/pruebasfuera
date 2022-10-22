import { CarServiceMinimarketService } from './../../../Service/car-service-minimarket.service';
import { VoucherService } from './../../../Service/voucher.service';
import { VentasService } from './../../../Service/ventas.service';
import { ProductserviceService } from './../../../Service/productservice.service';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { VucherParameter } from '../../Modulos/voucherparameter';
import { Productos } from '../../Modulos/Productos';
import html2canvas from 'html2canvas';
import { Screenfull } from 'screenfull';
import * as screenfull from 'screenfull';
import { WebsocketService } from 'src/app/Service/websocket.service';

@Component({
  selector: 'app-currentvoucher',
  templateUrl: './currentvoucher.component.html',
  styleUrls: ['./currentvoucher.component.scss']
})
export class CurrentvoucherComponent implements OnInit, OnDestroy {
  elcodigo
  public Fproducto
  public vouchermarket: VucherParameter;
  productosen:Productos
  public codigobarra:number = 0
  public UnCodExiste = [];
  public nuevosItems = [];
  public nCode
  elemento_click
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
    // private productos: ProductserviceService,
     private carservice:CarServiceMinimarketService, //esto debe ser cambiado mas adelante y crear uno independiente.
     private cd: ChangeDetectorRef,
     private modalService: NgbModal,
     private spinner: NgxSpinnerService,
     private code_consu: VentasService,
     private consultarcode: VoucherService,
     private wwbsocket: WebsocketService,
     ) { }
     public codigovoucher:any;

  ngOnDestroy(): void { 
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    }
    public imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    public categorias
    public producto
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
    document.getElementById('contenedor').hidden = true
    this.consultar()
    this.spinner.show('spinnerdashcategori')
    console.log(this.imagenes.length)
    this.obtenerCategorias()
    //this.obtenerproductos()
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
    this.elemento_click = a
    console.log("numero", this.elemento_click)
    return this.elemento_click
  }
  desabilitiar(i){
    let precionado = <HTMLInputElement>  window.document.getElementById('checatecogira' + i)
    if(precionado.checked){
      precionado.checked = false
    }
      this.elemento_click = ""
    console.log(precionado.value)
    return 
  }

 obtenerCategorias(){
    this.categori.mostrarcategorias().subscribe(( res) =>{this.categorias = res; this.spinner.hide('spinnerdashcategori')})
   
  }
//obtenerproductos(){
  // return this.productos.products().subscribe(res =>{ this.producto = res; console.log('productos',this.producto)})
  //}



  open(content){
    this.consultar()
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
  createElement(str)
  {
    var div = <HTMLElement> document.createElement('div');
    div.innerHTML = str;
    return div
  }
 async imprimirvoleta(tabla,totalprice, bardcode){
    var info
    var imagen = window.document.getElementById(bardcode).innerHTML 
    var e = this. createElement(imagen)
    console.log(e)
    document.body.appendChild(e)
    await html2canvas( e , { width:400, scale:2}).then( function(canvas) {
    
      console.log(canvas)
      canvas.style.width = "219px"
      canvas.hidden = true
      
       console.log(canvas.toDataURL('image/png'))
       info = canvas.toDataURL('image/png')
  
    })
    
  }
  verificar_si(a){
    console.log("cambiar el vengo de",a)
    for( let i in a){
      if(!a[i].vengo_de){
        
        return Object.assign(a, {vengo_de: 'si'})
      }
    }
  }

 async consultar_code(){
    console.log("se guardan", this.items)
    this.consultarcode.buscarultimosemitidos().subscribe(async (res) => {
      res ? null : res = {id: 0}
      this.codigovoucher = res; 
      var nuevoregistro = []
      console.log(this.verificar_si(this.items))
     await nuevoregistro.push(this.verificar_si(this.items))
     console.log('nuevosd registros', nuevoregistro[0] )
     if(this.nuevosItems.length != 0){
       console.log("entro aqui solo guarda un registro ", this.nuevosItems)
       for ( const i in this.nuevosItems){
        if( !this.nuevosItems[i].product ) { Object.assign(this.nuevosItems[i], {product:{id: this.nuevosItems[i].id}}); console.log("agregandi",this.nuevosItems[i] )}
          const code ={hora_emision: '3',
              market: this.nuevosItems[i].panaderia,
              panaderia: this.nuevosItems[i].panaderia,
              product_id: this.nuevosItems[i].product.id ,
              cod_market: this.nuevosItems[i].cod_panaderia, 
              cod_panaderia: this.nuevosItems[i].cod_panaderia, 
              pvalor: this.nuevosItems[i].pvalor
            }
            if( this.nuevosItems[i].id !== 1){
                Object.assign(code, {id: this.nuevosItems[i].id})
                this.code_consu.actualizar_voucher(code, this.nuevosItems[i].id)
                this.apretar()
            }else{ 
              this.code_consu.consultar_code(code)
              this.apretar()
            }
       }
     }
 

      if(this.nuevosItems.length == 0){
          for(const h in nuevoregistro[0])
          {            console.log("antes de for", nuevoregistro[0][h])


          
            Object.assign(nuevoregistro[0][h], {cod_market: this.codigovoucher.id})

            if(nuevoregistro[0][h].market == true && nuevoregistro[0][h].panaderia == false && nuevoregistro[0][h].cod_panaderia == 0 && nuevoregistro[0][h].vengo_de == undefined)
            {
              console.log("solo esta guardando registros vinientes de otro lado ") 
              this.codigobarra = this.codigovoucher.id

              console.log("entro por la segunda opcion")
              console.log("COdigo del market", nuevoregistro[0][h].cod_panaderia )
              const code ={hora_emision: '3',
              panaderia: nuevoregistro[0][h].panaderia, 
              market: nuevoregistro[0][h].market,
              product_id: nuevoregistro[0][h].id,
              cod_market: nuevoregistro[0][h].cod_market,
              cod_panaderia: 0,
              pvalor: nuevoregistro[0][h].pvalor
             }
             console.log("registro a guardar 2 ", code)

              this.code_consu.consultar_code(code)

              function zfill(number, width) {
                var numberOutput = Math.abs(number); /* Valor absoluto del número */
                var length = number.toString().length; /* Largo del número */ 
                var zero = "0"; /* String de cero */  
                
                if (width <= length) {
                    if (number < 0) {
                         return ("-" + numberOutput.toString()); 
                    } else {
                         return numberOutput.toString(); 
                    }
                } else {
                    if (number < 0) {
                        return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
                    } else {
                        return ((zero.repeat(width - length)) + numberOutput.toString()); 
                    }
                }
            }
            this. nCode  = zfill(this.codigobarra, 13)

            this.apretar()
           await this.imprimirVoucherMiniMarket(this.nCode)




            }
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

   imprimirVoucherMiniMarket(nCode){

    var system = 4; /* Barcode system, defined as "m" at https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=128 */
    var data = nCode; /* Barcode data, according to barcode system */
    console.log("info de la data",data)
    var align = 1; /* 0, 1, 2 */
    var position = 2; /* Text position: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=125 */

    var font = 0; /* Font for HRI characters: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=126 */
    var height = 50; /* Set barcode height: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=127*/
/*
BTPrinter.connect(function(data){
        console.log("Success");
        console.log(data)
      },function(err){
        console.log("Error");
        console.log(err)
      }, "IposPrinter");
BTPrinter.printBarcode(function(data){
console.log("Success");
console.log(data);
},function(err){
console.log("Error");
console.log(err);
}, system, data, align, position, font, height);
BTPrinter.disconnect(function(data){
console.log("Success");
console.log(data)
},function(err){
console.log("Error");
console.log(err)
}, "IposPrinter");
*/
}

  buscarvoucheremitido(){
    return this.consultarcode.buscaVoucherEmitido().subscribe(res => {this.consultarvoucher = res})
  }
  verificar_codmarket(a): Observable<any>{
    for( let i in a  ){
      if(a[i].cod_panaderia != 0){
        this.UnCodExiste.push(a[i].cod_panaderia)
      }
      console.log("arreglo", this.UnCodExiste )
     
    }
    for(let u in a ){
      if(a[u].cod_panaderia == 0){
        a[u].cod_panaderia = this.UnCodExiste[0]
        Object.assign(a[u], {cod_market: this.UnCodExiste[0]})
      }
    }
    return a
}
 async guardarPanaderia(a){
//Lee si hay un pago realizado en la panaderia y rellena la tabla
for(const i of this.consultarvoucher){
  console.log("lo que esta en el item", i)
 if(i.cod_panaderia == a && i.panaderia == true && i.pcodigo == "1111" && i.voucher_vendido == false ){
  Object.assign(i, {cod_panaderia: i.cod_panaderia})
  Object.assign(i, {vengo_de: 'si'})
   this.mandarcarro(i.product, i.cod_market, i.panaderia)
 }
 if(i.cod_panaderia == a && i.panaderia == true && i.pcodigo != "1111" && i.voucher_vendido == false ){
  Object.assign(i, {cod_panaderia: i.cod_panaderia})
  Object.assign(i, {vengo_de: 'si'})
  this.mandarcarro(i , i.cod_market, i.panaderia)
}
}
await  this.verificar_codmarket(this.items)
this.items.forEach((resp) => {this.nuevosItems.push(resp)})
return this.items

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
    this.operacao = ""
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
     var DATO = <HTMLInputElement> document.getElementById('visor');
     DATO.value  = this.total.toString();
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

  mandarcarro_primeraforma(product: any, _b:number, panaderia){
    var vouchercodigo: any 
    console.log("items en vandeja", this.items)
      Object.assign(product, {cod_panaderia: 0})
    if(product.quantity == undefined)
    {
      Object.assign(product, {quantity: 1})
    }
    if(product.category == undefined)
    {
      Object.assign(product, {category:{cnombnre: 'sin categoria'}})
    }
    if(panaderia != undefined && panaderia == true){
      Object.assign(product, {market: panaderia})
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

  guardarnumero(Cnumero){
    console.log(Cnumero)
    const valor = <HTMLInputElement> document.getElementById('visor')
    console.log("valor", valor.value)
    var newProduct = {}
    Object.assign(newProduct, { pcodigo:"1111", pvalor: valor.value, quantity:1, id:1, category:{cnombre:'sin categoria'}, cod_panaderia: 0})    

    const a = 1;
    const b = false
    console.log("guardarnumero", newProduct)
    this.mandarcarro(newProduct, a, b)
    var limpiar = <HTMLInputElement> document.getElementById('visor');
    limpiar.value =   ''
     this.valorVisor = 0;
     this.operacao = "";
  }


  crecimiento(){
    document.getElementById('contenedor').hidden = true
    document.getElementById('contendor-inicial').hidden = true;
     var elemento = document.getElementById('contenedor'); 
     this.agrandar(elemento)

  }
  agrandar(elemento){
    document.getElementById('contenedor').hidden = false
    document.getElementById('gooey-button').hidden = true

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


    apretar(){
      this.code_consu.emiitir_alsocket()
    }


    consultar(){
      this.consultarvoucher.splice(0, this.consultarvoucher.length)
      console.log('voucher encontrados',this.consultarvoucher)
    this.consultarvoucher =   this.wwbsocket.emitodos()
      console.log('RESULTADO DEL SOCKET', this.consultarvoucher)
    }
}
