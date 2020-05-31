import { Injectable } from '@angular/core';
import {AutentificacionService} from "./autentificacion.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerificadorService implements CanActivate{
  canActivate(){
            if (!localStorage.getItem('ACCESS_TOKEN') ){
                    this.route.navigateByUrl('/login')
            }
    return true;
  }

  constructor(private auth: AutentificacionService, private route: Router) { }

}
