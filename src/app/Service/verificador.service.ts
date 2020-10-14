import {Injectable} from '@angular/core';
import {AutentificacionService} from "./autentificacion.service";
import {ActivatedRoute, CanActivate, Router} from "@angular/router";
import {NavService} from "../shared/service/nav.service";


@Injectable({
  providedIn: 'root'
})
export class VerificadorService implements CanActivate{
  canActivate(){
            if (!localStorage.getItem('ACCESS_TOKEN')){
                    this.route.navigateByUrl('/login')
            }else {

                switch (localStorage.getItem( "ACCESS_ROLE" )) {
                    case 'administrador':
                        return true;

                    case "vendedor":
                        this.route.navigateByUrl('/')
                        return true;
                    case null:
                        this.route.navigateByUrl('/login')

                        break;
                    default:
                        this.route.navigateByUrl('/login')
                        break
                }
            }
            return false
  }



  constructor(private auth: AutentificacionService, private route: Router, private navs: NavService, private acti: ActivatedRoute) {  }

}
