import { WebsocketService } from 'src/app/Service/websocket.service';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { actualizarPago, PagoHecho } from './../../Modulos/Pagos';
import { Observable, Subject } from 'rxjs';
import { VentasService } from 'src/app/Service/ventas.service';
import { VoucherService } from './../../../Service/voucher.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-buscarvoucheremit',
  templateUrl: './buscarvoucheremit.component.html',
  styleUrls: ['./buscarvoucheremit.component.scss']
})
export class BuscarvoucheremitComponent implements OnInit {
  @Input() itemsdelfor = []
public buscarCode:String="";
public losvoucher:any;
public calcular;
public totalObtenido = new Subject<PagoHecho>();
public constante = []
public ModuloPago:actualizarPago
@Input() datoVouchers
  constructor(private Code:VoucherService, 
    private bsventa: VentasService,
    private ngxspinner: NgxSpinnerService,
    private wwbsocket: WebsocketService,
    ) { }
  itemcomprados = [] 
  sumatotales:number=0
  ngOnInit(): void {
    this.igual_trece()
    console.log("item", this.itemsdelfor)
    this.losvoucher = this.bsventa.recuperaremitido()
    console.log('resultado del socket emiter',this.losvoucher)
    //this.ngxspinner.show("spinnerdashcategori");
    this.consultar()
    console.log('esto debe ser trece', this.buscarCode)
    console.log('entrante antes del trece',this. losvoucher)
    console.log("respuesta", this.bsventa.moduloVentaExport.total)    
    document.getElementById('busqueda').addEventListener('input', (e) => {
      this.sumatotales = this.bsventa.moduloVentaExport.total    
      this.totalObtenido.next()
    }) 
   // this.buscarElVoucher()
 
  }
 
  trackByFn(index: number, item) {
    var dato =[]
    dato.push(item)
    console.log("track", dato)
    return item.id;
    }

  buscarElVoucher(){
     this.Code.buscaVoucherEmitido().subscribe(res => { this.losvoucher = res;
    })
  }


  busquedaEmit(){
    /*cordova.plugins.barcodeScanner.scan(
        function (result) {
  
             var variable =  <HTMLInputElement> document.getElementById("buscarEmitido")
  
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
    GuardarVenta(){

    }

    buscador(){
      this.ngxspinner.show("guardactualizar")
      this.bsventa.acutalizarlosregistros()
      this.sumatotales = 0
      this.buscarCode = ''
      this.bsventa.guardarLimpiarVenta()
      setTimeout(()=> {this.ngxspinner.hide("guardactualizar");
        this. buscarElVoucher()
    },5000)
    }

    apretar(){
      try {
        this.bsventa.emiitir_alsocket()

      } catch (error) {
        console.log('error', error)
      }
    }


    consultar(){
      console.log('voucher encontrados',this.losvoucher)
    this.losvoucher =   this.wwbsocket.emitodos()

    if(this.losvoucher === undefined){
      this.buscarElVoucher()
    }
      console.log('RESULTADO DEL SOCKET', this.losvoucher)
    }
    // Si el el buscador no es igual a 13

    igual_trece(){
        console.log('esto debe ser trece', this.buscarCode)
        console.log('entrante antes del trece',this. losvoucher)
    }
}
