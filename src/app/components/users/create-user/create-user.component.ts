import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from "../../../Service/usuario.service";
import {user} from "../../Modulos/User";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    userform: FormGroup;
    emailpinterer: any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    get email(){return this.userform.get('user.email')}
    get rut_user(){return this.userform.get('user.rut_user');}
    get name_user(){return this.userform.get('user.name_user');}
    get f_lastname(){return this.userform.get('user.f_lastname')}
    get m_lastname(){return this.userform.get('user.m_lastname')}
    get p_contacts(){return this.userform.get('user.p_contacts')}
    get address(){return this.userform.get('user.address')}
    get role(){return this.userform.get('user.role')}


    constructor(private userservi:UsuarioService, private formbuilder:FormBuilder) {


        this.userform = formbuilder.group({
            user: this.formbuilder.group( {
                email: ['', [Validators.required, Validators.pattern(this.emailpinterer)] ],
                password: [ '' ],
                rut_user: [ '', [Validators.required] ],
                name_user: [ '', [Validators.required] ],
                f_lastname: [ '', [Validators.required] ],
                m_lastname: [ '', [Validators.required] ],
                p_contacts: [ '', [Validators.required] ],
                address: [ '', [Validators.required] ],
                role: [ '' ]
                    })
                        })

    }
/*
static CreateFormUserGroup(){
    return new FormGroup({
        user: new FormGroup({
            email: new FormControl('',[Validators.required]),
            password: new FormControl('',[Validators.required]),
            rut_user: new FormControl('',[Validators.required]),
            name_user: new FormControl('',[Validators.required]),
            f_lastname: new FormControl('',[Validators.required]),
            m_lastname: new FormControl('',[Validators.required]),
            p_contacts: new FormControl('',[Validators.required]),
            address: new FormControl('',[Validators.required]),
            role: new FormControl('')
        }),

    });

}
*/
//form: FormGroup
  ngOnInit() {


   /*this.form = this.formBuilder.group({
      user: new FormGroup({
           email: [''],
           password: [''],
           rut_user: [''],
           name_user: [''],
           f_lastname: [''],
           m_lastname: [''],
           p_contacts: [''],
           address: ['']
       })


      });*/
  }

        onResetForm(){
            this.userform.reset()
        }

  createnuevousuario(userform):void {
      if (this.userform.valid){
            userform.value.user.password = userform.value.user.rut_user;
          console.log("usuario", userform.value);
         this.userservi.guardarusuario(userform.value);
          this.onResetForm();
      }else {
            console.log(' no valido')
      }

  }

}
