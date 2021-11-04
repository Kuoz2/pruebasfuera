import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { findIndex } from 'rxjs/operators';
import {UsuarioService} from './Service/usuario.service';
import * as devTools from 'devtools-detect';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {
  title = 'paltanes';
constructor(private userservi: UsuarioService) {

}



 async ngOnInit() {
      //document.onkeydown = function(){return false}
     // document.oncontextmenu = function(){return false}
    //await this.navegador_habierto()
//await window.addEventListener('devtoolschange', event => {
  //console.log('Is DevTools open:', event.detail.isOpen);
  //console.log('DevTools orientation:', event.detail.orientation);
  //if(event.detail.isOpen == true)
  //{
   // window.location.href = "https://errorconsole.herokuapp.com/"
  //}
//});

this.analizar_token()
  }

  navegador_habierto(){
      if(devTools.isOpen == true){
        window.location.href = "https://errorconsole.herokuapp.com/"
      }
  }
  navegador(){
    if(window.navigator.appCodeName != "chrome"){}
  }


  //Muestra el contenido del token
  analizar_token(){
        var tokentranformado = localStorage.getItem("ACCESS_TOKEN")
        var tranformartoken = tokentranformado.split('.')[1];
        var base64 = tranformartoken.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPlayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

    }
  
}
