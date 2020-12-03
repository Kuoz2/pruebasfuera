import {Component, OnInit} from '@angular/core';
import {DetalleVoucher} from "../../Modulos/DetalleVoucher";
import {VoucherService} from "../../../Service/voucher.service";
import {Observable} from "rxjs";
import {XMLBuilder} from "xmlbuilder2/lib/interfaces";
import {create} from "xmlbuilder2";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public selected = [];
    p: any;
  boletas:  Observable<DetalleVoucher[]>;
    datos = [];
  constructor(private bol:VoucherService) {
  }
 async ngOnInit() {
    this.boletas = this.bol.detalledeventa()

  }

    agregaboleta(da) {
     this.datos.push(da)

        console.log(this.datos)
    }


    crearxml(){
        const xmlStr = '<?xml version="1.0" encoding="iso-8859-1"?>\n' +
            '<LibroCompraVenta xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sii.cl/SiiDte LibroCV_v10.xsd" version="1.0"\n' +
            '    xmlns="http://www.sii.cl/SiiDte">\n' +
            '    <EnvioLibro ID="ID_LIBRO_">\n' +
            '        <Caratula>\n' +
            '            <RutEmisorLibro>11111111-1</RutEmisorLibro>\n' +
            '            <RutEnvia>22222222-2</RutEnvia>\n' +
            '            <PeriodoTributario>2020-09</PeriodoTributario>\n' +
            '            <FchResol>2020-08-31</FchResol>\n' +
            '            <NroResol>0</NroResol>\n' +
            '            <TipoOperacion>VENTA</TipoOperacion>\n' +
            '            <TipoLibro>ESPECIAL</TipoLibro>\n' +
            '            <TipoEnvio>TOTAL</TipoEnvio>\n' +
            '            <FolioNotificacion>1</FolioNotificacion>\n' +
            '        </Caratula>\n' +
            '        <ResumenPeriodo>\n' +
            '            <TotalesPeriodo>\n' +
            '                <TpoDoc>33</TpoDoc>\n' +
            '                <TotDoc>4</TotDoc>\n' +
            '                <TotMntExe>49241</TotMntExe>\n' +
            '                <TotMntNeto>18448292</TotMntNeto>\n' +
            '                <TotMntIVA>3505175</TotMntIVA>\n' +
            '                <TotMntTotal>22002708</TotMntTotal>\n' +
            '            </TotalesPeriodo>\n' +
            '            <TotalesPeriodo>\n' +
            '                <TpoDoc>61</TpoDoc>\n' +
            '                <TotDoc>3</TotDoc>\n' +
            '                <TotMntExe>35523</TotMntExe>\n' +
            '                <TotMntNeto>7157915</TotMntNeto>\n' +
            '                <TotMntIVA>1360004</TotMntIVA>\n' +
            '                <TotMntTotal>8553442</TotMntTotal>\n' +
            '            </TotalesPeriodo>\n' +
            '            <TotalesPeriodo>\n' +
            '                <TpoDoc>56</TpoDoc>\n' +
            '                <TotDoc>1</TotDoc>\n' +
            '                <TotMntExe>0</TotMntExe>\n' +
            '                <TotMntNeto>0</TotMntNeto>\n' +
            '                <TotMntIVA>0</TotMntIVA>\n' +
            '                <TotMntTotal>0</TotMntTotal>\n' +
            '            </TotalesPeriodo>\n' +
            '        </ResumenPeriodo>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>33</TpoDoc>\n' +
            '            <NroDoc>10</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntNeto>1422876</MntNeto>\n' +
            '            <MntIVA>270346</MntIVA>\n' +
            '            <MntTotal>1693222</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>33</TpoDoc>\n' +
            '            <NroDoc>11</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntNeto>10446492</MntNeto>\n' +
            '            <MntIVA>1984833</MntIVA>\n' +
            '            <MntTotal>12431325</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>33</TpoDoc>\n' +
            '            <NroDoc>12</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntExe>35523</MntExe>\n' +
            '            <MntNeto>2032682</MntNeto>\n' +
            '            <MntIVA>386210</MntIVA>\n' +
            '            <MntTotal>2454415</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>33</TpoDoc>\n' +
            '            <NroDoc>13</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntExe>13718</MntExe>\n' +
            '            <MntNeto>4546242</MntNeto>\n' +
            '            <MntIVA>863786</MntIVA>\n' +
            '            <MntTotal>5423746</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>61</TpoDoc>\n' +
            '            <NroDoc>10</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntNeto>0</MntNeto>\n' +
            '            <MntTotal>0</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>61</TpoDoc>\n' +
            '            <NroDoc>11</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntNeto>5125233</MntNeto>\n' +
            '            <MntIVA>973794</MntIVA>\n' +
            '            <MntTotal>6099027</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>61</TpoDoc>\n' +
            '            <NroDoc>12</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntExe>35523</MntExe>\n' +
            '            <MntNeto>2032682</MntNeto>\n' +
            '            <MntIVA>386210</MntIVA>\n' +
            '            <MntTotal>2454415</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <Detalle>\n' +
            '            <TpoDoc>56</TpoDoc>\n' +
            '            <NroDoc>10</NroDoc>\n' +
            '            <TasaImp>0.19</TasaImp>\n' +
            '            <FchDoc>2020-09-01</FchDoc>\n' +
            '            <RUTDoc>66666666-6</RUTDoc>\n' +
            '            <RznSoc>Razon Social de Cliente</RznSoc>\n' +
            '            <MntNeto>0</MntNeto>\n' +
            '            <MntTotal>0</MntTotal>\n' +
            '        </Detalle>\n' +
            '        <TmstFirma>2020-09-01T11:17:16</TmstFirma>\n' +
            '    </EnvioLibro>\n' +
            '    <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">...</Signature>\n' +
            '</LibroCompraVenta>'
        let doc: XMLBuilder;
        doc = create( xmlStr ).dec( {version: "1.0",encoding: 'ISO-8859-1'} );
// append a 'baz' element to the root node of the document
        doc.root().ele('baz');
        const xml = doc.end({ prettyPrint: true });


        let filename = 'people.xml';
        let text =  xml
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}
