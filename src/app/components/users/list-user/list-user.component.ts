import {Component, OnInit} from '@angular/core';
import {AutentificacionService} from "../../../Service/autentificacion.service";
import {Observable} from "rxjs";
import {user} from "../../Modulos/User";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public user_list = [];
  public usuarios:Observable<user[]>;
  constructor(private us: AutentificacionService) {
  }

  async buscaruser(){
    this.usuarios = this.us.mostrarlosusers()
  }


  p: any;

  ngOnInit() {
    this.buscaruser()
  }

}

