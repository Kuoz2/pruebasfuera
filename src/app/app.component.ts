import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsuarioService} from './Service/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {
  title = 'paltanes';

constructor(private userservi: UsuarioService) {

}



  ngOnInit(): void {
  }
}
