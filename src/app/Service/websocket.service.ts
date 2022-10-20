import { Observable } from 'rxjs';
import * as io from 'socket.io-client'
import { CookieService } from 'ngx-cookie-service';
import { Injectable, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService     {

  outEvebt: EventEmitter<any> = new EventEmitter();
  callback: EventEmitter<any> = new EventEmitter();
  Marcallback:  EventEmitter<any> = new EventEmitter();
 // url:'http://localhost:5000'
  databd: any
 io = io.io('https://pruebasocketinject.herokuapp.com/', {
  withCredentials: false,
  autoConnect: true,
 })
  constructor(private cooki: CookieService) {
   
  }

  emitir_unescucha(){
    this.io.emit('test')
  
  }
  

  emitodos():Array<object>{
    this.io.on('test2', res => {
      console.log("emitiendo", res)
      this.databd = res
     })
     return  this.databd
  }
}

