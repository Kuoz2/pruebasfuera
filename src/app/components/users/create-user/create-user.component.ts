import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UsuarioService} from "../../../Service/usuario.service";
import {Router} from "@angular/router";
import {Productos} from "../../Modulos/Productos";
import { user} from "../../Modulos/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

userform: FormGroup;
static CreateFormUserGroup(){
    return new FormGroup({
        user: new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
            rut_user: new FormControl(''),
            name_user: new FormControl(''),
            f_lastname: new FormControl(''),
            m_lastname: new FormControl(''),
            p_contacts: new FormControl(''),
            address: new FormControl(''),
            role: new FormControl('')
        }),

    });

}
  constructor(private formBuilder: FormBuilder, private userservi: UsuarioService, private router: Router) {
    this.userform= CreateUserComponent.CreateFormUserGroup();

  }

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

  get email(){return this.userform.get('email')}
  get password(){return this.userform.get('password')}
  get rut_user(){return this.userform.get('rut_user')}
  get name_user(){return this.userform.get('name_user')}
  get f_lastname(){return this.userform.get('f_lastname')}
  get m_lastname(){return this.userform.get('m_lastname')}
  get p_contacts(){return this.userform.get('p_contacts')}
  get address(){return this.userform.get('address')}
  get role(){return this.userform.get('role')}


  createnuevousuario(userform):void {


                   console.log('formularioregistro',userform.value)
     //this.userservi.guardarusuario(userform.value);
  }

}
