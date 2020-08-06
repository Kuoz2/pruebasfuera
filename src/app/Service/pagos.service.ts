import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pagos} from "../components/Modulos/Pagos";
import {Observable} from "rxjs";
import {Medio} from "../components/Modulos/Medio";

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) { }


  Url = 'https://marketmini.herokuapp.com/payments';
    urlmedio = 'https://marketmini.herokuapp.com/half_payments';

  mostrarpagos(){
   return  this.http.get<Pagos[]>(this.Url)
  }

  guardapagos(pago:Pagos):Observable<Pagos> {
   return  this.http.post<Pagos>(this.Url, pago)
  }

  mostrarmediodepago(){
    return   this.http.get<Medio[]>(this.urlmedio)
  }

  guardarmododepago(med: Medio){
      return this.http.post<Medio>(this.urlmedio, med)
  }
}
