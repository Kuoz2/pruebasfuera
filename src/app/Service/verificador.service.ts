import { Injectable } from '@angular/core';
import {AutentificacionService} from "./autentificacion.service";
import { CanActivate, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class VerificadorService implements CanActivate{
  canActivate(){
            if (!localStorage.getItem('ACCESS_TOKEN')){
                    this.route.navigateByUrl('/login')
            }else {

                switch (localStorage.getItem( "ACCESS_ROLE" )) {
                    case 'admin':
                        return true;

                    case "vendedor":
                        this.route.navigateByUrl('/create-voucher')
                    break;
                    case null:
                        this.route.navigateByUrl('/login');
                        break;
                    default:
                        this.route.navigateByUrl('/login')
                        break
                }
            }
            return true
  }


  constructor(private auth: AutentificacionService, private route: Router) {  }

}
