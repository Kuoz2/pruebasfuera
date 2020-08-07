import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {AutentificacionService} from "../../../Service/autentificacion.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef;
  ngAfterViewInit(): void {
    this.container.nativeElement.addEventListener('scroll', (evt: any) => {
      console.log('scroll', evt)
    }, {passive: true})
  }

  ngForm: FormGroup;
  static CreateLoginFormGroup(){
    return new FormGroup({
      user: new FormGroup({
          email: new FormControl(''),
          password: new FormControl('')
      })
    });

  }
  new_admin: FormGroup;

  constructor(private formBuilder: FormBuilder, private autentificacion: AutentificacionService, private router: Router) {
        this.ngForm = LoginComponent.CreateLoginFormGroup()
  }
  ngOnInit() {

  }

  get email(){return this.ngForm.get('email')}
  get password(){return this.ngForm.get('password')}

  onLogin(form):void {
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
//En esta parte se colocan los titulos que saldran en el ninicio de sesion con la informacion.
  owlcarousel = [
    {
      title: "Bienvenido a MiMinimarket",
      desc: "Lorema Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Que es PaltAnes",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "El servicio",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    }
  ]



  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };


  cancelar_venta() {

  }

  guardarAdmin() {

  }
}
