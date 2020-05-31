import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UsuarioService} from "../../../Service/usuario.service";
import {Router} from "@angular/router";
import {AutentificacionService} from "../../../Service/autentificacion.service";
import {JwtResponse} from "../../Modulos/jwt-response";
import {user} from "../../Modulos/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup;
  static CreateLoginFormGroup(){
    return new FormGroup({
      user: new FormGroup({
          email: new FormControl(''),
          password: new FormControl('')
      })
    });

  }

  constructor(private formBuilder: FormBuilder, private autentificacion: AutentificacionService, private router: Router) {
        this.ngForm = LoginComponent.CreateLoginFormGroup()
  }
  ngOnInit() {

  }

  get email(){return this.ngForm.get('email')}
  get password(){return this.ngForm.get('password')}

  onLogin(form):void {
    console.log('logi', form.value)
    this.autentificacion.login(form.value).subscribe(res =>{
      if(res.jti !== null){
        this.router.navigateByUrl('/dashboard/default')

      }else{
        alert("Contraseña o email invalidos")


      }

    });
  }
  navigate() {
    this.router.navigateByUrl('/dashboard/default');
  }

  owlcarousel = [
    {
      title: "Welcome to Multikart",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome to Multikart",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome to Multikart",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    }
  ]



  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };


  createRegisterForm() {

  }




}
