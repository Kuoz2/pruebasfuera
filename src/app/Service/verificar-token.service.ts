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
  private verificarTax = 'https://multikart-norte.herokuapp.com/taxes/verif_befores_save_taxe'
  private verificarProvi = 'https://multikart-norte.herokuapp.com/providers/verif_befores_save_provi'
  private verificaEBrand = 'https://multikart-norte.herokuapp.com/brands/verif_before_update_brand'
  private verificaECate = 'https://multikart-norte.herokuapp.com/categories/verif_before_update_category'
  private vericaEImp = 'https://multikart-norte.herokuapp.com/taxes/verif_before_update_taxe'
  private mediopago= 'https://multikart-norte.herokuapp.com/half_payments/verif_befores_save_half'
  private verificarVoucherDetails= 'https://multikart-norte.herokuapp.com/voucher_details/verif_befores_save_d_voucher'

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
    console.log(this.informacion)
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
  verificarSaveTax(){
    return this.http.post(this.verificarTax, this.informacion)
  }
  verificarSaveProv(){
    return this.http.post(this.verificarProvi, this.informacion)
  }
  verificarSaveMedio(){
    return this.http.post(this.mediopago, this.informacion)
  }
  verificarEditBrand(){
    return this.http.post(this.verificaEBrand, this.informacion)
  }
  verificarEditCate(){
    return this.http.post(this.verificaECate, this.informacion)
  }
  verificarEditImp(){
    return this.http.post(this.vericaEImp, this.informacion)
  }
  verificarSaveVouchDetai(){
    return this.http.post(this.verificarVoucherDetails, this.informacion)
   }
  
}

