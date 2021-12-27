import { CookieService } from 'ngx-cookie-service';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { VerificarTokenService } from './verificar-token.service';
import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categories} from '../components/Modulos/Categories';
import { respuesta, guardado, resiviendo } from './../components/Modulos/respuesta';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public resServ
  public resiviendoinfo = new Subject<resiviendo>()
  constructor(private http: HttpClient,private cookie: CookieService, private verificar: VerificarTokenService) { this.resServ = guardado}
  public resipi: respuesta
  UrlpruebaCategoria = 'https://multikart-norte.herokuapp.com/categories';
  UrlEstaravacio = 'https://multikart-norte.herokuapp.com/categories'
// Mostrar
 mostrarcategorias(){
     return this.http.get('http://localhost:3000/categories')
  }

  
// Por ID
  mostrarporID(id: number) {
  return this.http.get<Categories>(this.UrlpruebaCategoria + '/' + id);
  }
// Guardar
  guardarcategorias(c) {
//  await this.verificar.verificarSaveCate().subscribe((respuesta: respuesta) => {
  //   console.log(respuesta);
    // if (respuesta.resultado != 'existe') { return; }
     //if (respuesta.resultado == 'existe') {

       this.http.post<Categories>('http://localhost:3000/categories', c.value).subscribe( res => {
          c.reset()
          
         this.resiviendoinfo.next(res)
        })
 //    }
   //})
   return this.resiviendoinfo.asObservable()
  }
  async guardainicialc(c){
    console.log("guardando ini cate", c)
    await this.verificar.verificarSaveCate().subscribe(async (respuesta: respuesta) => {
      console.log(respuesta);
      if (respuesta.resultado != 'existe') { return; }
      if (respuesta.resultado == 'existe') {
 
       await this.http.post<Categories>(this.UrlpruebaCategoria, c).subscribe( res => {
        if( Object.values(res)[0] == 'correctamente'){
          c.reset()
      } 
         
         })
      }
    })
  }
// Editar
  async actualizarcategoria( cat: Categories) {
      await this.verificar.verificarEditCate().subscribe(async (res:respuesta) => {
        if(res.resultado != 'existe'){return}
        if(res.resultado == 'existe'){
         await this.http.put<Categories>(this.UrlpruebaCategoria + '/' + cat.id, cat).subscribe(res => {
           if(Object.values(res)[0] == 'correctamente'){
             alert('La categoría se actualizado, correctamente.')
           }
         });;
        }
      })
  }

  //verifica si la categoria esta vacia y redige al link de ingreso de categorias.

  veri_categorias(){
    return this.http.get(this.UrlEstaravacio + '/verificar_blank_category' )
  }


}

