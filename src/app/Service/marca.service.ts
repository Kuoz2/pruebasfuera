import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Marca} from '../components/Modulos/Marca';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MarcaService {


  constructor(private http: HttpClient) { }
  urlmarca = 'https://marketmini.herokuapp.com/brands';
  // Buscarunamarca
    UrlPrueba = 'http://localhost:3000/brands';
 async buscarmarca() {
   return await this.http.get<Marca>( this.urlmarca );
  }
  buscarmarca2(): Observable<Marca[]> {

   return  this.http.get<Marca[]>(this.urlmarca);
  }

  // Guardar una marca.
  guardarmarca(m: Marca) {
    this.http.post(this.urlmarca , m).subscribe();
  }
  // Actualizar una marca.
  actualizarmarca(m: Marca) {
   return this.http.put(this.urlmarca + '/' + m.id , m );
  }

    mostrarporID(id: number) {
        return this.http.get<Marca>(this.urlmarca + '/' + id);
    }
}
