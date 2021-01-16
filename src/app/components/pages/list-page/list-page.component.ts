import {Component, OnInit} from '@angular/core';
import {DetalleVoucher} from '../../Modulos/DetalleVoucher';
import {VoucherService} from '../../../Service/voucher.service';
import {Observable} from 'rxjs';
import {XMLBuilder} from 'xmlbuilder2/lib/interfaces';
import {create} from 'xmlbuilder2';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HoraActualService, valorReloj} from '../../../Service/hora-actual.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public selected = [];
    p: any;
  boletas: Observable<DetalleVoucher[]>;
    datos = [];
    cortar;
    closeResult = '';
    rasonSoci = '';
    rutEmisor = '';
    tipodeDoc = '';
    cantidadDoc: number;
    private datos$: Observable<valorReloj>;
    private fecha;
    hora: string;
    fecha_resolucion = '';
    fecha_tributaria = '';
    valortotalneto = [];
    valortotalNetos = [];
    TotalValorIVA = [];
    totalTodo = [];
    numeroresolu: number;
    Nfolionotificacion: number;
    moduloLLave: string;
    exponentellave: string;
    moduloCertificadoLLave: string;
    exponenteCertificadoLLave: string;
    rutEmisiorBoleta: string;

    constructor(private bol: VoucherService, private modalService: NgbModal, public secoind: HoraActualService) {
  }
 async ngOnInit() {
    this.boletas = this.bol.detalledeventa();
    this.informacionesLocal();

    this.datos$ = this.secoind.getInfoReloj();
    this.fecha =  this.datos$.subscribe( x => {
         this.hora = x.diaymes + 'T' + x.hora.toString() + ':' + x.minutos + ':' + x.segundo;
     });
  }

    agregaboleta(da) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const dproducto = [];
        const valornet = [];
        const valorIVA = [];
        const valorNeto = [];
        const valortotal = [];
        this.datos.push( da );
        this.cortar  = this.datos.filter((item, index) => {
                return this.datos.indexOf(item) === index;
            });

        for (const o of this.datos) {
                        dproducto.push(o.product);
                        valornet.push(o.product.pvalor);
                        valorNeto.push(o.product.pvneto);
                        valorIVA.push(o.product.piva);
                        this.valortotalneto = valornet.reduce(reducer);
                        this.TotalValorIVA = valorIVA.reduce(reducer);
                        this.valortotalNetos = valorNeto.reduce(reducer);
                        valortotal.push(this.valortotalneto, this.TotalValorIVA);
                        this.totalTodo = valortotal.reduce(reducer);

                    }
        this.cantidadDoc = this.cortar.length;

    }

    informacionesLocal() {
      this.rasonSoci =  localStorage.getItem('rasonS');
      this.rutEmisor = localStorage.getItem('rutE');
      this.moduloLLave = localStorage.getItem('modulo');
      this.exponentellave = localStorage.getItem('exponente');
      this.moduloCertificadoLLave = localStorage.getItem('tag');
      this.exponenteCertificadoLLave = localStorage.getItem('crypto');
      this.rutEmisiorBoleta = localStorage.getItem('rutEmi');


    }





    crearxml() {
        const xmlStr = `\t\t\t<?xml version="1.0" encoding="iso-8859-1"?>
\t\t\t<LibroCompraVenta xmlns="http://www.sii.cl/SiiDte" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SiiDte="http://www.sii.cl/SiiDte" >
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<EnvioLibro ID="ID_LIBRO_">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Caratula>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RutEmisorLibro>${this.rutEmisor}</RutEmisorLibro>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RutEnvia>${this.rutEmisor}</RutEnvia>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<PeriodoTributario>${this.fecha_tributaria}</PeriodoTributario>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<FchResol>${this.fecha_resolucion}</FchResol>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<NroResol>${this.numeroresolu}</NroResol>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TipoOperacion>VENTA</TipoOperacion>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TipoLibro>Libro de boletas</TipoLibro>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TipoEnvio>${this.tipodeDoc}</TipoEnvio>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<FolioNotificacion>${this.Nfolionotificacion}</FolioNotificacion>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</Caratula>
\t\t\t\t\t\t\t\t\t\t\t\t\t<ResumenPeriodo>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotalesPeriodo>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TpoDoc>39</TpoDoc>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotDoc>${this.cantidadDoc}</TotDoc>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntExe>${this.valortotalNetos}</TotMntExe>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntNeto>${this.valortotalneto}</TotMntNeto>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntIVA>${this.TotalValorIVA}</TotMntIVA>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntTotal>${this.totalTodo}</TotMntTotal>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</TotalesPeriodo>
\t\t\t\t\t\t\t\t\t\t\t\t\t</ResumenPeriodo>
${document.getElementById( 'detallebole' ).innerHTML}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TmstFirma>${this.hora}</TmstFirma>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</EnvioLibro>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<AlforitTranform>SHA1withRSA</AlforitTranform>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<AlgoritDiges>${this.moduloCertificadoLLave}</AlgoritDiges>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ValorDiges>${this.exponenteCertificadoLLave}</ValorDiges>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</Signature>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<SignatureValue>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ValorFrm>15.000</ValorFirm>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</SignatureValue>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<KeyInfo>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<KeyValue>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RSAKeyValue>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Modulo>${this.moduloLLave}</Modulo>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Exponente>${this.exponentellave}</Exponente>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</RSAKeyValue>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</KeyValue>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</KeyInfo>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</LibroCompraVenta>
`;
        let doc: XMLBuilder;
        doc = create( xmlStr ).dec( {version: '1.0', encoding: 'ISO-8859-1'} );
// append a 'baz' element to the root node of the document
        doc.root().ele('baz');
        const xml = doc.end({ prettyPrint: true });


        const filename =  this.fecha_resolucion + '.xml';
        const text =  xml;
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    open(content) {
        this.fecha.unsubscribe();

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
