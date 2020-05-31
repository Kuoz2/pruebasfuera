import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ProductserviceService} from "../../../../Service/productservice.service";
import {Categories} from "../../../Modulos/Categories";
import {Marca} from "../../../Modulos/Marca";
import {any} from "codelyzer/util/function";
import {Productos} from "../../../Modulos/Productos";
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
      img: "assets/images/user.png",
  }
      ];
categorias: Categories[];
marca: Marca[];
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


  constructor(private servi: ProductserviceService,  private formBuilder: FormBuilder) {


      this.productForm = this.formBuilder.group({
              pcodigo: new FormControl( '', [Validators.required]),
              pdescripcion: new FormControl('', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'), Validators.required]),
              pdetalle: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]),
              ppicture:  new FormControl(''),
              pvactivacioncatalogo: new FormControl(false),
              pvalor: new FormControl('', Validators.required),
              category_id: new FormControl (''),
              brand_id: new FormControl(''),
              pactivado: new FormControl(false),
              stock_id: new FormGroup( {
                  pstock: new FormControl( '' ),
                  pstockcatalogo: new FormControl( '' ),
                  stock_lost: new FormControl( '' ),
                  stock_security: new FormControl('')

              }),




      });

  }

  ngOnInit() {
     this.servi.marcas().subscribe(data => {this.marca = data});
     this.servi.categorias().subscribe(data => {this.categorias = data });

      console.log(this.categorias);
    console.log(this.marca);
    console.log(this.imagen);


  }


  guardarproducto(){
      this.productForm.value.category_id = this.productForm.value.category_id.id;
      this.productForm.value.brand_id = this.productForm.value.brand_id.id;
        this.productForm.value.ppicture = this.url[0].img;
        this.productForm.value.ppicture = btoa(this.productForm.value.ppicture);
            console.log("ingresar producto",this.productForm.value);
            console.log("igresar producto 2", this.productForm.value.product)
      this.servi.guardarproductos(this.productForm.value).subscribe(res =>{ console.log("guardado en el res ",res);   return res })
      this.productForm.reset()
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




}
