import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from '../components/Modulos/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {  }
    URlusuario = 'https://multikart-norte.herokuapp.com/regi';


 guardarusuario(user: user) {
console.log('servisuer', user );
return  this.http.post<user>(this.URlusuario, user ).subscribe(data => console.error('error', data));
}

guardaradmin(admin) {
     return this.http.post(this.URlusuario, admin).subscribe(data => console.error('error', data));
 }



}



