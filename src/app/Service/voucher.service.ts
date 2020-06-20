import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {DetalleVoucher} from "../components/Modulos/DetalleVoucher";
import {Voucher} from "../components/Modulos/Voucher";
import {Observable} from "rxjs";
import {__await} from "tslib";
import {GANANCIAS, V_Producto} from "../components/Modulos/GANANCIAS";
import {Productos} from "../components/Modulos/Productos";

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  Urldetallevaucher = 'http://localhost:3000/voucher_details';
  Urlvoucher = 'http://localhost:3000/vouchers';
  UrlUltvoucher = 'http://localhost:3000/vouchers/showlast';
  URLVntMes = 'http://localhost:3000/voucher_details/show_date';
  UrlVentasTotal = 'http://localhost:3000/voucher_details/show_cantidad';
  URLmespasado = 'http://localhost:3000/voucher_details/show_after_month';
  URLproductosV = 'http://localhost:3000/voucher_details/producto_max_vend';

  constructor(private http: HttpClient) { }
  //Ganancias del mes pasado
  ganancia_mes_anterior():Observable<Productos[]>{
      return this.http.get<Productos[]>(this.URLmespasado);
  }

  //Ganancias este mes
  cantidad_vendida():Observable<Productos[]>{
      return this.http.get<Productos[]>(this.UrlVentasTotal)
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
}
