import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Categories} from "../../../Modulos/Categories";
import {ProductserviceService} from "../../../../Service/productservice.service";
import {takeUntil} from "rxjs/operators";
import {Productos} from "../../../Modulos/Productos";
import {Promociones} from "../../../Modulos/Promociones";

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>();
    public promociones: Productos[];
    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    public promo: Promociones = new Promociones();
    registros: Productos[];
  constructor(private servi: ProductserviceService) { }
   expanded = false;
    categorias: Observable<Categories[]>;
    Lacategoria: Categories;
    productos: Observable<Productos[]>;
    loseleccionado: string ="";
  ngOnInit(): void {
      this.mostrarcategorias()
  }

  mostrarcategorias(){
      this.productos = this.servi.products().pipe(takeUntil(this.unsubscribe$));
       this.categorias = this.servi.categorias().pipe(takeUntil(this.unsubscribe$))
  }

    guardarseleccion(registros: Productos[], event){
        let element = {munidades:1};
            for (const l of registros){
                if (l.munidades >= element.munidades){
                    if (this.promociones ){
                        let ObjetIndex = this.promociones.findIndex((obj => obj.id == l.id));
                        if (ObjetIndex != -1){
                            this.promociones[ObjetIndex].munidades += 1;
                        } else {
                            this.promociones.push(l);
                        }
                    }else {
                        this.promociones = [];
                        this.promociones.push(l);
                    }
                } else
                {
                    if (this.promociones ){
                        Object.assign(l,element);
                        let ObjetIndex = this.promociones.findIndex((obj => obj.id == l.id));
                        if (ObjetIndex != -1){
                            this.promociones[ObjetIndex].munidades += 1;
                        } else {
                            this.promociones.push(l);
                        }
                    }else {
                        Object.assign(l,element);
                        this.promociones = [];
                        this.promociones.push(l);
                    }
                }

            }
  }

    guardarpromo(){
        const datos = []

        for (const o of this.promociones){

                this.promo.munidades = o.munidades
                this.promo.mproducto = o.pdescripcion
                this.promo.productos = o;
                console.log("das", this.promo)
            console.log("poroduct", o)


        }
    }


    ngmodelcambia() {
            console.log(this.Lacategoria.cnombre)
        this.loseleccionado = this.Lacategoria.cnombre
    }
}
