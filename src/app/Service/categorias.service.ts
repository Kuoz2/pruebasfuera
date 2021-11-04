import { VerificarTokenService } from './verificar-token.service';
import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categories} from '../components/Modulos/Categories';
import {Observable, Subscriber} from 'rxjs';
import { respuesta, guardado } from './../components/Modulos/respuesta';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public resServ

  constructor(private http: HttpClient, private verificar: VerificarTokenService) { this.resServ = guardado}
  public resipi: respuesta
  UrlpruebaCategoria = 'https://multikart-norte.herokuapp.com/categories';
// Mostrar
  mostrarcategorias(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.UrlpruebaCategoria);
  }
// Por ID
  mostrarporID(id: number) {
  return this.http.get<Categories>(this.UrlpruebaCategoria + '/' + id);
  }
// Guardar
 async guardarcategorias(c: Categories) {
   this.verificar.verificarSaveCate().subscribe((respuesta: respuesta) => {
     console.log(respuesta);
     if (respuesta.resultado != 'existe') { return; }
     if (respuesta.resultado == 'existe') {

       this.http.post<Categories>(this.UrlpruebaCategoria, c).subscribe()
     }
   })
  }
// Editar
  actualizarcategoria( cat: Categories) {
    console.log("actualizar", cat)
  return this.http.put<Categories>(this.UrlpruebaCategoria + '/' + cat.id, cat);
  }

  //probando la jti
 


}

