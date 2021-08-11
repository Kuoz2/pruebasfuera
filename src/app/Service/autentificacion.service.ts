import {Injectable} from '@angular/core';
import {
    HttpClient,
    HttpHeaders,

} from '@angular/common/http';
import {JwtResponse} from '../components/Modulos/jwt-response';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {user} from '../components/Modulos/User';
import 'rxjs-compat/add/operator/map';
import {JtwResponsei} from '../components/Modulos/jtw-responsei';
import {Http2ServerResponse} from 'http2';
import {Router} from '@angular/router';

// const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})

export class AutentificacionService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    public data: boolean;
  constructor(private http: HttpClient, private router: Router) { }
  AUT_SERVER = 'https://marketmini.herokuapp.com/';
  authSubject =  new BehaviorSubject(false);
  private token: string;
    // tslint:disable-next-line:variable-name
  private token_Role: string;
  private token_User: string;
  private token_Namber: string;

  get isloggedIn(): Observable<boolean> {
      return this.loggedIn.asObservable();
  }



    // tslint:disable-next-line:no-shadowed-variable
    login(user: user) {
    const headers =  HttpHeaders.prototype;
    return  this.http.post<JtwResponsei>(`${this.AUT_SERVER}logi`, user, {observe: 'response',  headers})
            .pipe(tap((ing) => {
                if (ing.body.jti != null) {
                    this.saveRole( ing.body.role );

                } else {
                }
            }))
            .subscribe( (res) => {
                console.log(res)
                const token = res.headers.get('authorization')
                console.log(token)
                if (token == null) {
                    alert( 'No tiene permiso para ingresar.' );
                } else {
                    this.saveToken( token );
                    if (res.body.role != null && res.body.jti !== null) {
                        this.router.navigateByUrl( '' );
                    } else {
                        alert( 'Contraseña o email invalidos' );
                    }
                }
        } );


   // .pipe(
     //       tap((res) => {
       //         if (res.body.jti !== null) {
         //           this.saveToken(res.body.jti, res.body.jti);
           //         this.saveRole(res.body.role);
                    //    if (!res.jti ) {
                    // }else {
                    // this.saveToken(res.jti);
                    //  this.loggedIn.next(true)
                    // this.saveRole(res.role);
                    // this.saveUser(res.id);
                    // this.saveNamber(res.name_user)

            //    }

          //  })
        // )
  }


  logout(): void {
      const identiFicador = localStorage.getItem('idc');
      console.log('identifiacion', identiFicador);
      this.http.delete(`${this.AUT_SERVER}logout`);
      this.token = '';
      localStorage.removeItem('ACCESS_TOKEN');
     // this.loggedIn.next(true);
      localStorage.removeItem('EXPIRES_IN');
      localStorage.removeItem('ACCESS_ROLE');
      localStorage.removeItem('ACCES_USER');
      localStorage.removeItem('ACCESS_NAMBER');

  }

// private consultaToken(){
  //    const userToken = localStorage.getItem('ACCESS_TOKEN');
    //  const expiretoken= helper.isTokenExpired(userToken);
    //  expiretoken ? this.logout() : this.loggedIn.next(false)

// }

  private saveRole(tokeRole: string): void {
      localStorage.setItem('ACCESS_ROLE', tokeRole);
      this.token_Role = tokeRole;
  }

  private saveNamber(tokenNamber: string): void {
      localStorage.setItem('ACCESS_NAMBER', tokenNamber);
      this.token_Namber = tokenNamber;
  }

  private saveToken(token: string): void {
      localStorage.setItem('ACCESS_TOKEN', token);
      this.token = token;
  }

  private saveUser(tokenUser: string): void {
      localStorage.setItem('ACCES_USER', tokenUser);
      this.token_User = tokenUser;
  }


  public getTokenRole(): string {
      if (!this.token_Role) {
          this.token_Role = localStorage.getItem('ACCESS_ROLE');
      }
      return this.token_Role;
  }

  private getTokenNamber(): string {
      if (!this.token_Namber) {
          this.token_Namber = localStorage.getItem('ACCESS_NAMBER');
      }
      return this.token_Namber;
  }

  private getTokenUser(): string {
      if (!this.token_User) {
          this.token_User = localStorage.getItem('ACCES_USER');

      }
      return this.token_User;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

  public mostrar_users(): Observable<user[]> {
      return this.http.get<user[]>(`${'https://marketmini.herokuapp.com/'}mostrar_usuarios`);
  }

  public mostrarlosusers(): Observable<user[]> {
      return this.http.get<user[]>(`${'localhost:3000/mostrar_los_usuarios'}`);
    }


}
