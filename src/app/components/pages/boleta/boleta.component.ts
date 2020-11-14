import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../Modulos/Item";
import {HoraActualService, valorReloj} from "../../../Service/hora-actual.service";
import {Observable} from "rxjs";
import PDF417 from "pdf417-generator";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.scss']
})
export class BoletaComponent implements OnInit {

    boletaform: FormGroup;



  constructor( public secoind:HoraActualService, private fm:FormBuilder) {

      this.boletaform = this.fm.group({
          dtecode: new FormControl('',[Validators.required]),
          cantidad: new FormControl('',[Validators.required])
      })

  }

  get dtecode(){return this.boletaform.get('dtecode')}
  get cantdad(){return this.boletaform.get('cantidad')}

  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  segundos: string;
  ngOnInit(): void {
    this.datos$=this.secoind.getInfoReloj();
    this.datos$.subscribe( x => {
      document.getElementById("#horas").innerHTML = String( x.hora );
      document.getElementById("#minutos").innerHTML = x.minutos;
      document.getElementById('#fecha').innerHTML= x.diaymes;
      document.getElementById("#ampm").innerHTML = x.ampm;
      document.getElementById("#segundos").innerHTML = x.segundo;}
    )
    this.boleta()
  }

  @Input() item: Array<Item>
  @Input()totalPrices: number
  boleta() {
    var code = "39"
   this.generate(code)
  }
   generate(code) {
    var code = code
    var canvas = document.getElementById("barcode")
    PDF417.draw(code, canvas)
     // @ts-ignore
     var img = canvas.toDataURL("image/png");
     var imgObject = new Image();
     imgObject.src = img;
     const imagenjpg = imgObject.src.toString()
     document.getElementById('imagen').setAttribute('src',imagenjpg)
  }

    guardarformato(boletaform: FormGroup) {
        console.log("lo de la boleta", boletaform.value)
    }
}
