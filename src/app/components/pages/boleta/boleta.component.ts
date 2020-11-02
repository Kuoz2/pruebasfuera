import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../Modulos/Item";
import {HoraActualService, valorReloj} from "../../../Service/hora-actual.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.scss']
})
export class BoletaComponent implements OnInit {

  constructor( public secoind:HoraActualService) { }
  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;

  ngOnInit(): void {
    this.datos$=this.secoind.getInfoReloj();
    this.datos$.subscribe( x => {
      document.getElementById("#horas").innerHTML = String( x.hora );
      document.getElementById("#minutos").innerHTML = x.minutos;
      document.getElementById('#dia').innerHTML= x.diadesemana;
      document.getElementById('#fecha').innerHTML= x.diaymes;
      document.getElementById("#ampm").innerHTML = x.ampm;
      document.getElementById("#segundos").innerHTML = x.segundo;}
    )
  }

  @Input() item: Array<Item>

    imprimir() {
      var mywindow = window;
      //mywindow.document.write( document.getElementById( 'ticket' ).innerHTML.trim() );

        // language=HTML
      mywindow.document.write(
            '<head>'+
            '<style type="text/css">' +
            '@page  {size: auto; margin: 0}' +
            'header,footer,aside{display: none }' +
            '</style>' +
            '<title></title></head>'+
            '<div style="font-size: xx-small; border: solid red; text-align: center;"> '
            +'<div style="border: solid blue">' +
            '<div style="border: solid yellow;" >' +
            'Botillería Poma v10' +
            '<br> Calama, Av Huaytiquina #947' +
            ' <br>Rut:' +
            '<br>BOLETA ELECTRONICA No.' +
            '<br>23/08/2017 08:22 a.m.' +
            '</div>' +
            '<table style="border: solid; margin: 0 auto;">' +
            '<thead style="font-size: xx-small; " style="border: solid">' +
            '<tr>' +
            '<th >IVA</th>' +
            '<th >Producto</th>' +
            '<th >$$</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody style="font-size: xx-small; style="border: solid"" >' +
            '<tr>' +
            '<td >1.00</td>' +
            '<td>Cristal</td>' +
            '<td>$1000</td>' +
            '</tr>' +
            '<tr>' +
            '<td>2.00</td>' +
            '<td>Royal</td>' +
            '<td>$4000</td>' +
            '</tr>' +
            '<tr>' +
            '<td>3.00</td>' +
            '<td>Baltica</td>' +
            '<td>$5000</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>'
            +'</div>'
            +'</div>'

            )


      setTimeout( function () {

        mywindow.print()
      }, 100)

        return false
    }
}
