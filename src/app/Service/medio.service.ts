import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medio} from '../components/Modulos/Medio';

@Injectable({
  providedIn: 'root'
})
export class MedioService {

  constructor(private http: HttpClient) { }


  probandoMedioPago = 'https://multikart-norte.herokuapp.com/half_payments';

  mostrartodolosmedios() {
    return this.http.get<Medio[]>(this.probandoMedioPago);
  }

  guardarmediodepago(medio: Medio) {
    return this.http.post<Medio[]>(this.probandoMedioPago, medio);
  }
}
