import { date_expiration } from './../../../Modulos/Productos';
import {Component, Input, OnInit} from '@angular/core';
import {CartServiceService} from "../../../../Service/cart-service.service";
import {Productos} from "../../../Modulos/Productos";
import {ProductserviceService} from "../../../../Service/productservice.service";
import {Item} from "../../../Modulos/Item";
import {Observable} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

class IItem {
}

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  Productos_lista: Observable<Productos[]>;
  Productos_sin_id;
  isloading: boolean;
  //Aqui se almacenara lo que se este mandando desde el componente hermano
  @Input()encontrandoApp: string = "";
  //Aqui mandaremos la categoria para filtrar los productos
  @Input()encontrandoCategoriasApp:string = "";
  constructor(private carservice:CartServiceService, 
    private productos_car:ProductserviceService,
     private sanitizar:DomSanitizer) {
       this.encontrandoApp
  }
   ngOnInit() {
    this.isloading = false

      this.listaproductoAsync()
      this.listaproductossinid()
  }
  listaproductoAsync() {
    this.Productos_lista = this.productos_car .item_productos();
  }
  listaproductossinid(){
  return this.productos_car._buscandolasfechasin_productid().then((res) => {
    this.Productos_sin_id = res
  }).catch((err) => {console.log('Se, encontro un error', err)}).finally(() => {this.isloading = true})

console.log('date expiration', this.Productos_sin_id)
  }
  PurificandoLink(dato):SafeUrl{
    return this.sanitizar.bypassSecurityTrustUrl(dato)
  }
  addCart(product: any) {
    delete product.sinventario
    delete product.sinventario2
    console.log('lo que entra', product)

    if(product.pcodigo){
      Object.assign(product, {sinventario:true})
    }else{
      Object.assign(product, {sinventario2:false})
    }
    const data = product;
    const elemento = {quantity: 1};
    if (data.quantity >= elemento.quantity){
      this.carservice.changeCart(data)
    }else {
      const cambio = Object.assign( product, elemento )
      this.carservice.changeCart(cambio)
  }
  }

}
