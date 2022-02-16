import { HttpResponse } from '@angular/common/http';

import {  Component, OnInit, Input } from '@angular/core';
import {UsuarioService} from './Service/usuario.service';
import * as devTools from 'devtools-detect';
import hsp from 'heroku-self-ping';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  @Input() cambiosP:boolean = true
  title = 'paltanes';
constructor(private userservi: UsuarioService,

   ) {

}

private isloading: boolean

 async ngOnInit() {
  hsp(process.env.HEROKU_APP_NAME)
  this.isloading = false
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



  //Estara vacio las categorias?
    
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
