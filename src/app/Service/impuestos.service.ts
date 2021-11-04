import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Impuestos} from '../components/Modulos/impuestos';

@Injectable({
  providedIn: 'root'
})
export class ImpuestosService {

  constructor(private HTTP: HttpClient) { }

    // uRL de prueba
    public httptaxprueb = 'https://multikart-norte.herokuapp.com/taxes';

  // Guardar impuesto
 async guardarIMP(im: Impuestos) {
     this.HTTP.post<Impuestos>(this.httptaxprueb, im).subscribe();
  }

  // Obtener el impuesto
  obtneriIMP(): Observable<Impuestos[]> {
    return this.HTTP.get<Impuestos[]>(this.httptaxprueb);
  }

  // Buscar por la id
  impuestosporID(id: number): Observable<Impuestos> {
    return this.HTTP.get<Impuestos>(this.httptaxprueb + '/' + id);
  }

  actualizarimpuesto( imp: Impuestos) {
    return this.HTTP.put<Impuestos>(this.httptaxprueb + '/' + imp.id, imp);
  }

}
