import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerificadorRolService implements CanActivate{

  constructor(private route: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const rol = localStorage.getItem( "ACCESS_ROLE" );
      if (!rol) {
          return false
      } else {

          switch (rol) {
              case 'admin':
                  return true;
              case 'vendedor':
                  this.route.navigateByUrl( 'create-voucher' );
                  break;
          }
      }
  }
}
