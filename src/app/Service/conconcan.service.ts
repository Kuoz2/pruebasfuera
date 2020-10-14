import {Injectable} from '@angular/core';

import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConconcanService implements CanActivate{
  constructor(private route: Router) { }


  canActivate():boolean {

    if (!localStorage.getItem('ACCESS_TOKEN')){
      this.route.navigateByUrl('/login');
      return false
    }else {
      this.route.navigateByUrl('/');
      return true
    }
  }

}
