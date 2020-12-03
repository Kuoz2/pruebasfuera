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
    totaliva: number = 0;
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

    );
    this.boleta();
      this.sumariva();

  }

  @Input() item: Array<Item>
  @Input()totalPrices: number
  boleta() {
    var code =

        '<CAF version="1.0">' +
        '<DA>' +
        '<RE>11111111-1</RE>\n' +
        '<RS>Ejemplo S.A.</RS>\n' +
        '<TD>39</TD>\n' +
        '<RNG>\n' +
        '<D>50</D>\n' +
        '<H>101</H>\n' +
        '</RNG>\n' +
        '<FA>2002-06-10</FA>\n' +
        '<RSAPK>\n' +
        '<M>AMPa7mxz8ysTRazehr5/Oiau98/ ... lku7y2twwndI/142ds54aWjqd </M>\n' +
        '<E>A2.../B</E>\n' +
        '</RSAPK>\n' +
        '<IDK> 1</IDK>' +
        '</DA>' +
        '<FRMA algoritmo ="SHA1withRSA">' +
        'fds5f4ds65f4qa65sf4as65f45g61f5gfdg45af4qfw64fw+65sdf1sdf5w1' +
        '</FRMA>' +
        '</CAF>' +
        '</TED>';
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
     const imagenjpg = imgObject.src.toString();
     document.getElementById('imagen').setAttribute('src',imagenjpg)
  }



  sumariva(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const iva = []
      for (let d in this.item){
            iva.push(this.item[d].piva * this.item[d].quantity)
      }
      this.totaliva = iva.reduce(reducer)
  }

    guardarformato(boletaform: FormGroup) {
        console.log("lo de la boleta", boletaform.value)
    }




}
