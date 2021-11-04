import { respuesta } from './../components/Modulos/respuesta';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Marca} from '../components/Modulos/Marca';
import {Observable} from 'rxjs';
import { VerificarTokenService } from './verificar-token.service';

@Injectable({
  providedIn: 'root'
})


export class MarcaService {


  constructor(private http: HttpClient, private verificar: VerificarTokenService) { }
  // Buscarunamarca
    UrlPrueba = 'https://multikart-norte.herokuapp.com/brands';
 async buscarmarca() {
   return await this.http.get<Marca>( this.UrlPrueba );
  }
  buscarmarca2(): Observable<Marca[]> {

   return  this.http.get<Marca[]>(this.UrlPrueba);
  }

  // Guardar una marca.
  guardarmarca(m: Marca) {
    this.verificar.verificaSaveBrand().subscribe((res:respuesta) => {
    if (res.resultado != 'existe'){return}
    if(res.resultado == 'existe'){
     return  this.http.post(this.UrlPrueba , m).subscribe();
      } 
    })
  }
  // Actualizar una marca.
  actualizarmarca(m: Marca) {
   return this.http.put(this.UrlPrueba + '/' + m.id , m );
  }

    mostrarporID(id: number) {
        return this.http.get<Marca>(this.UrlPrueba + '/' + id);
    }
}
