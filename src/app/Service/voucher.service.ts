import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DetalleVoucher} from "../components/Modulos/DetalleVoucher";
import {Voucher} from "../components/Modulos/Voucher";
import {Observable} from "rxjs";
import {V_Producto} from "../components/Modulos/GANANCIAS";

import {Reporte_grafico, Venta_mes_atras, Venta_por_mes,} from "../components/Modulos/reporte_grafico";

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  Urldetallevaucher = 'https://marketmini.herokuapp.com/voucher_details';//Muestra el detalle del detalle del voucher con el producto en general
  Urlvoucher = 'https://marketmini.herokuapp.com/vouchers';//Muestra el voucher completo
  UrlUltvoucher = 'https://marketmini.herokuapp.com/vouchers/showlast';//Muestra el ultimo producto vendido
  URLVntMes = 'https://marketmini.herokuapp.com/show_date';//Muestra el estado de las venta con el voucher y el producto vendido este mes.
  UrlVentasTotal = 'https://marketmini.herokuapp.com/voucher_details/show_cantidad';//Muesta la cantidad ganada este mes
  URLmespasado = 'https://marketmini.herokuapp.com/voucher_details/show_after_month';//Muestra las ganancas del mes anterior
  URLproductosV = 'https://marketmini.herokuapp.com/voucher_details/producto_max_vend';//Muestra los productos mas vendidos
  UTLtotalganancias = 'https://marketmini.herokuapp.com/voucher_details/las_ganancias_totales_meses';//Muestra el total de las ganancias.
  URLTOTALGANANCIAS_FV = 'https://marketmini.herokuapp.com/vouchers/mostrar_ganancias_por_mes'; //MUESTRA LAS GANANCIAS POR CADA MES Y MUESTRA EL RESULTADO.
  URLGuardarconfig = 'https://marketmini.herokuapp.com/config_vouchers'  ;

  constructor(private http: HttpClient) { }
  //Ganancias totales del mes pasado.
  ganancia_mes_anterior():Observable<Venta_mes_atras>{
      return this.http.get<Venta_mes_atras>(this.URLmespasado);
  }

  //Ganancias este mes
  cantidad_vendida():Observable<Venta_por_mes>{
      return this.http.get<Venta_por_mes>(this.UrlVentasTotal)
  }

  //Lista de productos vendidos.
    p_vendidos(){
      return this.http.get<V_Producto[]>(this.URLproductosV)
    }
    //Productos de este mes
  vnts_mes():Observable<DetalleVoucher>{
        return this.http.get<DetalleVoucher>(this.URLVntMes)
  }

  crearvoucher(deta: DetalleVoucher):Observable<DetalleVoucher> {
    return this.http.post<DetalleVoucher>(this.Urldetallevaucher, deta);
  }
  crearunvoucher(vouch: Voucher){
    return  this.http.post<Voucher>(this.Urlvoucher,vouch);
  }

 ultimovoucher():Observable<Voucher>{
      return  this.http.get<Voucher>(this.UrlUltvoucher);
  }

  mostratodo(){
    return this.http.get<DetalleVoucher>(this.Urldetallevaucher);
  }

  detalledeventa():Observable<DetalleVoucher[]>{
      return this.http.get<DetalleVoucher[]>(this.Urldetallevaucher);
  }


  mostrarvoucher():Observable<Voucher[]>{
    return this.http.get<Voucher[]>(this.Urlvoucher);
  }

  //Muesta todas las ganancias obtenidas asta ahora.
    muestra_todas_ganancias(){
      return this.http.get<Reporte_grafico>(this.UTLtotalganancias)
    }
    //Muesta el total de las ganancias este mes. CON LOS RESULTADOS Y EL MES.
    mostrar_ganancias_fv(){
        return this.http.get<any[]>(this.URLTOTALGANANCIAS_FV)
    }

    guardarcambios(d){
      this.http.post(this.URLGuardarconfig, d)
    }

}
