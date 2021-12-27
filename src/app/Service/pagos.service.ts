import { VerificarTokenService } from './verificar-token.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pagos} from '../components/Modulos/Pagos';
import {Observable} from 'rxjs';
import {Medio} from '../components/Modulos/Medio';
import { respuesta } from '../components/Modulos/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient, private verificar: VerificarTokenService) { }

      urlpaymentsprueba = 'https://multikart-norte.herokuapp.com/payments';
        urlmediopagoprueba = 'https://multikart-norte.herokuapp.com/half_payments';
  mostrarpagos() {
   return  this.http.get<Pagos[]>(this.urlpaymentsprueba);
  }

  guardapagos(pago: Pagos): Observable<Pagos> {
   return  this.http.post<Pagos>(this.urlpaymentsprueba, pago);
  }

  mostrarmediodepago():Observable<any> {
    return   this.http.get<Medio[]>(this.urlmediopagoprueba);
  }

  async guardarmododepago(med) {
    await this.verificar.verificarSaveMedio().subscribe(async (res:respuesta) => {
      console.log(res)
      if(res.resultado != 'existe'){return}
      if(res.resultado == 'existe'){
       await this.http.post<Medio>(this.urlmediopagoprueba, med.value).subscribe(res => {
          if(Object.values(res)[0] == 'correctamente'){
            med.reset()
          }
        });

      }
    })
  }
}
