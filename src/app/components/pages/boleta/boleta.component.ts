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
          RutEmpresa: new FormControl('',[Validators.required]),
          FechaAutori: new FormControl('',[Validators.required]),
          RutReceptor: new FormControl('', [Validators.required]),
          CantidadDesde: new FormControl('', [Validators.required]),
          CantidadHasta: new FormControl('',[Validators.required]),
          numeroFolio: new FormControl('', [Validators.required]),
          TipoDocumento: new FormControl('',[Validators.required]),
          moduloLLave: new FormControl('',[Validators.required]),
          ExponenteLLave: new FormControl('', [Validators.required]),
          identidadLLave: new FormControl('', [Validators.required]),
          firmaTimbre: new FormControl('',[Validators.required]),
          rasonSocial: new FormControl('', [Validators.required])
      });

  }
    get RutEmpresa(){return this.boletaform.get('RutEmpresa')}
    get fechaEmision(){return this.boletaform.get('fechaEmision')}
    get RutReceptor(){return this.boletaform.get('RutReceptor')}
    get CantidadDesde(){return this.boletaform.get('CantidadDesde')}
    get CantidadHasta(){return this.boletaform.get('CantidadHasta')}
    get numeroFolio(){return this.boletaform.get('numeroFolio')}
    get TipoDocumento(){return this.boletaform.get('TipoDocumento')}
    get moduloLLave(){return this.boletaform.get('moduloLLave')}
    get ExponenteLLave(){return this.boletaform.get('ExponenteLLave')}
    get identidadLLave(){return this.boletaform.get('identidadLLave')}
    get firmaTimbre(){return this.boletaform.get('firmaTimbre')}
    get rasonSocial(){return this.boletaform.get('rasonSocial')}


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
    this.generate();
      this.sumariva();

  }

  @Input() item: Array<Item>
  @Input()totalPrices: number

    generate() {
    // language=HTML
        var code = "<TED version='1.0'><DD>" +
            "<RE>17246370-3</RE>" +
            "<TD>39</TD>" +
            "<F>122</F>" +
            "<FE>2002-06-11</FE>" +
            "<RR>17246370-3</RR>" +
            "<RSR>Sin infomacion</RSR>" +
            "<MNT>50000</MNT>" +
            "<CAF version='1.0'>" +
            "<DA>" +
            "<RE>11111111-1</RE>" +
            "<RS>Ejemplo S.A.</RS>" +
            "<TD>39</TD>" +
            "<RNG>" +
            "<D>50</D>" +
            "<H>101</H>" +
            "</RNG>" +
            "<FA>2002-06-10</FA><RSAPK>" +
            "<M>AMPa7mxz8ysTRazehr5/Oiau98/lku7y2twwndI/142ds54aWjqd </M>" +
            "<E>A2/B</E>" + "</RSAPK><IDK> 1</IDK>" + "</DA>" +
            "<FRMT algoritmo=”SHA1RSA”>fds5f4ds65f4qa65sf4as65f45g61f5gfdg45af4qfw64fw+65sdf1sdf5w1</FRMT>" +
            "<TSTED>2002-06-11T07:34:15</TSTED>" +
            "</DD><FRMT algoritmo=”SHA1withRSA”>GkdhiwT5a4…09UjhGfsR7l/=</FRMT>" +
        "</TED>";

    var canvas = document.getElementById("barcode");

        var imgObject = new Image();
        PDF417.draw(code, canvas);
        // @ts-ignore
        imgObject.src = canvas.toDataURL( "image/png" );
     const imagenjpg = imgObject.src.toString();
     document.getElementById('imagen').setAttribute('src',imagenjpg)
  }



  sumariva(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const iva = [];
        if (this.item != []) {
            for (let d in this.item) {
                iva.push( this.item[d].piva * this.item[d].quantity )
            }
            this.totaliva = iva.reduce( reducer )
        }
  }

    guardarformato(boletaform) {
    }




}
