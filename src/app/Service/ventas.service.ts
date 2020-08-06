import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ventas} from "../components/Modulos/Ventas";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient) { }

  Urlventas= 'https://marketmini.herokuapp.com/sales';

  mostrarventas(){
   return this.http.get<Ventas>(this.Urlventas)
  }

  guardarventas(vebta: Ventas){
    return this.http.post<Ventas[]>(this.Urlventas, vebta)
  }

}
