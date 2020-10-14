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
  //Aqui se almacenara lo que se este mandando desde el componente hermano
  @Input()encontrandoApp: string = "";
  //Aqui mandaremos la categoria para filtrar los productos
  @Input()encontrandoCategoriasApp:string = "";
  constructor(private carservice:CartServiceService, private productos_car:ProductserviceService, private sanitizar:DomSanitizer) {
  }

  ngOnInit() {
      this.listaproductoAsync()
  }

  listaproductoAsync() {
    this.Productos_lista = this.productos_car.item_productos();
  }

  PurificandoLink(dato):SafeUrl{
    return this.sanitizar.bypassSecurityTrustUrl(dato)
  }



  addCart(product: Item) {
    const data = product;
    const elemento = {quantity: 1};

      console.log("data", data.quantity)
    if (data.quantity >= elemento.quantity){
      this.carservice.changeCart(data)
    }else {
      const cambio = Object.assign( product, elemento )
      this.carservice.changeCart(cambio)
  }
  }

}
