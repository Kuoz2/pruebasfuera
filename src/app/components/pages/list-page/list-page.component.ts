import {Component, OnInit} from '@angular/core';
import {DetalleVoucher} from "../../Modulos/DetalleVoucher";
import {VoucherService} from "../../../Service/voucher.service";
import {Observable} from "rxjs";
import {XMLBuilder} from "xmlbuilder2/lib/interfaces";
import {create} from "xmlbuilder2";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HoraActualService, valorReloj} from "../../../Service/hora-actual.service";

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
    cortar;
    closeResult = '';
    datoscategory = [];
    rasonSoci:string= '';
    rutEmisor:string='';
    tipodeDoc:string='';
    cantidadDoc: number;
    private datos$: Observable<valorReloj>;
    private fecha;
    hora: string;
    fecha_resolucion: string;
    fecha_tributaria: string;
    valortotalneto = [];
    TotalValorIVA= [];
    totalvalorexent = [];
    totalTodo= [];
    numeroresolu: number;
    Nfolionotificacion: number;
    moduloLLave:string;
    exponentellave:string;
    moduloCertificadoLLave:string;
    exponenteCertificadoLLave:string;
    rutEmisiorBoleta:string;

    constructor(private bol:VoucherService, private modalService: NgbModal, public secoind: HoraActualService) {
  }
 async ngOnInit() {
    this.boletas = this.bol.detalledeventa()
     this.informacionesLocal()

     this.datos$ = this.secoind.getInfoReloj();
     this.fecha =  this.datos$.subscribe( x => {
         this.hora = x.diaymes + "T"+ x.hora.toString() +":"+ x.minutos + ":"+ x.segundo;
         this.fecha_resolucion = x.diaymes
     })
  }

    agregaboleta(da) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const dproducto = [];
        const valornet = [];
        const valorIVA = [];
        const valortotal= [];
                this.datos.push( da );
            this.cortar  = this.datos.filter((item, index) => {
                return this.datos.indexOf(item) === index;
            });

            console.log(this.cortar)
                    for (const o of this.datos){
                        dproducto.push(o.product);
                        valornet.push(o.product.pvalor);
                        valorIVA.push(o.product.piva);
                        this.valortotalneto = valornet.reduce(reducer);
                        this.TotalValorIVA = valorIVA.reduce(reducer);
                       valortotal.push(this.valortotalneto, this.TotalValorIVA);
                       this.totalTodo = valortotal.reduce(reducer)
                        for (const u of dproducto){
                            this.datoscategory.push(u.category.cnombre)
                        }
                    }
                    this.cantidadDoc = this.cortar.length

    }

    informacionesLocal(){
      this.rasonSoci =  localStorage.getItem('rasonS');
      this.rutEmisor = localStorage.getItem('rutE');
      this.moduloLLave = localStorage.getItem('modulo');
      this.exponentellave = localStorage.getItem('exponente');
      this.moduloCertificadoLLave = localStorage.getItem('tag');
      this.exponenteCertificadoLLave = localStorage.getItem('crypto');
      this.rutEmisiorBoleta = localStorage.getItem('rutEmi')


    }





    crearxml(){
        this.fecha.unsubscribe();


        const xmlStr = '\t\t\t<?xml version="1.0" encoding="iso-8859-1"?>\n' +
            '\t\t\t<LibroCompraVenta xmlns="http://www.sii.cl/SiiDte" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SiiDte="http://www.sii.cl/SiiDte" >\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<EnvioLibro ID="ID_LIBRO_">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Caratula>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RutEmisorLibro>'+this.rutEmisor+'</RutEmisorLibro>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RutEnvia>'+this.rutEmisor+'</RutEnvia>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<PeriodoTributario>'+this.fecha_tributaria+'</PeriodoTributario>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<FchResol>'+this.fecha_resolucion+'</FchResol>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<NroResol>'+this.numeroresolu+'</NroResol>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TipoOperacion>VENTA</TipoOperacion>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TipoLibro>'+'Libro de boletas'+'</TipoLibro>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TipoEnvio>'+this.tipodeDoc+'</TipoEnvio>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<FolioNotificacion>'+this.Nfolionotificacion+'</FolioNotificacion>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</Caratula>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t<ResumenPeriodo>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotalesPeriodo>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TpoDoc>39</TpoDoc>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotDoc>'+this.cantidadDoc+'</TotDoc>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntExe>49241</TotMntExe>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntNeto>'+this.valortotalneto+'</TotMntNeto>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntIVA>'+this.TotalValorIVA+'</TotMntIVA>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TotMntTotal>'+this.totalTodo+'</TotMntTotal>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</TotalesPeriodo>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t</ResumenPeriodo>\n' +
             		                        document.getElementById("detallebole").innerHTML +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TmstFirma>2020-09-01T11:17:16</TmstFirma>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</EnvioLibro>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<AlforitTranform>SHA1withRSA</AlforitTranform>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<AlgoritDiges>'+this.moduloCertificadoLLave+'</AlgoritDiges>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ValorDiges>'+this.exponenteCertificadoLLave+'</ValorDiges>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</Signature>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<SignatureValue>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ValorFrm>'+13000+'</ValorFirm>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\</SignatureValue>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<KeyInfo>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<KeyValue>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RSAKeyValue>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Modulo>'+this.moduloLLave+'</Modulo>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<Exponente>'+this.exponentellave+'</Exponente>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</RSAKeyValue>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</KeyValue>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</KeyInfo>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</LibroCompraVenta>\n';
        let doc: XMLBuilder;
        doc = create( xmlStr ).dec( {version: "1.0",encoding: 'ISO-8859-1'} );
// append a 'baz' element to the root node of the document
        doc.root().ele('baz');
        const xml = doc.end({ prettyPrint: true });


        let filename =  this.fecha_resolucion+'.xml';
        let text =  xml
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    open(content) {
        this.fecha.unsubscribe()

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
