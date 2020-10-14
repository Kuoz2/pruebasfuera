import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutentificacioncancanService implements CanActivate{

  constructor(private route: Router) { }

  canActivate(){


    if (!localStorage.getItem('ACCESS_TOKEN')) {
      this.route.navigateByUrl( '/login' )
    }
    return true
  }
}
