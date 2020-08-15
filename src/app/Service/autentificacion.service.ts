import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtResponse} from "../components/Modulos/jwt-response";
import {tap} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {user} from "../components/Modulos/User";
import "rxjs-compat/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
    public data: boolean;
  constructor(private http: HttpClient) { }
  AUT_SERVER: string = 'https://marketmini.herokuapp.com/';
  authSubject =  new BehaviorSubject(false);
  private token: string;
  private token_Role: string;

  login(user: user): Observable<JwtResponse>{
       return this.http.post<JwtResponse>(`${this.AUT_SERVER}logi`,user).pipe(

        tap((res: JwtResponse) =>{
          if (!res.jti ) {
          }else {
            this.saveToken(res.jti);
            this.saveRole(res.role);
          }

        })
    );
  }


  logout():void{
    this.token ='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.removeItem("ACCESS_ROLE")
  }



  private saveRole(tokeRole:string):void{
      localStorage.setItem("ACCESS_ROLE",tokeRole);
      this.token_Role = tokeRole;
  }

  private saveToken(token:string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
   // localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getTokenRole():string{
      if (!this.token_Role){
          this.token_Role = localStorage.getItem("ACCESS_ROLE")
      }
      return this.token_Role
  }

  private getToken():string{
    if (!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }

  public mostrar_users():Observable<Array<object>>{
      return this.http.get<Array<object>>(`${'https://marketmini.herokuapp.com/'}mostrar_usuarios`)
  }

}
