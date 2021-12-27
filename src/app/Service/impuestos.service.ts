import { async } from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Impuestos} from '../components/Modulos/impuestos';
import { VerificarTokenService, respuesta } from './verificar-token.service';

@Injectable({
  providedIn: 'root'
})
export class ImpuestosService {

  constructor(private HTTP: HttpClient,private verificar: VerificarTokenService) { }

    // uRL de prueba
    public httptaxprueb = 'https://multikart-norte.herokuapp.com/taxes';

  // Guardar impuesto
 async guardarIMP(im) {
  this.verificar.verificarSaveTax().subscribe((res:respuesta) => {
    
    if (res.resultado != 'existe'){return}
    if(res.resultado == 'existe'){
    this.HTTP.post<Impuestos>(this.httptaxprueb, im.value).subscribe(
      res => {if(Object.values(res)[0] == 'correctamente'){im.reset()}}
    );
    }
   })
  }

  iniguardar(im){
    this.verificar.verificarSaveTax().subscribe((res:respuesta) => {
      console.log("existe el impusto", res)
      if (res.resultado != 'existe'){return}
      if(res.resultado == 'existe'){
      this.HTTP.post<Impuestos>(this.httptaxprueb, im).subscribe(
        res => {if(Object.values(res)[0] == 'correctamente'){alert("se guardo todo correctamente")}}
      );
      }
     })
  }

  // Obtener el impuesto
  obtneriIMP(): Observable<any> {
    return this.HTTP.get<Impuestos>(this.httptaxprueb);
  }

  // Buscar por la id
  impuestosporID(id: number): Observable<Impuestos> {
    return this.HTTP.get<Impuestos>(this.httptaxprueb + '/' + id);
  }

 async actualizarimpuesto( imp: Impuestos) {
   await this.verificar.verificarEditImp().subscribe( async(res:respuesta) => {
      if(res.resultado != 'existe'){return}
      if(res.resultado == 'existe'){
        await this.HTTP.put<Impuestos>(this.httptaxprueb + '/' + imp.id, imp).subscribe(res =>{
          if(Object.values(res)[0] == 'correctamente'){
            alert("Se, actualizo correctamente")
          }
        });

      }
    })
  }
  // Aqui se verifica si esta vacio el impuesto
  _vacio_impuesto(){
    return this.HTTP.get(this.httptaxprueb + '/verificar_blank_tax')
  }

}
