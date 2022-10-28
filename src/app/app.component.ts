
import {  Component, OnInit, Input } from '@angular/core';
import * as devTools from 'devtools-detect';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  @Input() cambiosP:boolean = true
  title = 'paltanes';
constructor( public http: HttpClient
   ) {

}

private isloading: boolean
/*intervalo(){
  const servio =this.categoria.mostrarcategorias().subscribe()
  const http = this.http
setInterval(function() {
        http.get('https://multikart-norte.herokuapp.com/')
    console.log("hola", servio)
}, 1000 * 60 * 20);

}*/
 async ngOnInit() {
// this.intervalo()
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
//this.analizar_token()
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
