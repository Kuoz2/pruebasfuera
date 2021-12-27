import { date_expiration, Stock } from './../../Modulos/Productos';
import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CartServiceService} from '../../../Service/cart-service.service';
import {Productos} from '../../Modulos/Productos';
import {Medio} from '../../Modulos/Medio';
import {PagosService} from '../../../Service/pagos.service';
import {Categories} from '../../Modulos/Categories';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductserviceService} from '../../../Service/productservice.service';
import {DetalleVoucher} from '../../Modulos/DetalleVoucher';
import {Voucher} from '../../Modulos/Voucher';
import {Ventas} from '../../Modulos/Ventas';
import {VentasService} from '../../../Service/ventas.service';
import {VoucherService} from '../../../Service/voucher.service';
import { Observable, Subject} from 'rxjs';
import {HoraActualService, valorReloj} from '../../../Service/hora-actual.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {takeUntil} from 'rxjs/operators';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { getEnabledCategories } from 'trace_events';
import html2canvas from 'html2canvas';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-appsale',
  templateUrl: './appsale.component.html',
  styleUrls: ['./appsale.component.scss']
})
export class AppsaleComponent implements OnInit, OnDestroy {
  totalQuantity = 0;
  totalPrice = 0;
  items: Array<any>;
  private unsubscribe$ = new Subject<void>();
  se_Imprio: Boolean = false;
  selecciondecomra: Medio[];
  loseleccionadodelacompra = Medio;
  public cancelar2 = new Ventas();
  public detallevoucher = new DetalleVoucher;
  public voucher_add: Voucher;
  public productos_add = new Productos();
  public fechavencimiento = new date_expiration();
  public stockvencimiento =  new Stock();
  public efectivo = 0;
  public devolucion = 0;
  public closeResult: string;
  public articuloBusqueda: string;
  private imgPrinting = [];
  @Output()
  public textoCambiado: EventEmitter<string> = new EventEmitter();
  @Output()
  public textoCambiado2: EventEmitter<string> =  new EventEmitter();
  // Variable para el formulario
  // tslint:disable-next-line:variable-name
  app_venta: FormGroup;
  public categorias: Categories[];
imagenjpg;
  private datos$: Observable<valorReloj>;
  private fecha;
   spinnerType = 'la-ball-8bits';

  constructor(private carservice: CartServiceService,
              private sermedio: PagosService,
              private modalService: NgbModal,
              private FormBuild: FormBuilder,
              private serviCat: ProductserviceService,
              private vent: VentasService,
              private vouchservicio: VoucherService,
              public secoind: HoraActualService,
              private spinner: NgxSpinnerService,
              private cd: ChangeDetectorRef) {
    // Formulario de ingreso.
    this.app_venta = this.FormBuild.group({
      loseleccionadodelacompra: new FormControl(''),
      efectivo: new FormControl('')
    });
  }

  hora: string;
  minutos: string;
  dia: string;
  fechaE: string;
  // tslint:disable-next-line:variable-name
  fecha_emision: string;
  // tslint:disable-next-line:variable-name
  hora_emision: string;
  sitiene = [];
  notiene = []
  async ngOnInit() {
    this.spinner.show();
    this.datos$ = this.secoind.getInfoReloj();
    this.fecha =  this.datos$.subscribe( x => {
          this.hora = x.diaymes + 'T' + x.hora.toString() + ':' + x.minutos + ':' + x.segundo;
          this.fechaE = x.diaymes;
          this.fecha_emision = x.diaymes;
          this.hora_emision = x.hora.toString() + ':' + x.minutos + ':' +  x.segundo;
        }
    );

    await this.carservice.currentDataCart$.pipe(takeUntil(this.unsubscribe$)).subscribe(
        x => {
          
          if (x) { 
            this.items = x;
            this.totalQuantity = x.length;
            this.totalPrice = x.reduce((sum, current) => sum + ((current.pvalor || current.product.pvalor) * current.quantity), 0 )
            this.cd.markForCheck();
          }
        
        }
    );
    // tslint:disable-next-line:max-line-length
    await this.sermedio.mostrarmediodepago().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.selecciondecomra =  res;  this.cd.markForCheck(); });
    await this.serviCat.categorias().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.categorias = data;  this.cd.markForCheck();     this.spinner.hide(); });
    this.vouchservicio.ultimovoucher().subscribe(data => {this.voucher_add =  data; this.cd.markForCheck();
    } ,  );

    this.Imprimcion();

  }
  // Habrir el modal al precionar el carrito de compra
  open2(content2): void {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  // Modulo para imprimir.
   async  imprimir(register) {
    this.fecha.unsubscribe();

    const data = '<head>' +
           '<style type="text/css">' +
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
           '}\n' +
           '\n' +
           '\n' +
           '.ticket2 {\n' +
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
           document.getElementById( register ).innerHTML +
           '</body>';
   /* const mywindow = window.open( '', '_blank' );
    mywindow.opener;

    mywindow.document.open();
    mywindow.document.write( data );
    mywindow.document.close();

    mywindow.onload = function() {
            mywindow.focus();
            mywindow.print();
       };

*/




var info ;
        var imagen = document.getElementById('ticket').innerHTML
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
  console.log(info)
  await this.imprimirinfo(info)

  e.hidden = true
}

imprimirinfo(info){
 /*BTPrinter.connect(function(data){
    console.log("Success");
    console.log(data)
  },function(err){
    console.log("Error");
    console.log(err)
  }, "IposPrinter");
  BTPrinter.printBase64(function(data){
    console.log("Success");
    console.log(data);
},function(err){
    console.log("Error");
    console.log(err);
}, info,'0');*/
}
 createElement(str)
{
  var div = <HTMLElement> document.createElement('div');
  div.innerHTML = str;
  return div
}
  
     // Probrando si se imprimio el documento
  Imprimcion() {
  }

  // LAS FORMAS DE CERRAR EL MODAL
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
remover_producto(producto) {
  this.carservice.removeElementCart(producto);
}
  _buscadorProducto(value) {
    this.textoCambiado.emit(value.target.value);
  }
  _buscandoCategoria(valor) {
    this.textoCambiado2.emit(valor.target.value);
  }
// Aca se guardaran las ventas cuando se precione guardar luego se actualizara
   guardarVentaApp() {

      try {
        this.fecha.unsubscribe();
        this.detallevoucher.voucher.vtotal = this.totalPrice;
        this.detallevoucher.dvcantidad = this.totalPrice;
        this.detallevoucher.fecha_emision = this.fecha_emision;
        this.detallevoucher.hora_emision = this.hora_emision;
        this.detallevoucher.voucher.vhora = this.hora_emision
        this.detallevoucher.voucher.vfecha = this.fecha_emision
        this.detallevoucher.voucher.vdia = this.dia
        for (const i of this.items) {
          if(i.sinventario == true && i.sinventario != false){
            this.detallevoucher.product_id = i.id;
            this.detallevoucher.dvcantidad = i.quantity;
            this.productos_add.stock = i.stock;
            this.productos_add.stock.pstock = i.stock.pstock - i.quantity;
            this.productos_add.date_expiration = i.date_expiration;
            console.log("la id que falla", i.id)
            this.productos_add.date_expiration.stock_expiration = i.date_expiration.stock_expiration - i.quantity;
            console.log('actualizaciones', this.productos_add)
            // Guardar el voucher generado.
              this.vouchservicio.crearvoucher( this.detallevoucher ).subscribe( res => {
            return res;
          } );
          // Actualiza el stcok generado.
          this.serviCat.actualizarstock( this.productos_add.stock ).subscribe( res => {
          return res;
          } );
          this.serviCat.actualizar_stock_fecha(this.productos_add.date_expiration).subscribe(res => res);
          }

          if(i.sinventario2 == false && i.sinvventario2 != true){
            this.detallevoucher.product_id = i.product.id;
            this.detallevoucher.dvcantidad = i.quantity;
            this.stockvencimiento.id = i.id;
            this.fechavencimiento.id = i.date_expiration.id
            console.log("fecha vencimiento", this.stockvencimiento)
            this.stockvencimiento.pstock = i.stock_expiration - i.quantity
            this.fechavencimiento.stock_expiration = i.stock_expiration - i.quantity
            console.log('actualizaciones', this.stockvencimiento, this.fechavencimiento, this.detallevoucher)
            //Guardar registro al voucher.
            this.vouchservicio.crearvoucher(this.detallevoucher).subscribe(res  => {console.log('respuesta', res)})
            this.serviCat.actualizarstock(this.stockvencimiento).subscribe(res => {console.log('respuesta stock', res); err => {console.log('error', err)}})
            this.serviCat._actualizar_fechavence(this.fechavencimiento).subscribe(res => {console.log('respues fecha', res); err => {console.log('error', err)}})
          }
          
       
        }

        this.cancelar2.payment_id.pagomonto = this.app_venta.value.efectivo;
       this.cancelar2.payment_id.pagovuelto = this.devolucion_app();
       this.cancelar2.payment_id.half_payment_id = this.app_venta.value.loseleccionadodelacompra.id;
       this.cancelar2.voucher_id = this.voucher_add.id;

        // Se guarda lo cancelado
        this.vent.guardarventas( this.cancelar2 ).subscribe( res => {
        return res;
       } );

        this.app_venta.reset();
        this.items.splice( 0, this.items.length );
        this.totalPrice = 0;
        this.totalQuantity = 0;
    } catch (e) {
        console.log('ocurrio un error', e);
      }

    
  }

  devolucion_app() {
    let total = 0 ;
    if (this.totalPrice != 0 && this.app_venta.value.efectivo != 0 && this.totalPrice < this.app_venta.value.efectivo) {
      total = (this.app_venta.value.efectivo - this.totalPrice);
      return total;
    } else {
      return total;
    }
  }
  cancelar_venta() {
    this.app_venta.reset();
    this.items.splice(0, this.items.length);
    this.totalPrice = 0;
    this.totalQuantity = 0;
    alert('La venta se cancelo');
  }


  nosenvia($event) {
    if ($event.keyCode == 13) {
      return $event.returnValue = false;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  busqueda(){
  /*cordova.plugins.barcodeScanner.scan(
      function (result) {

           var variable =  <HTMLInputElement> document.getElementById("BusCodigo")

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
  limpiar_busqueda(){
    this.articuloBusqueda = ""
    this.textoCambiado.emit("");
   const elemento = <HTMLInputElement> document.getElementById("busqueda");
   elemento.value = ""
          return
  }

}
