import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtResponse} from "../components/Modulos/jwt-response";
import {tap} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {user} from "../components/Modulos/User";
import "rxjs-compat/add/operator/map";
import {JwtHelperService} from "@auth0/angular-jwt";

const helper = new JwtHelperService()
@Injectable({
  providedIn: 'root'
})

export class AutentificacionService {

    // @ts-ignore
    private loggedIn = new BehaviorSubject<boolean>(false);

    public data: boolean;
  constructor(private http: HttpClient) { this.consultaToken()}
  AUT_SERVER: string = 'https://marketmini.herokuapp.com/';
  authSubject =  new BehaviorSubject(false);
  private token: string;
  private token_Role: string;
  private token_User: string;
  private token_Namber: string;

  get isloggedIn():Observable<boolean>{
      return this.loggedIn.asObservable()
  }



    login(user: user): Observable<JwtResponse>{
       return this.http.post<JwtResponse>(`${this.AUT_SERVER}logi`,user).pipe(

        tap((res: JwtResponse) =>{
          if (!res.jti ) {
          }else {
            this.saveToken(res.jti);
            this.saveRole(res.role);
            this.saveUser(res.id);
            this.saveNamber(res.name_user)
              this.loggedIn.next(true)

          }

        })
    );
  }


  logout():void{
    this.token ='';
    localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("EXPIRES_IN");
      localStorage.removeItem("ACCESS_ROLE")
      localStorage.removeItem("ACCES_USER")
      localStorage.removeItem("ACCESS_NAMBER")
      this.loggedIn.next(false)
  }

private consultaToken(){
      const userToken = localStorage.getItem('ACCESS_TOKEN');
      const expiretoken= helper.isTokenExpired(userToken);
      expiretoken ? this.logout() : this.loggedIn.next(true)

}

  private saveRole(tokeRole:string):void{
      localStorage.setItem("ACCESS_ROLE",tokeRole);
      this.token_Role = tokeRole;
  }

  private saveNamber(tokenNamber:string):void{
      localStorage.setItem("ACCESS_NAMBER", tokenNamber)
      this.token_Namber = tokenNamber
  }

  private saveToken(token:string):void{
      localStorage.setItem("ACCESS_TOKEN", token);
   // localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private saveUser(tokenUser: string):void{
      localStorage.setItem("ACCES_USER", tokenUser)
      this.token_User = tokenUser
  }


  public getTokenRole():string{
      if (!this.token_Role){
          this.token_Role = localStorage.getItem("ACCESS_ROLE")
      }
      return this.token_Role
  }

  private getTokenNamber():string{
      if(!this.token_Namber){
          this.token_Namber = localStorage.getItem("ACCESS_NAMBER")
      }
      return this.token_Namber
  }

  private getTokenUser():string{
      if (!this.token_User) {
          this.token_User = localStorage.getItem("ACCES_USER")

      }
      return this.token_User
  }

  private getToken():string{
    if (!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }

  public mostrar_users():Observable<user[]>{
      return this.http.get<user[]>(`${'https://marketmini.herokuapp.com/'}mostrar_usuarios`)
  }

  public mostrarlosusers():Observable<user[]>{
      return this.http.get<user[]>(`${'https://marketmini.herokuapp.com/'}mostrar_los_usuarios`)
    }


}
