import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ProductserviceService} from "../../../Service/productservice.service";
import {takeUntil} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Productos} from "../../Modulos/Productos";
import {Categories} from "../../Modulos/Categories";
import {Mermas} from "../../Modulos/mermas";


@Component({
  selector: 'app-merma',
  templateUrl: './merma.component.html',
  styleUrls: ['./merma.component.scss']
})
export class MermaComponent implements OnInit,OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public categorias: Observable<Productos[]>;
  public frmCategoria: String = "";
  public frmMarca: String ="";
  public productos: Observable<Categories[]>;
  public marcas: Observable<Productos[]>;
  public mermas_dia:Observable<Mermas[]>;
  public p: any;
  constructor(private categoryservice: ProductserviceService, private formBuilder: FormBuilder) {


    this.mermasForm = this.formBuilder.group({
      categoriasMrm: [''] ,
      product_id: [''],
      unidadesMrm:[''] ,
      causaMrm: [''],
      hora:[this.hora_horarica()],
      marcaMrm: [''],
    })

  }
  get categoriasMrm(){ return this.mermasForm.get('categoriasMrm') }
  get product_id(){ return this.mermasForm.get('product_id')}
  get unidadesMrm(){ return this.mermasForm.get('unidadesMrm')}
  get causaMrm(){ return this.mermasForm.get('causaMrm')}
  get marcaMarm(){return this.mermasForm.get('marcaMrm')}
  mermasForm: FormGroup;



  ngOnInit(): void {
  this.categoriasAsync();
  this.busquedaproducto();
    this.hora_horarica();
    this.mermashoy();
    this.actualizarhoras();
    this.busquedaproductos()
  }
  async busquedaproducto(){
    return this.productos = this.categoryservice.categorias().pipe(takeUntil(this.unsubscribe$))
  }

   busquedaproductos(){
      return this.marcas = this.categoryservice.products()
  }

  async categoriasAsync()
  {
   return this.categorias = this.categoryservice.products()

  }
  async mermashoy(){
    return this.mermas_dia = this.categoryservice.mermasdeldia().pipe(takeUntil(this.unsubscribe$))
  }

  guardarmermas(){
    console.log("guardar mermas", this.mermasForm.value)
  }

actualizarhoras(){
   var hora =  window.document.getElementById('hora');
  setTimeout("hora", 1000);
  console.log("la hora", this.hora_horarica())
}
  refrescar(){
  /*  this.mermasForm.patchValue({
      CategoriasFrm: new FormControl('') ,
      ProductosFrm: new FormControl(''),
      UnidadesFrm: new FormControl(''),
      CausaFrm: new FormControl(''),
    });
    this.mermas.controls.splice(0, this.mermas.length)*/
  }

  cambiofrm(){
this.frmCategoria = this.mermasForm.value.categoriasMrm
  }
  cambicatego() {
    console.log(this.mermasForm.value.marcaMrm)
    this.frmMarca = this.mermasForm.value.marcaMrm

  }

  hora_horarica(){
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

   guardarmerma(mermasForm) {
    // this.categoryservice.buscarelstockporID(mermasForm.value.product_id).subscribe(  (res) => {
      //   this.stockactulizar = res });

      const da = mermasForm.value.product_id;
     const de = JSON.parse(da);
     mermasForm.value.product_id = de.id;
     if (mermasForm.value.causaMrm != "No, en factura") {     de.stock.pstock = de.stock.pstock - mermasForm.value.unidadesMrm; }
     de.stock.stock_lost = de.stock.stock_lost + mermasForm.value.unidadesMrm;
     console.log("mermas", de.stock);

     this.categoryservice.guardarMerma(mermasForm.value).subscribe()

     this.categoryservice.actualizarstock(de.stock).subscribe(res =>{return res});
    //this.mermasForm.reset()
  }



}
