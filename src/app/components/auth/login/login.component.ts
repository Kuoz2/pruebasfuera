import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AutentificacionService} from '../../../Service/autentificacion.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UsuarioService} from '../../../Service/usuario.service';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private autentificacion: AutentificacionService,
              private modalService: NgbModal,
              private serviadmin: UsuarioService,
              private ngxspinner: NgxSpinnerService
  ) {
        this.ngForm = LoginComponent.CreateLoginFormGroup();
        this.new_admin = LoginComponent.CreateAdmin();

  }

  get email() {return this.ngForm.get('email'); }
  get password() {return this.ngForm.get('password'); }

  public closeResult: string;
  public usuarios: boolean;

  ngForm: FormGroup;


  new_admin: FormGroup;

// En esta parte se colocan los titulos que saldran en el ninicio de sesion con la informacion.
  owlcarousel = [
    {
      title: 'Bienvenido al beta',
      desc: ' Sistema en contrucción los terminos de uso y de entrega de información referente a cambios, se encuentran deslizando o precionando los circulos debajo de esta información.',
    },
    {
      title: '¿Cómo informar?',
      desc: ' Los cambios que desee realizar deben ser informados mediante whatsapp y por correo a s.palta.a@hotmail.com o reuniones, señalando en que parte del sistema se deben realizar dichos cambios.',
    },
    {
      title: 'Servicio en el beta',
      desc: 'El sistema permite emitir boleta electrónica, pero no apto para el envió al SII y puede ingresar cualquier información no ilícita con un tope máximo de 10gb. Se promueve el no uso de información personal o real de la persona o producto al sistema y su uso es solo de ayuda para la confección del producto final.',
    },
    {
      title: 'Condiciones de uso',
      desc: 'La beta es solo para uso de pre-contrucción final. Por ende cualquier perdida económica o de algún otro factor por el mal uso indicadas en (servicio en beta), sera responsabilidad del usuario, los encargados del sistema no tendran responsabilidad de las perdidas y al finalizar el uso de esta beta la información ingresada sera eliminada.'
    },
    {
      title: 'Antes de iniciar',
      desc: 'Como correo coloque da@da.cl y como contraseña ingrese 11111111'
    }

  ];



  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };
  static CreateLoginFormGroup() {
    return new FormGroup({
      user: new FormGroup({
        rut_user: new FormControl(''),
        email: new FormControl(''),
          password: new FormControl(''),
          rol: new FormControl('')

      })
    });

  }

  static  CreateAdmin() {
    return new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required]),
        rut_user: new FormControl('', [Validators.required]),
        password: new FormControl(''),
          role: new FormControl('', [Validators.required])
      })
    });
  }

  public guardarnuevoadmin(admin) {
      console.log(admin.value.user.rut_user.slice(0, 10).split('.').join(''));
      admin.value.user.password = admin.value.user.rut_user.slice(0, 10).split('.').join('');
      admin.value.user.role = 'administrador';
      this.serviadmin.guardaradmin(admin.value);
  }

  async ngOnInit() {
    this.ngxspinner.show();
    this.loqumu();
    this.ngxspinner.hide();
  }


 async loqumu() {
    this.autentificacion.mostrar_users().subscribe(
        x => {

             const data = Object.values( x[0]);
                // @ts-ignore
             this.usuarios = data[0];
             if (this.usuarios === false) {

            }

            
        }

 );
  }

  onLogin(form): void {
      console.log(form.value);
      this.autentificacion.login( form.value );

  }

  cancelar_venta() {

  }
  open(content) {
      console.log(content);
      console.log();
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
