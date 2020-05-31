import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {JwtResponse} from "../components/Modulos/jwt-response";
import {tap} from "rxjs/operators";
import {Observable, BehaviorSubject} from "rxjs";
import {HttpInterceptor} from "@angular/common/http";
import {user} from "../components/Modulos/User";
import {CanActivate} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor(private http: HttpClient) { }
  AUT_SERVER: string = 'http://localhost:3000/';
  authSubject =  new BehaviorSubject(false);
  private token: string;


  login(user: user): Observable<JwtResponse>{
       return this.http.post<JwtResponse>(`${this.AUT_SERVER
    }logi`,user).pipe(

        tap((res: JwtResponse) =>{
          console.log('res',res)
          if (!res.jti ) {
          }else {
            this.saveToken(res.jti)
          }

        })
    );
  }




  logout():void{
    this.token ='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN")
  }

  private saveToken(token:string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
   // localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken():string{
    if (!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }

}
