import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {Productos, Stock} from "../components/Modulos/Productos";
import {Marca} from "../components/Modulos/Marca";
import {Categories} from "../components/Modulos/Categories";
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

private UrlProductos= 'http://localhost:3000/products';
private UrlMarca= 'http://localhost:3000/brands';
private UrlCategorias= 'http://localhost:3000/categories';
private URLStock = 'http://localhost:3000/stocks';
  constructor(private http: HttpClient) { }

  //Tomar todos los productos
   products() {
    return this.http.get<Productos[]>(this.UrlProductos);
  }
//Buscar un producto por su ID
  buscarproductoporID(id:number){
      return this.http.get<Productos>(this.UrlProductos + '/'+ id)

  }

  //Buscar el el stock por su ID
  buscarelstockporID(id:number){
      return this.http.get<Stock>(this.URLStock + '/' +id)
  }
//Actualizar productos (detalle, texto referencia)
    actualizarproducto(produ: Productos) {
        return this.http.put<Productos>(this.UrlProductos + '/' + produ.id , produ);
    }

    //Actializar el stock de los productos.
    actualizarstock(stck: Stock){
      return this.http.put<Stock>(this.URLStock + '/' + stck.id, stck)
    }
    //Guardar un nuevo producto
   guardarproductos(p: Productos):Observable<Productos>{
    return this.http.post<Productos>(this.UrlProductos, p);
  }
    //Tomar todas las marcas
   marcas(): Observable<Marca[]> {
        return this.http.get<Marca[]>(this.UrlMarca)
  }
    //Guardar una marca
   marcassave(d: Marca){
      return this.http.post<Marca>(this.UrlMarca,d);
  }

  //Tomar todas las categorias
   categorias(): Observable<Categories[]>{
      return this.http.get<Categories[]>(this.UrlCategorias)
  }

  //Guardar una categoria
   categoriassave(c: Categories){
    return this.http.post<Categories>(this.UrlCategorias,c)
  }

}
