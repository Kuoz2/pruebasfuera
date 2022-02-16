import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ventas} from '../components/Modulos/Ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  PruebaVentas = 'https://multikart-norte.herokuapp.com/sales';
  consu_code='https://multikart-norte.herokuapp.com/codes'
  mostrarventas() {
   return this.http.get<Ventas>(this.PruebaVentas);
  }

  guardarventas(vebta: Ventas) {
    return this.http.post<Ventas[]>(this.PruebaVentas, vebta);
  }

  consultar_code(code){
      return this.http.put(this.consu_code +"/"+ code.id, code).subscribe(res => {console.log(res)})
  }

}
