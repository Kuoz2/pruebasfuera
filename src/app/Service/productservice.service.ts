import {Injectable, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, pipe} from "rxjs";
import {Productos, Stock} from "../components/Modulos/Productos";
import {Marca} from "../components/Modulos/Marca";
import {Categories} from "../components/Modulos/Categories";
import {Stock_productos} from "../components/Modulos/stock_productos";
import {Perdidas_este_mes} from "../components/Modulos/reporte_grafico";
import {Provideer} from "../components/Modulos/Provideer";


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

private UrlProductos= 'http://localhost:3000/products';
private UrlMarca= 'http://localhost:3000/brands';
private UrlCategorias= 'http://localhost:3000/categories';
private URLStock = 'http://localhost:3000/stocks';
private URLStockPerdida = 'http://localhost:3000/stocks/mostrar_stock_de_perdidas';
private URLStockPerdidaAnterior = 'http://localhost:3000/stocks/p_mes_anterior';
private URL_STOCK_PRODUCTOS = 'http://localhost:3000/stocks/stock_products';
private URL_STOCK_PERDIDA = 'http://localhost:3000/stocks/mostrar_stock_de_perdidas';
private URL_STCK_GRF_PERDIDAS = 'http://localhost:3000/stocks/buscar_las_fechas_perdidas';
private URL_PROVIDERS = 'http://localhost:3000/providers';
//Variables publicas

  constructor(private http: HttpClient) { }

  //Tomar todos los productos
   products():Observable<Productos[]> {
    return this.http.get<Productos[]>(this.UrlProductos);
  }
  //Tomar algunos datos para los items del carrito.
    item_productos():Observable<Productos[]>{
      return this.http.get<Productos[]>(this.UrlProductos)
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
      console.log("stck", stck)
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


  //Tomar el stock perdida de este mes.
    stock_perida_este_mes(){
      return this.http.get(this.URLStockPerdida)
    }

    //Tomar el stock de perdidas del mes anterior
    stock_perdida_anterior(){
      return this.http.get(this.URLStockPerdidaAnterior)
    }

    //Busca el stock de perdidas con el precio del producto para poder ser multiplicados y a si sacar el valor de la perdida
    _stock_productos(){
      return this.http.get<Stock_productos[]>(this.URL_STOCK_PRODUCTOS)
    }

    //Busca las perdidas de este mes
    _stock_perdidas_hoy(){
      return this.http.get<Perdidas_este_mes[]>(this.URL_STOCK_PERDIDA)
    }

    __graf_perdidas(){
     // return this.http.get<Chart[]>(this.URL_STCK_GRF_PERDIDAS)
      return  this.http.get<any[]>(this.URL_STCK_GRF_PERDIDAS)
  }

  //Aqui se conecta a los proveedores
    __tomaproveedores(){
      return this.http.get<Provideer[]>(this.URL_PROVIDERS)
    }

        //Guardar un proveedor
    guardarProvider(c:Provideer){
      return this.http.post<Provideer>(this.URL_PROVIDERS, c)
    }


}
