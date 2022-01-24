import { VerificarTokenService } from './../../../Service/verificar-token.service';
import { VerificadorRoleService } from './../../../Service/verificador-role.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ProductserviceService } from 'src/app/Service/productservice.service';
import { Impuestos } from '../../Modulos/impuestos';
import { Observable } from 'rxjs';
import { Provideer } from '../../Modulos/Provideer';
import { Categories } from '../../Modulos/Categories';
import { ImpuestosService } from 'src/app/Service/impuestos.service';
import { Marca } from '../../Modulos/Marca';
import { MarcaService } from 'src/app/Service/marca.service';

@Component({
  selector: 'app-botonesnavegacion',
  templateUrl: './botonesnavegacion.component.html',
  styleUrls: ['./botonesnavegacion.component.scss']
})
export class BotonesnavegacionComponent implements OnInit {
    public ingresarproducto: FormGroup;
    public closeResult: string;
    public categoriaProducto: string;
    public marcaProducto: string;
    public nombreProducto:string;
    public Frmproducto: FormGroup;
    public prdiva;
    public immp: Observable<Impuestos[]>;
    public proveedor: Provideer[];
    public categorias: Categories[];
    public marcas: any;

    get pactivado() {return this.Frmproducto.get('pactivado'); }
    get pdescripcion() { return this.Frmproducto.get('pdescripcion'); }
    get pdetalle() { return this.Frmproducto.get('pdetalle'); }
    get pcodigo() { return this.Frmproducto.get('pcodigo'); }
    get pstock() {return this.Frmproducto.get('pstock'); }
    get pvalor() { return this.Frmproducto.get('pvalor'); }
    get ppicture() { return this.Frmproducto.get('ppicture'); }
    get category_id() { return this.Frmproducto.get('categorias'); }
    get stock_lost() {return this.Frmproducto.get('stock_lost'); }
    get stock_security() {return this.Frmproducto.get('stock_security'); }
    get provider_id() {return this.Frmproducto.get('provider_id'); }
    get tax_id() {return this.Frmproducto.get('tax_id'); }
      get brand_id() {return this.Frmproducto.get('brand_id'); }
      get pvneto() { return this.Frmproducto.get('pvneto'); }
      get fecha_vencimiento() {return  this.Frmproducto.get('fecha_vencimiento'); }
  constructor( private marc: MarcaService, private impt: ImpuestosService,
     private servi: ProductserviceService,
     private modalService: NgbModal,
      private fb: FormBuilder, private verifa: VerificarTokenService ) { 

    this.Frmproducto = this.fb.group({
      pcodigo: new FormControl( '', [Validators.required]),
      pdescripcion: new FormControl('', [Validators.required]),
      pdetalle: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]),
      ppicture:  new FormControl('', [Validators.required]),
      pvalor: new FormControl('', [Validators.required]),
      provider_id: new FormControl('', [Validators.required]),
      precio_provider: new FormControl('', [Validators.required]),
      category_id: new FormControl ('', [Validators.required]),
      pactivado: new FormControl(false),
      tax_id: new FormControl('', [Validators.required]),
      brand_id: new FormControl('', [Validators.required]),
      piva: new FormControl('', [Validators.required]),
      stock: new FormGroup( {
          pstock: new FormControl( '0', [Validators.required] ),
          stock_lost: new FormControl( '0' , [Validators.required]),
          stock_security: new FormControl(''),
          product_id: new FormControl(0)
      }),
      date_expiration: new FormGroup({
        fecha_vencimiento: new FormControl('', [Validators.required]),
         stock_expiration: new FormControl(''),
         product_id: new FormControl(0)
      }),
      pvneto: new FormControl('', [Validators.required]),
    })

  }
 async ngOnInit() {
  
    await this.servi.__tomaproveedores().subscribe(res => {this.proveedor = res; });
    await  this.servi.categorias().subscribe(data => {this.categorias = data; });
    await  this.marc.buscarmarca2().subscribe(data => {this.marcas =  data; });
    await this.buscarimpuesto();
  }

  async buscarimpuesto() {
    this.immp = this.impt.obtneriIMP();
}

  datos(pvalor) {
    // @ts-ignore
document.getElementById('tax_id').value = '';
// @ts-ignore
document.getElementById('iva2').value = '';
if (pvalor.value != null) {
    // @ts-ignore
  window.document.getElementById('tax_id').disabled = false;


} else {
  // @ts-ignore
  window.document.getElementById( 'tax_id' ).disabled = true;
  // @ts-ignore
  window.document.getElementById('tax_id').value = '';
}
}

calImp(imp, valor): number {

  const n = parseInt(imp.value.timpuesto);
  const n2 = parseInt(valor.value);
  const multiva = (n * n2);
  const resultiva: number = multiva / 100;
  console.log('impuesto', resultiva);
  this.prdiva = resultiva.toFixed();
  // @ts-ignore
  return resultiva;
}


  openModal(content1){
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open2( content2){
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  open3(content3){
    this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open4(content4){
    this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open5(content5){
    this.modalService.open(content5, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open6(content6){
    this.modalService.open(content6, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open7(content7){
    this.modalService.open(content7, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open8(content8){
    this.modalService.open(content8, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open9(content9){
    this.modalService.open(content9, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  
  }
  open10(content10){
    this.modalService.open(content10, { ariaLabelledBy: 'modal-basic-title' ,size: <any>'xl ' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    const pdescripcion = <HTMLInputElement> window.document.getElementById('pdescripcion')
    const pcodigo = <HTMLInputElement> window.document.getElementById('pcodigo')
    const categoria = <HTMLInputElement> window.document.getElementById('categoria')
    const marca = <HTMLInputElement> window.document.getElementById('marca')
    const precio = <HTMLInputElement> window.document.getElementById('valor')
    pdescripcion.value = this.Frmproducto.value.pdescripcion
    pcodigo.value = this.Frmproducto.value.pcodigo
    categoria.value = this.Frmproducto.value.category_id.cnombre
    marca.value = this.Frmproducto.value.brand_id.bnombre
    precio.value = this.Frmproducto.value.pvalor
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

  InCode(){
    /*
    cordova.plugins.barcodeScanner.scan(
      function (result) {
    var variable =  <HTMLInputElement> document.getElementById("codigo")

            variable.value = result.text
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
    );*/
  }

  Guardaregistro(a){
    if (!this.Frmproducto.valid) {
      try {
          this.Frmproducto.value.category_id = this.Frmproducto.value.category_id.id;
          this.Frmproducto.value.ppicture = btoa( this.Frmproducto.value.ppicture );
          this.Frmproducto.value.provider_id = this.Frmproducto.value.provider_id.id;
          this.Frmproducto.value.tax_id = this.Frmproducto.value.tax_id.id;
          this.Frmproducto.value.brand_id = this.Frmproducto.value.brand_id.id;
          this.Frmproducto.value.date_expiration.stock_expiration = this.Frmproducto.value.stock.pstock;
          this.Frmproducto.value.stock.product_id = 0;
          this.Frmproducto.value.date_expiration.product_id = 0;
          this.servi.guardarproductos( this.Frmproducto, a );
          console.log( 'productos', this.Frmproducto.value );
         // this.productForm.reset();
        const restFormulario = <HTMLInputElement> window.document.getElementById('formproducto')
        //this.Frmproducto.reset()

      } catch (e) {
          console.log( 'ocurrio un error', e );
      }
  }

  }
  cerrarguardar(a){
    
  }
}
