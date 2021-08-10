import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medio} from '../components/Modulos/Medio';

@Injectable({
  providedIn: 'root'
})
export class MedioService {

  constructor(private http: HttpClient) { }


  UrlMedio = 'https://marketmini.herokuapp.com/half_payments';
  probandoMedioPago = 'http://localhost:3000/half_payments';

  mostrartodolosmedios() {
    return this.http.get<Medio[]>(this.UrlMedio);
  }

  guardarmediodepago(medio: Medio) {
    return this.http.post<Medio[]>(this.UrlMedio, medio);
  }
}
