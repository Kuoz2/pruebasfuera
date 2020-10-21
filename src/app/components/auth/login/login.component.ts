import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AutentificacionService} from "../../../Service/autentificacion.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UsuarioService} from "../../../Service/usuario.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public closeResult: string;
  public usuarios: boolean;

  ngForm: FormGroup;
  static CreateLoginFormGroup(){
    return new FormGroup({
      user: new FormGroup({
        rut_user: new FormControl(''),
        email: new FormControl(''),
          password: new FormControl(''),
          rol:new FormControl('')

      })
    });

  }


  new_admin: FormGroup;

  static  CreateAdmin(){
    return new FormGroup({
      user: new FormGroup({
        email: new FormControl('',[Validators.required]),
        rut_user: new FormControl('',[Validators.required]),
        password: new FormControl(''),
          role:new FormControl('',[Validators.required])
      })
    })
  }

  public guardarnuevoadmin(admin){
   admin.value.user.password = admin.value.user.rut_user.slice(0,10).split(".").join("")
      admin.value.user.role = 'administrador';
        this.serviadmin.guardaradmin(admin.value)
  }

  constructor(private formBuilder: FormBuilder,
              private autentificacion: AutentificacionService,
              private router: Router, private modalService: NgbModal,
              private serviadmin: UsuarioService
  ) {
        this.ngForm = LoginComponent.CreateLoginFormGroup();
        this.new_admin = LoginComponent.CreateAdmin()

  }
  ngOnInit() {
    this.loqumu()
  }


 async loqumu(){
    this.autentificacion.mostrar_users().map(res => res).forEach((x) => {
      let infor:string;
      let destranform:boolean;
      infor = JSON.stringify(x);
      destranform = JSON.parse(infor);
      console.log(destranform)
      this.usuarios = destranform;
    })
  }

  get email(){return this.ngForm.get('email')}
  get password(){return this.ngForm.get('password')}

  onLogin(form):void {
    this.autentificacion.login(form.value).subscribe(res =>{
      if(res.jti !== null){

        this.router.navigateByUrl('')

      }else{
        alert("Contraseña o email invalidos")


      }

    });
  }

//En esta parte se colocan los titulos que saldran en el ninicio de sesion con la informacion.
  owlcarousel = [
    {
      title: "Bienvenido a Paltanes",
      desc: "El sistema actualmente se encuentra en un BETA.",
    },
    {
      title: "Que es PaltAnes",
      desc: "Sistema en beta",
    },
    {
      title: "El servicio",
      desc: "El servicio esta por definir.",
    }
  ];



  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };


  cancelar_venta() {

  }
  open(content) {
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
