import {Component, OnInit} from '@angular/core';
import {AutentificacionService} from '../../../Service/autentificacion.service';
import {Observable} from 'rxjs';
import {user} from '../../Modulos/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  constructor(private us: AutentificacionService) {
  }
  // tslint:disable-next-line:variable-name
  public user_list = [];
  public usuarios: Observable<user[]>;


  p: any;

  async buscaruser() {
    this.usuarios = this.us.mostrarlosusers();
    console.log(this.usuarios.subscribe(res => console.log(res)))
  }

  ngOnInit() {
    this.buscaruser();
  }

}

