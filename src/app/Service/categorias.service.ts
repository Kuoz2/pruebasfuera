import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categories} from '../components/Modulos/Categories';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  UrlCategorias = 'https://marketmini.herokuapp.com/categories';
  UrlpruebaCategoria = 'http://localhost:3000/categories';
// Mostrar
  mostrarcategorias(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.UrlCategorias);
  }
// Por ID
  mostrarporID(id: number) {
  return this.http.get<Categories>(this.UrlCategorias + '/' + id);
  }
// Guardar
  guardarcategorias(c: Categories) {
    this.http.post<Categories>(this.UrlCategorias, c).subscribe();
  }
// Editar
  actualizarcategoria( cat: Categories) {
  return this.http.put<Categories>(this.UrlCategorias + '/' + cat.id, cat);
  }


}

