import { date_expiration } from './../../../Modulos/Productos';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductserviceService} from '../../../../Service/productservice.service';
import {Categories} from '../../../Modulos/Categories';
import {Observable, Subject} from 'rxjs';
import {Provideer} from '../../../Modulos/Provideer';
import {ImpuestosService} from '../../../../Service/impuestos.service';
import {Impuestos} from '../../../Modulos/impuestos';
import {takeUntil} from 'rxjs/operators';
import {Marca} from '../../../Modulos/Marca';
import {MarcaService} from '../../../../Service/marca.service';
import {DatePipe} from '@angular/common';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
    providers: [DatePipe]
})
export class AddProductComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>();
    public imagen: any;
  public counter = 1;
  public counter2 = 1;
  spinnerType = 'la-ball-8bits';


    public url = [{
      img: 'assets/images/beer-311090_1280.jpg',
  }
      ];
      public articuloBusqueda: string;
  public proveedor: Provideer[];
categorias: Categories[];
marcas: Marca[];
public immp: Observable<Impuestos[]>;
file: File;
    productForm: FormGroup;
    prdiva;
    fechaguardada = '';
  get pactivado() {return this.productForm.get('pactivado'); }
  get pdescripcion() { return this.productForm.get('pdescripcion'); }
  get pdetalle() { return this.productForm.get('pdetalle'); }
  get pcodigo() { return this.productForm.get('pcodigo'); }
  get pstock() {return this.productForm.get('pstock'); }
  get pvalor() { return this.productForm.get('pvalor'); }
  get ppicture() { return this.productForm.get('ppicture'); }
  get category_id() { return this.productForm.get('categorias'); }
  get stock_lost() {return this.productForm.get('stock_lost'); }
  get stock_security() {return this.productForm.get('stock_security'); }
  get provider_id() {return this.productForm.get('provider_id'); }
  get tax_id() {return this.productForm.get('tax_id'); }
    get brand_id() {return this.productForm.get('brand_id'); }
    get pvneto() { return this.productForm.get('pvneto'); }
    get fecha_vencimiento() {return  this.productForm.get('fecha_vencimiento'); }

    dateValidator(c: AbstractControl): { [key: string]: boolean } {
        const value = c.value;
        if (value && typeof value === 'string') {
            const match = value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
            if (!match) {
                return { dateInvalid: true };
            } else if (match && match[0] !== value) {
                return { dateInvalid: true };
            }
        }
        return null;
    }


    constructor(private servi: ProductserviceService,
                private formBuilder: FormBuilder,
                private impt: ImpuestosService,
                private marc: MarcaService,
                private dp: DatePipe,
                private ngxspinner: NgxSpinnerService
  ) {




        this.productForm = this.formBuilder.group({
              pcodigo: new FormControl( '', [Validators.required]),
              pdescripcion: new FormControl('', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'), Validators.required]),
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
                  pstock: new FormControl( '', [Validators.required] ),
                  stock_lost: new FormControl( '' , [Validators.required]),
                  stock_security: new FormControl(''),
                  product_id: new FormControl(0)
              }),
              date_expiration: new FormGroup({
                fecha_vencimiento: new FormControl(''),
                 stock_expiration: new FormControl(''),
                 product_id: new FormControl(0)
              }),
              pvneto: new FormControl('', [Validators.required]),
      });

  }


  private formatDate(date) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }
      return [year, month, day].join('');
  }

 async ngOnInit() {
      this.ngxspinner.show();
      await  this.servi.categorias().subscribe(data => {this.categorias = data; });
      await  this.marc.buscarmarca2().subscribe(data => {this.marcas =  data; });

     // Buscar el impuesto
      await  this.buscarimpuesto();
      // Busqueda de las marcas
      await this.servi.__tomaproveedores().subscribe(res => {this.proveedor = res;  this.ngxspinner.hide(); });
  }

  async buscarimpuesto() {
        this.immp = this.impt.obtneriIMP().pipe(takeUntil(this.unsubscribe$));
  }

  guardarproducto(): void {
        if (!this.productForm.valid) {
            try {
                this.productForm.value.category_id = this.productForm.value.category_id.id;
                this.productForm.value.ppicture = this.url[0].img;
                this.productForm.value.ppicture = btoa( this.productForm.value.ppicture );
                this.productForm.value.provider_id = this.productForm.value.provider_id.id;
                this.productForm.value.tax_id = this.productForm.value.tax_id.id;
                this.productForm.value.brand_id = this.productForm.value.brand_id.id;
                this.productForm.value.date_expiration.stock_expiration = this.productForm.value.stock.pstock;
                this.productForm.value.stock.product_id = 0;
                this.productForm.value.date_expiration.product_id = 0;
                this.servi.guardarproductos( this.productForm )
                console.log( 'productos', this.productForm.value );
               // this.productForm.reset();

            } catch (e) {
                console.log( 'ocurrio un error', e );
            }
        }



  }



    cambio_category(evento) {
console.log(this.productForm.value.category_id.id);
  }




resetiarform() {
    this.productForm.reset();
}

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  increment2() {
    this.counter += 1;
  }

  decrement2() {
    this.counter2 -= 1;
  }

  increment3() {
      this.counter += 1;
  }

  decrement3() {
    this.counter2 -= 1;
  }
    increment4() {
        this.counter += 1;
    }

    decrement4() {
        this.counter2 -= 1;
    }
    noseenvia(eve) {
      if (eve.keyCode == 13) {
      return     eve.returnValue == false;
      }
    }


    // FileUpload
  readUrl(event: any, i) {
    console.log("tamaño de imagen", event.target.files[0].size)

    if (event.target.files.length === 0) {
      return;
    }
    if( event.target.files[0].size > 89458){
      alert("El tamaño de la imagen supera los 88kb")
          return;
    }
    // Image upload validation
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null ) {
      return;
    }
    // Image upload
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url[i].img = reader.result.toString();
    };



  }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    calImp(imp, valor): number {

        const n = parseInt(imp.value.timpuesto);
        const n2 = parseInt(valor.value);
        const multiva = (n * n2);
        const resultiva: number = multiva / 100;
        console.log('impuesto', resultiva);
        this.prdiva = resultiva;
        // @ts-ignore
        return resultiva;
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

    nosenvia($event) {
        if ($event.keyCode == 13) {
            return $event.returnValue = false;
        }
    }

    fecha(decha) {
        console.log('fecha', this.productForm.value);
        // @ts-ignore
        console.log('fecha ngmodel', this.fechaguardada);
    }

    IngCodigo(){
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
     const elemento = <HTMLInputElement> document.getElementById("validationCustom03");
     elemento.value = ""
            return
    }

}
