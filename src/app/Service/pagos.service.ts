import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pagos} from '../components/Modulos/Pagos';
import {Observable} from 'rxjs';
import {Medio} from '../components/Modulos/Medio';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) { }

      urlpaymentsprueba = 'https://multikart-norte.herokuapp.com/payments';
        urlmediopagoprueba = 'https://multikart-norte.herokuapp.com/half_payments';
  mostrarpagos() {
   return  this.http.get<Pagos[]>(this.urlpaymentsprueba);
  }

  guardapagos(pago: Pagos): Observable<Pagos> {
   return  this.http.post<Pagos>(this.urlpaymentsprueba, pago);
  }

  mostrarmediodepago() {
    return   this.http.get<Medio[]>(this.urlmediopagoprueba);
  }

  guardarmododepago(med: Medio) {
      return this.http.post<Medio>(this.urlmediopagoprueba, med);
  }
}
