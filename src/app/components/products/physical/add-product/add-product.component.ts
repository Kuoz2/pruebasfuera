import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductserviceService} from "../../../../Service/productservice.service";
import {Categories} from "../../../Modulos/Categories";
import {Observable, Subject} from "rxjs";
import {Provideer} from "../../../Modulos/Provideer";
import {ImpuestosService} from "../../../../Service/impuestos.service";
import {Impuestos} from "../../../Modulos/impuestos";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>();
    public imagen: any;
  public counter: number = 1;
  public counter2: number = 1;
  public url = [{
      img: "assets/images/beer-311090_1280.jpg",
  }
      ];
  public proveedor: Provideer[];
categorias: Categories[];
public immp: Observable<Impuestos[]>;
file:File;
    productForm: FormGroup;
    prdiva;

  get pactivado(){return this.productForm.get('pactivado')}
  get pdescripcion() { return this.productForm.get('pdescripcion')};
  get pdetalle(){ return this.productForm.get('pdetalle')};
  get pcodigo(){ return this.productForm.get('pcodigo')};
  get pstock(){return this.productForm.get('pstock')};
  get pstockcatalogo(){ return this.productForm.get('pstockcatalogo')};
  get pvalor(){ return this.productForm.get('pvalor')};
  get ppicture(){ return this.productForm.get('ppicture')};
  get category_id(){ return this.productForm.get('categorias')}
  get pvactivacioncatalogo(){ return this.productForm.get('pvactivacioncatalogo')}
  get stock_lost(){return this.productForm.get('stock_lost')}
  get stock_security(){return this.productForm.get('stock_security')}
  get provider_id(){return this.productForm.get('provider_id')}
  get tax_id(){return this.productForm.get('tax_id')}

  constructor(private servi: ProductserviceService,
              private formBuilder: FormBuilder,
              private impt: ImpuestosService
  ) {


      this.productForm = this.formBuilder.group({
              pcodigo: new FormControl( '', [Validators.required]),
              pdescripcion: new FormControl('', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'), Validators.required]),
              pdetalle: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]),
              ppicture:  new FormControl('',[Validators.required]),
              pvactivacioncatalogo: new FormControl(false),
              pvalor: new FormControl('', [Validators.required]),
              provider_id: new FormControl('',[Validators.required]),
              precio_provider: new FormControl('',[Validators.required]),
              category_id: new FormControl ('', [Validators.required]),
              pactivado: new FormControl(false),

          stock_id: new FormGroup( {
                  pstock: new FormControl( '',[Validators.required] ),
                  pstockcatalogo: new FormControl( '' ),
                  stock_lost: new FormControl( '' ,[Validators.required]),
                  stock_security: new FormControl('',[Validators.required])

              }),
              tax_id: [],
              piva: new FormControl('',[])
      });

  }

  ngOnInit() {
     this.servi.categorias().subscribe(data => {this.categorias = data });


     //Buscar el impuesto
      this.buscarimpuesto();
      //Busqueda de las marcas
      this.servi.__tomaproveedores().subscribe(res => {this.proveedor = res})
  }

  async buscarimpuesto(){
        this.immp = this.impt.obtneriIMP().pipe(takeUntil(this.unsubscribe$))
  }

  guardarproducto():void{
      this.productForm.value.category_id = this.productForm.value.category_id.id;
        this.productForm.value.ppicture = this.url[0].img;
        this.productForm.value.ppicture = btoa(this.productForm.value.ppicture);
        this.productForm.value.provider_id = this.productForm.value.provider_id.id;
          //  this.servi.guardarproductos(this.productForm.value).subscribe(res =>{ console.log("guardado en el res ",res);   return res })
            console.log("iva", this.productForm.value);
           // this.productForm.reset()



  }



    cambio_category(evento){
console.log(this.productForm.value.category_id.id)
  }




resetiarform(){
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
    noseenvia(eve){
      if(eve.keyCode == 13){
      return     eve.returnValue== false
      }
    }


    //FileUpload
  readUrl(event: any, i) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url[i].img = reader.result.toString();
    }



  }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    calImp(imp,valor):number {

        const n = parseInt(imp.value.timpuesto);
        const n2 = parseInt(valor.value);
        const multiva = (n * n2);
        const resultiva:number = multiva / 100;
        console.log("impuesto", resultiva);
        this.prdiva = resultiva;
        //@ts-ignore
        return resultiva
    }

    datos(pvalor) {
      if (pvalor.value != null){
            //@ts-ignore
          window.document.getElementById('tax_id').disabled = false;

      } else {
          // @ts-ignore
          window.document.getElementById( 'tax_id' ).disabled = true;
          // @ts-ignore
          window.document.getElementById('tax_id').value = ''
      }
      }
}
