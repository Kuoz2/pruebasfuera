import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Productos} from "../components/Modulos/Productos";
import {Observable} from "rxjs";
import {Marca} from "../components/Modulos/Marca";
import {user} from "../components/Modulos/User";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {  }
    URlusuario= 'https://marketmini.herokuapp.com/regi';


 guardarusuario(user: user){
console.log('servisuer',user )
   return  this.http.post<user>(this.URlusuario,user ).subscribe(data => console.error('error',data));
}

mostrarousuarios(){
 
 }

}



