import {ChangeDetectionStrategy,Component} from '@angular/core';
import {AutentificacionService} from "./Service/autentificacion.service";
import {UsuarioService} from "./Service/usuario.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'paltanes';

constructor(private userservi: UsuarioService){

}
}
