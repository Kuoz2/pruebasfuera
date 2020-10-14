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
  public productos: Observable<Categories[]>;
  public productos_select:Productos[];
  public mermas_dia:Observable<Mermas[]>;
  public p: any;
  public hora_actual;
  constructor(private categoryservice: ProductserviceService, private formBuilder: FormBuilder) {


    this.mermasForm = this.formBuilder.group({
      categoriasMrm: [''] ,
      product_id: [''],
      unidadesMrm:[''] ,
      causaMrm: [''],
      hora:[this.hora_horarica()]
    })

  }
  get categoriasMrm(){ return this.mermasForm.get('categoriasMrm') }
  get product_id(){ return this.mermasForm.get('product_id')}
  get unidadesMrm(){ return this.mermasForm.get('unidadesMrm')}
  get causaMrm(){ return this.mermasForm.get('causaMrm')}
  mermasForm: FormGroup;



  ngOnInit(): void {
  this.categoriasAsync();
  this.busquedaproducto();
    this.hora_horarica();
    this.mermashoy();
    this.actualizarhoras()
  }
  async busquedaproducto(){
    return this.productos = this.categoryservice.categorias().pipe(takeUntil(this.unsubscribe$))
  }

  async categoriasAsync()
  {
   return this.categorias = this.categoryservice.products().pipe( takeUntil( this.unsubscribe$ ) )

  }
  async mermashoy(){
    return this.mermas_dia = this.categoryservice.mermasdeldia().pipe(takeUntil(this.unsubscribe$))
  }

  guardarmermas(){
    console.log("guardar mermas", this.mermasForm.value)
  }

actualizarhoras(){
   var hora =  window.document.getElementById('hora')
  setTimeout("hora", 1000)
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

  hora_horarica(){
    var moment = require('moment-timezone');
    return moment.tz( "America/Santiago" ).format( 'H:mm' )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  guardarmerma(mermasForm: FormGroup) {
    console.log("lo seleccionado", this.productos_select)
    console.log("Merma", mermasForm.value)
    this.categoryservice.guardarMerma(mermasForm.value).subscribe()
    this.mermasForm.reset()
  }

  cambioselect(ProductosMrm) {
    console.log("el cabio producto", ProductosMrm)
  }
}
