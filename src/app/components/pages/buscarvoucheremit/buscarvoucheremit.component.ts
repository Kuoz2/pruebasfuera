import { VoucherService } from './../../../Service/voucher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarvoucheremit',
  templateUrl: './buscarvoucheremit.component.html',
  styleUrls: ['./buscarvoucheremit.component.scss']
})
export class BuscarvoucheremitComponent implements OnInit {
public buscarCode:String="";
public losvoucher:any;
  constructor(private Code:VoucherService) { }

  ngOnInit(): void {
    this.buscarElVoucher()
  }



  buscarElVoucher(){
    return this.Code.buscaVoucherEmitido().subscribe(res => { this.losvoucher = res})
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
}
