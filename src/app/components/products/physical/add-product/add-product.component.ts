import {Component, OnInit, Provider} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ProductserviceService} from "../../../../Service/productservice.service";
import {Categories} from "../../../Modulos/Categories";
import {Marca, MarcaPrueba} from "../../../Modulos/Marca";
import {any} from "codelyzer/util/function";
import {Productos} from "../../../Modulos/Productos";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {MarcaService} from "../../../../Service/marca.service";
import {Provideer} from "../../../Modulos/Provideer";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public imagen: any;
  public counter: number = 1;
  public counter2: number = 1;
  public url = [{
      img: "assets/images/beer-311090_1280.jpg",
  }
      ];
  public proveedor: Provideer[];
categorias: Categories[];
marca: Observable<Marca[]>;


public prueba_marca:  MarcaPrueba[];


file:File;
    productForm: FormGroup;

  get pactivado(){return this.productForm.get('pactivado')}
  get pdescripcion() { return this.productForm.get('pdescripcion')};
  get pdetalle(){ return this.productForm.get('pdetalle')};
  get pcodigo(){ return this.productForm.get('pcodigo')};
  get pstock(){return this.productForm.get('pstock')};
  get pstockcatalogo(){ return this.productForm.get('pstockcatalogo')};
  get pvalor(){ return this.productForm.get('pvalor')};
  get ppicture(){ return this.productForm.get('ppicture')};
  get brand_id(){return this.productForm.get('marca')}
  get category_id(){ return this.productForm.get('categorias')}
  get pvactivacioncatalogo(){ return this.productForm.get('pvactivacioncatalogo')}
  get stock_lost(){return this.productForm.get('stock_lost')}
  get stock_security(){return this.productForm.get('stock_security')}
  get provider_id(){return this.productForm.get('provider_id')}
  get precio_provider(){return this.productForm.get('precio_provider')}


  constructor(private servi: ProductserviceService,
              private formBuilder: FormBuilder,
              private router: Router,
              private servimarca: MarcaService
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
              brand_id: new FormControl('', [Validators.required]),
              pactivado: new FormControl(false),
              stock_id: new FormGroup( {
                  pstock: new FormControl( '',[Validators.required] ),
                  pstockcatalogo: new FormControl( '' ),
                  stock_lost: new FormControl( '' ,[Validators.required]),
                  stock_security: new FormControl('',[Validators.required])

              }),




      });

  }

  ngOnInit() {
     this.servi.categorias().subscribe(data => {this.categorias = data });
      console.log(this.categorias);
    console.log(this.marca);
    console.log(this.imagen);
      this.carga_marca_async()
      //Busqueda de las marcas
      this.servimarca.prueba().subscribe(res => this.prueba_marca = res)
      this.servi.__tomaproveedores().subscribe(res => {this.proveedor = res})
  }


  guardarproducto(){
      this.productForm.value.category_id = this.productForm.value.category_id.id;
      this.productForm.value.brand_id = this.productForm.value.brand_id.id;
        this.productForm.value.ppicture = this.url[0].img;
        this.productForm.value.ppicture = btoa(this.productForm.value.ppicture);
        this.productForm.value.provider_id = this.productForm.value.provider_id.id
      console.log("Provider", this.productForm.value);
      //this.servi.guardarproductos(this.productForm.value).subscribe(res =>{ console.log("guardado en el res ",res);   return res })
      this.productForm.reset()

  }
    cambio_category(evento){
console.log(this.productForm.value.category_id.id)
  }


  carga_marca_async(){
      this.marca = this.servimarca.mostrarmarcas()
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


   cate_marc_estan():void {
        for (let de of this.prueba_marca){
          console.log(de)
        }


    }
}
