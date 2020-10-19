import {Component, OnInit} from '@angular/core';
import {HoraActualService, valorReloj} from "../../Service/hora-actual.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-prueba-reloj',
  templateUrl: './prueba-reloj.component.html',
  styleUrls: ['./prueba-reloj.component.scss']
})
export class PruebaRelojComponent implements OnInit {

  constructor(private horas: HoraActualService) {     }
  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;

  horasasync(){
    this.datos$=this.horas.getInfoReloj();
  }

  ngOnInit() {
    this.horasasync();
    this.datos$.subscribe( x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      window.document.getElementById("#segundos").innerHTML = x.segundo; }
    )
  }

}
