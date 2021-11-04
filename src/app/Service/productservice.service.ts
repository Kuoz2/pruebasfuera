import { VerificarTokenService, respuesta } from './verificar-token.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {date_expiration, Productos, Stock} from '../components/Modulos/Productos';
import {Categories} from '../components/Modulos/Categories';
import {Stock_productos} from '../components/Modulos/stock_productos';
import {Perdidas_este_mes} from '../components/Modulos/reporte_grafico';
import {Provideer} from '../components/Modulos/Provideer';
import {FormGroup} from '@angular/forms';
import {Mermas} from '../components/Modulos/mermas';
import {DateExpiration, Fecha_vencimiento} from '../components/Modulos/Fecha_vencimiento';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
// Variables publicas

  constructor(private http: HttpClient, private verifica: VerificarTokenService) { }
  public resipiente_Resu: respuesta



 UrlPrueba = 'https://multikart-norte.herokuapp.com/products';
 urlPruebaMerma = 'https://multikart-norte.herokuapp.com/decreases';
 urlPruebMrmInforme = 'https://multikart-norte.herokuapp.com/mrmsolutions';
 UrlpruebaCategoria = 'https://multikart-norte.herokuapp.com/categories';
 urlpruebaProveedores = 'https://multikart-norte.herokuapp.com/providers';
 urlpruebastock = 'https://multikart-norte.herokuapp.com/stocks';
 stockperdida = 'https://multikart-norte.herokuapp.com/mostrar_stock_de_perdidas';
 urlstockperdiudanaterior = 'https://multikart-norte.herokuapp.com/stocks/p_mes_anterior';
    // tslint:disable-next-line:variable-name
 prueba_guardar_stock = 'https://multikart-norte.herokuapp.com/stocks'
 prueba_stock_productos = 'https://multikart-norte.herokuapp.com/stocks/stock_products';
 pruebastockperdida = 'https://multikart-norte.herokuapp.com/stocks/mostrar_stock_de_perdidas';
 pruebaSTCKGRFPERDIDAS = 'https://multikart-norte.herokuapp.com/stocks/buscar_las_fechas_perdidas';
 pruebaActualizarFechaVenta = 'https://multikart-norte.herokuapp.com/date_expirations';
 pruebanuevoinventario = 'https://multikart-norte.herokuapp.com/date_expirations';
 prueba_guardarfechainventario2 = 'https://multikart-norte.herokuapp.com/date_expirations'
 prueba_buscarnoproduct_id = 'https://multikart-norte.herokuapp.com/date_expirations/date_product_id_on'
 muestraCod = 'https://multikart-norte.herokuapp.com/products/codigos_debarra'
    // Actualizar la fecha al realizar una venta.
    
    codprod(){
      return this.http.get(this.muestraCod).toPromise()
    }
  // Tomar todos los productos
   products(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.UrlPrueba);
  }
  // Tomar algunos datos para los items del carrito.
    item_productos(): Observable<Productos[]> {
      return this.http.get<Productos[]>(this.UrlPrueba);
    }

    // Tomar la cantidad del inventario que se debe gestionar
    inventario_gestion() {
      return this.http.get(this.UrlPrueba + '/inventario_gestionable' ).toPromise();
    }


// Buscar un producto por su ID
  buscarproductoporID(id: number) {
      return this.http.get<Productos>(this.UrlPrueba + '/' + id);

  }

  // Buscar el el stock por su ID
  buscarelstockporID(id: number) {
      return this.http.get<Stock>(this.urlpruebastock + '/' + id);
  }
// Actualizar productos (detalle, texto referencia)
    actualizarproducto(produ: Productos) {
        return this.http.put<Productos>(this.UrlPrueba + '/' + produ.id , produ);
    }

    // Actializar el stock de los productos.
    actualizarstock(stck: Stock) {
      console.log('stck', stck);
      return this.http.put<Stock>(this.urlpruebastock + '/' + stck.id, stck);
    }
    // Guardar un nuevo producto
  async guardarproductos(p) {
  await  this.verifica.VerficSaveProd().subscribe(res => {
    console.log(res)
    this.resipiente_Resu.resultado = res
    if(this.resipiente_Resu.resultado != 'existe') {return}
      if(this.resipiente_Resu.resultado == 'existe'){
        this.http.post<Productos>(this.UrlPrueba, p).subscribe(response => {console.log(response)})
      } 

    })
  }


  // Tomar todas las categorias
   categorias(): Observable<Categories[]> {
      return this.http.get<Categories[]>(this.UrlpruebaCategoria);
  }

  // Guardar una categoria
   categoriassave(c: Categories) {
    return this.http.post<Categories>(this.UrlpruebaCategoria, c);
  }


  // Tomar el stock perdida de este mes.
    stock_perida_este_mes() {
      return this.http.get(this.stockperdida);
    }

    // Tomar el stock de perdidas del mes anterior
    stock_perdida_anterior() {
      return this.http.get(this.urlstockperdiudanaterior);
    }

    // Busca el stock de perdidas con el precio del producto para poder ser multiplicados y a si sacar el valor de la perdida
    _stock_productos() {
      return this.http.get<Stock_productos[]>(this.prueba_stock_productos);
    }

    // Guardar el nuevo stock para el inventario 2 
    _stockinventario2(stck: Stock):Observable<Stock>{
      return this.http.post<Stock>(this.urlpruebastock,stck);
    }

    // Busca las perdidas de este mes
    _stock_perdidas_hoy() {
      return this.http.get<Perdidas_este_mes[]>(this.stockperdida);
    }

    __graf_perdidas() {
     // return this.http.get<Chart[]>(this.URL_STCK_GRF_PERDIDAS)
      return  this.http.get<any[]>(this.pruebaSTCKGRFPERDIDAS);
  }

  // Aqui se conecta a los proveedores
    __tomaproveedores() {
      return this.http.get<Provideer[]>(this.urlpruebaProveedores);
    }

        // Guardar un proveedor
    guardarProvider(c: Provideer) {
      return this.http.post<Provideer>(this.urlpruebaProveedores, c);
    }



    // Guardar una merma
    guardarMerma(merma) {
    return this.http.post(this.urlPruebaMerma, merma);
    }

    // Buscar mermas
    mermasdeldia(): Observable<Mermas[]> {
    return this.http.get<Mermas[]>(this.urlPruebaMerma);
    }

    // Cantidad de mermas realizadas
    cantidadesObtenidas() {
      return this.http.get(this.urlPruebaMerma + '/muestra_situaciones').toPromise();
    }
    // Actualizar registro merma
    UpdateMermaEstado(mrm) {
      console.log('id de la info', mrm.id);
      return this.http.put(this.urlPruebaMerma + '/' + mrm.id, mrm ).subscribe(error => console.log(error));
    }

    // Guardar el informe de la merma, del como se soluciono.
    GuardarRegistro(regimrm) {
      return this.http.post(this.urlPruebMrmInforme, regimrm).subscribe(
          (error) => {console.log('ah, ocurrido un error', error); }
          );
    }

        //Productos que venceran el siguiente mes.

    GetPorvencer() {
        return this.http.get<Fecha_vencimiento[]>(this.UrlPrueba + '/vencimientoproximomes').toPromise();
    }

        // Productos que estan por vencer.
    Getprodvencmes(){
      return this.http.get<any[]>(this.UrlPrueba + '/obtener_fecha_productos_mes').toPromise();
    }

    //Productos que venceran el siguiente mes.
    
    // Actualizar el stock de las fechas
actualizar_stock_fecha(fchAct: date_expiration) {
        return this.http.put<date_expiration>(this.pruebaActualizarFechaVenta + '/' + fchAct.id, fchAct);
    }

    // Tomando el nuevo inventario con su stock de perdida y fecha de vencimiento.
    getnewinventario() {
       return this.http.get(this.pruebaActualizarFechaVenta + '/date_product_id_on').toPromise();
    }

    // Buscar la fecha del nuevo inventario
    segundoinventarioID(id: number) {
     return  this.http.get(this.pruebaActualizarFechaVenta + '/' + id ).toPromise();
    }

    // Guardar la fecha actual del inventario 2
  _guardarfechainventario2(dtex:date_expiration):Observable<date_expiration>{
    return this.http.post<date_expiration>(this.pruebaActualizarFechaVenta, dtex)
  }

  // Get a las fechas y productos que estan registrados en el segundo inventario.

  _buscandolasfechasin_productid(){
    return this.http.get(this.pruebaActualizarFechaVenta + '/date_product_id_on').toPromise();
  }

  // Actualizar la fecha vencimiento.

  _actualizar_fechavence(dt: date_expiration){
      return this.http.put(this.pruebaActualizarFechaVenta + '/' + dt.id, dt)
  }

}
