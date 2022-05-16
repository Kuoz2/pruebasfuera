import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../components/Modulos/Item';

@Injectable({
  providedIn: 'root'
})
export class CarServicePanaderiaService {

  private cart = new BehaviorSubject<Array<any>>(null); //Bahiorsubject, valor inicial siempre
  public currentDataCart$ = this.cart.asObservable(); //Observable con el valor actual
  constructor() { }

  public changeCart(newData:any){
    //Obtener el valor actual
    console.log("lo que entra en el carro", newData)
    let listCart = this.cart.getValue();
    //Si no es el primer item del carrito
    if(listCart){
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex((obj => obj.id == newData.id));
      let objcod = listCart.findIndex((obj => obj.pcodigo == "1111"))
    if(objIndex != -1 && objcod == -1){
      //Si ya cargamos uno aumentamos su cantidad
      listCart[objIndex].quantity += 1;
    }else {
      listCart.push(newData); //cargamos el carrito
     }
    }
    else {
      //Si es el primer elemento se inicializa
      listCart = [];
      listCart.push(newData);

    }
    this.cart.next(listCart); //Enviamos el valor a todos los observables que esten esuchando al observable
  }
  public removeElementCart(newData:Item){
    //Se obteiene el valor real del carrito
    let listCart = this.cart.getValue();
    //Se busca el item del carrito que se quiere eliminar.
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if (objIndex != -1){
      //seteamos la cantidad en 1 ya que los arrays se modifican los valores por referencia, si volbemos agregar la cantidad se reniciara.
      listCart[objIndex].quantity = 1;
      //Eliminamos el array del carrito
      listCart.splice(objIndex,1 )
    }
    this.cart.next(listCart);//Enviamos el valor a todos los observables que esten escuchando al observable.
  }
}
