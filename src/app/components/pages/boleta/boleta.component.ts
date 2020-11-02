import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.scss']
})
export class BoletaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
