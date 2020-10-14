import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Impuestos} from "../components/Modulos/impuestos";

@Injectable({
  providedIn: 'root'
})
export class ImpuestosService {

  constructor(private HTTP:HttpClient) { }

  private HTTP_TAXES = 'https://marketmini.herokuapp.com/taxes';


  //Guardar impuesto
 async guardarIMP(im:Impuestos) {
     this.HTTP.post<Impuestos>(this.HTTP_TAXES, im).subscribe()
  }

  //Obtener el impuesto
  obtneriIMP():Observable<Impuestos[]>{
    return this.HTTP.get<Impuestos[]>(this.HTTP_TAXES)
  }

  //Buscar por la id
  impuestosporID(id: number):Observable<Impuestos>{
    return this.HTTP.get<Impuestos>(this.HTTP_TAXES + '/'+ id)
  }

  actualizarimpuesto( imp: Impuestos){
    return this.HTTP.put<Impuestos>(this.HTTP_TAXES + '/' + imp.id, imp)
  }

}
