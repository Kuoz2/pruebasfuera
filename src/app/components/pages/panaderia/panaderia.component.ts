import { CarServicePanaderiaService } from './../../../Service/car-service-panaderia.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProductserviceService } from 'src/app/Service/productservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
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
public UnCodExiste = [];
public nuevosItems = [];
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
    private carservice:CarServicePanaderiaService, //esto debe ser cambiado mas adelante y crear uno independiente.
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


  verificar_si(a){
    console.log("cambiar el vengo de",a)
    for( let i in a){
      if(!a[i].vengo_de){
        
        return Object.assign(a, {vengo_de: 'si'})
      }
    }
  }

  keynoexiste(a){

  }
  async guardarregistro(){
    console.log("se guardan", this.items)
    this.consultarcode.buscarultimosemitidos().subscribe(async (res) => {
      res ? null : res = {id: 0}
      this.codigovoucher = res; 
      this.codigobarra = this.codigovoucher.id
      var nuevoregistro = []
      console.log(this.verificar_si(this.items))
     await nuevoregistro.push(this.verificar_si(this.items))
     console.log('nuevosd registros', nuevoregistro[0] )
     if(this.nuevosItems.length != 0){
       
       for ( const i in this.nuevosItems){
        if( !this.nuevosItems[i].product ) { Object.assign(this.nuevosItems[i], {product:{id: this.nuevosItems[i].id}}); console.log("agregandi",this.nuevosItems[i] )}
          const code ={hora_emision: '3',
              market: this.nuevosItems[i].market,
              panaderia: this.nuevosItems[i].market,
              product_id: this.nuevosItems[i].product.id ,
              cod_market: this.nuevosItems[i].cod_market, 
              cod_panaderia: this.nuevosItems[i].cod_market, 
              pvalor: this.nuevosItems[i].pvalor
            }
            this.code_consu.consultar_code(code)
       }
     }
    /*for(const d in this.items){
      Object.assign(nuevoregistro[0][d], {cod_panaderia: this.codigovoucher.id})
        if(this.items[d].market  == true && this.items[d].panaderia == false && this.items[d].cod_market == this.items[d].cod_panaderia ){
          console.log("items 1", nuevoregistro[0][d])  
            const code ={hora_emision: '3',
              market: nuevoregistro[0][d].market,
              panaderia: nuevoregistro[0][d].market,
              product_id: nuevoregistro[0][d].product.id,
              cod_market: nuevoregistro[0][d].cod_market, 
              cod_panaderia: nuevoregistro[0][d].cod_market, 
              pvalor: nuevoregistro[0][d].pvalor
            }
            console.log("Registro a guardar", code)
              this.code_consu.consultar_code(code)
              
        }
      }*/
      console.log("items vacios", this.nuevosItems)

      if(this.nuevosItems.length == 0){
          for(const h in nuevoregistro[0])
          {            console.log("antes de for", nuevoregistro[0][h])


            Object.assign(nuevoregistro[0][h], {cod_panaderia: this.codigovoucher.id})

            if(nuevoregistro[0][h].panaderia == true && nuevoregistro[0][h].market == false && nuevoregistro[0][h].cod_market == 0 && nuevoregistro[0][h].vengo_de == undefined){
              console.log("items 3", nuevoregistro[0][h]) 

              console.log("entro por la segunda opcion")
              console.log("COdigo del market", nuevoregistro[0][h].cod_market )
              const code ={hora_emision: '3',
              panaderia: nuevoregistro[0][h].panaderia, 
              market: nuevoregistro[0][h].market,
              product_id: nuevoregistro[0][h].id,
              cod_market: 0,
              cod_panaderia: nuevoregistro[0][h].cod_panaderia,
              pvalor: nuevoregistro[0][h].pvalor
             }
             console.log("registro a guardar 2 ", code)

              this.code_consu.consultar_code(code)
              
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
  verificar_codmarket(a): Observable<any>{
      for( let i in a  ){
        if(a[i].cod_market != 0){
          this.UnCodExiste.push(a[i].cod_market)
        }
        console.log("arreglo", this.UnCodExiste )
       
      }
      for(let u in a ){
        if(a[u].cod_market == 0){
          a[u].cod_market = this.UnCodExiste[0]
          Object.assign(a[u], {cod_panaderia: this.UnCodExiste[0]})
        }
      }
      return a
  }
 async guardarPanaderia(a){
    //Lee si hay un pago realizado en la panaderia y rellena la tabla
    console.log("items ya en entrantes en panaderia", this.items)
          for(const i of this.consultarvoucher){
           if(i.cod_market == a && i.market == true && i.pcodigo == "1111" && i.voucher_vendido == false ){
            console.log("primera decision", i.cod_market)

            Object.assign(i, {cod_market: i.cod_market})
            Object.assign(i, {vengo_de: 'si'})
             this. mandarcarro(i.product, i.cod_panaderia, i.market)
           }
           if(i.cod_market == a && i.market == true && i.pcodigo != "1111" && i.voucher_vendido == false ){
            console.log("segund decision", i.cod_market)
             Object.assign(i, {cod_market: i.cod_market})
             Object.assign(i, {vengo_de: 'si'})
            this. mandarcarro(i , i.cod_panaderia, i.market)
          }
          }
       await  this.verificar_codmarket(this.items)
        this.items.forEach((resp) => {this.nuevosItems.push(resp)})
        console.log("nuevos items subidos", this.nuevosItems)
       return this.items
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
  mandarcarro_primeraforma(product: any, _b:number, market){
    var vouchercodigo: any 
    console.log("items en vandeja", this.items)
      Object.assign(product, {cod_market: 0})
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
  guardarnumero(Cnumero){
    console.log(Cnumero)
    const valor = <HTMLInputElement> document.getElementById('visor')
    console.log("valor", valor.value)
    var newProduct = {}
    Object.assign(newProduct, { pcodigo:"1111", pvalor: valor.value, quantity:1, id:1, category:{cnombre:'sin categoria'}, cod_market: 0})    

    const a = 1;
    const b = false
    console.log("guardarnumero", newProduct)
    this.mandarcarro(newProduct, a, b)
    var limpiar = <HTMLInputElement> document.getElementById('visor');
    limpiar.value =   ''
     this.valorVisor = 0;
     this.operacao = "";
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