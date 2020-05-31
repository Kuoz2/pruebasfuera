import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Marca} from "../components/Modulos/Marca";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor( private http: HttpClient) { }

  UrlMarca = 'http://localhost:3000/brands';

  lalista: any;

  mostrarmarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.UrlMarca)
  }
  listamarca(){
    return this.http.get<any>(this.UrlMarca).subscribe(respon => {this.lalista = respon})
  }

  mostrarpoID(id: number){
    return this.http.get<Marca>(this.UrlMarca + '/' + id);
  }

  guardarmarca(ma: Marca){
    return this.http.post<Marca>(this.UrlMarca, ma);
  }

  actualizarmarca(ma: Marca){
    return this.http.put<Marca>(this.UrlMarca + '/' + ma.id, ma);
  }

}
