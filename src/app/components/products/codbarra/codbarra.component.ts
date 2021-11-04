import { ProductserviceService } from './../../../Service/productservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codbarra',
  templateUrl: './codbarra.component.html',
  styleUrls: ['./codbarra.component.scss']
})
export class CodbarraComponent implements OnInit {
public incodigo:number;
public codigo;
public finial: boolean;
  constructor(private prod: ProductserviceService) { 
    this.finial = false
  }

  ngOnInit(): void {
    this.imprCodBar().finally(() => {this.finial = true})
  }
  imprCodBar(){
    return this.prod.codprod().then(res => {this.codigo = res; console.log(res)}).catch(err=> {console.log("error", err)})
  }

  Verificarcode(){
   
    var codigoEntr = <HTMLInputElement> document.getElementById('number')
    for(const i in this.codigo){
        if(this.codigo[i] != codigoEntr.value){
          //no
        }else{
          //si
        }
    }
   }
}
