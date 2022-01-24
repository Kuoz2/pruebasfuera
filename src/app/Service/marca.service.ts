import { resivendoMarca, respuesta } from './../components/Modulos/respuesta';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Marca} from '../components/Modulos/Marca';
import { Observable, Subject } from 'rxjs';
import { VerificarTokenService } from './verificar-token.service';

@Injectable({
  providedIn: 'root'
})


export class MarcaService {

public SubMarca = new Subject<resivendoMarca>()
  constructor(private http: HttpClient, private verificar: VerificarTokenService) { }
  // Buscarunamarca
    UrlPrueba = 'https://multikart-norte.herokuapp.com/brands';
    private urlverificacion = 'https://multikart-norte.herokuapp.com/brands/verificar_blank_marca'
  buscarmarca() {
   return  this.http.get<Marca>( 'http://localhost:3000/brands' );
  }
  buscarmarca2() {
  return this.http.get(this.UrlPrueba);
  }

  // Guardar una marca.
 async guardarmarca(m) {
   //await this.verificar.verificaSaveBrand().subscribe((res:respuesta) => {
     //console.log(res)
   // if (res.resultado != 'existe'){return}
   // if(res.resultado == 'existe'){
       this.http.post('http://localhost:3000/brands' , m.value).subscribe( (res:resivendoMarca) => {console.log(res);
          this.SubMarca.next(res)
         return m.reset()
        
      });
      //} 
    //})
    return this.SubMarca.asObservable()
  }

  //guarda el inicio del sistema.
   async guardainicial(m){
    await  this.verificar.verificaSaveBrand().subscribe(async (res:respuesta) => {
        if (res.resultado != 'existe'){return}
        if(res.resultado == 'existe'){
         await  this.http.post(this.UrlPrueba , m).subscribe( res => {console.log(res)});
          } 
        })
    }
  // Actualizar una marca.
  async actualizarmarca(m: Marca) {
  await  this.verificar.verificarEditBrand().subscribe(async (res:respuesta) => {
      if(res.resultado != 'existe'){return}
      if(res.resultado == 'existe'){
      return await this.http.put(this.UrlPrueba + '/' + m.id , m ).subscribe(res => {
        if(Object.values(res)[0]=='correctamente'){
          alert("Se actualizo correctamente")
        }
      });
      }
      return
    })  
  }

    mostrarporID(id: number) {
        return this.http.get<Marca>(this.UrlPrueba + '/' + id);
    }

    //Datos si esta vacio mandara un true si esta lleno mandara un false.

    datos_vacios(){
      return this.http.get(this.urlverificacion)
    }
}
