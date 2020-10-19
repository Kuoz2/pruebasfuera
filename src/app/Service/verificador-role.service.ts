import {Injectable} from '@angular/core';
import {CanActivateChild, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class VerificadorRoleService implements CanActivateChild{

  constructor(private route: Router) { }

  canActivateChild():boolean {
      console.log(localStorage.getItem("ACCESS_ROLE"));
     switch (localStorage.getItem("ACCESS_ROLE")) {
       case 'admin':
         return true;

       case "vendedor":
        return false
     }
  }
}
