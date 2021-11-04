import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class respuesta{
  resultado: any;
}
export class VerificarTokenService {
  public URLPROBANDOJTI = 'https://multikart-norte.herokuapp.com/categories/verificador_jti'
  public VsaveProdu = 'https://multikart-norte.herokuapp.com/products/verif_befores_save'
  public VupdateProdu = 'https://multikart-norte.herokuapp.com/products/verif_before_update'
  public verificaCate = 'https://multikart-norte.herokuapp.com/categories/verif_save_category'
  public verificaSbrand='https://multikart-norte.herokuapp.com/brands/verif_befores_save_brand'

 private informerespuesta = new Subject<respuesta>()
  constructor(private http: HttpClient) { }
  validacion: any;
  jit:respuesta
  informacion = localStorage.getItem('ACCESS_JTLI')

  // Verificacion de la jti.
  probandojti(){
   this.http.post(this.URLPROBANDOJTI, this.informacion).subscribe(v => {
     console.log("jti", v)
        this.jit = {
          resultado: v
        };
    })
  }
  VerficSaveProd(){
   return   this.http.post(this.VsaveProdu, this.informacion)
   
  }

  VerificarUpdateProd(){
    return this.http.post(this.VupdateProdu, this.informacion)
  }

  verificarSaveCate(){
    return this.http.post(this.verificaCate, this.informacion)
  }
 
  verificaSaveBrand(){
    return this.http.post(this.verificaSbrand, this.informacion)
  }
}

