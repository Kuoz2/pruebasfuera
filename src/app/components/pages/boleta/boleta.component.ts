import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../Modulos/Item";
import {HoraActualService, valorReloj} from "../../../Service/hora-actual.service";
import {Observable} from "rxjs";
import PDF417 from "pdf417-generator";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import forge from 'node-forge'
import {VoucherService} from "../../../Service/voucher.service";

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.scss']
})
export class BoletaComponent implements OnInit {

    boletaform: FormGroup;
    totaliva: number = 0;
    encript: Array<[]>;
    taag: Array<[]>;
    estadoConfi: boolean = false;
    constructor(public secoind: HoraActualService, private fm: FormBuilder, private url: VoucherService) {
        this.boletaform = this.fm.group( {
            RutEmpresa: new FormControl( '', [Validators.required] ),
            FechaAutori: new FormControl( '', [Validators.required] ),
            RutReceptor: new FormControl( '', [Validators.required] ),
            CantidadDesde: new FormControl( '', [Validators.required] ),
            CantidadHasta: new FormControl( '', [Validators.required] ),
            numeroFolio: new FormControl( '', [Validators.required] ),
            TipoDocumento: new FormControl( '', [Validators.required] ),
            moduloLLave: new FormControl( '', [Validators.required] ),
            ExponenteLLave: new FormControl( '', [Validators.required] ),
            identidadLLave: new FormControl( '', [Validators.required] ),
            firmaTimbre: new FormControl( '', [Validators.required] ),
            rasonSocial: new FormControl( '', [Validators.required] ),
            identificacionLlave: new FormControl('', [Validators.required]),
            rutEmisor: new FormControl('', [Validators.required])
        } );

    }

    get RutEmpresa() {
        return this.boletaform.get( 'RutEmpresa' )
    }

    get fechaEmision() {
        return this.boletaform.get( 'fechaEmision' )
    }

    get RutReceptor() {
        return this.boletaform.get( 'RutReceptor' )
    }

    get CantidadDesde() {
        return this.boletaform.get( 'CantidadDesde' )
    }

    get CantidadHasta() {
        return this.boletaform.get( 'CantidadHasta' )
    }

    get numeroFolio() {
        return this.boletaform.get( 'numeroFolio' )
    }

    get TipoDocumento() {
        return this.boletaform.get( 'TipoDocumento' )
    }

    get moduloLLave() {
        return this.boletaform.get( 'moduloLLave' )
    }

    get ExponenteLLave() {
        return this.boletaform.get( 'ExponenteLLave' )
    }

    get identidadLLave() {
        return this.boletaform.get( 'identidadLLave' )
    }

    get firmaTimbre() {
        return this.boletaform.get( 'firmaTimbre' )
    }

    get rasonSocial() {
        return this.boletaform.get( 'rasonSocial' )
    }

    get identificacionLlave(){ return this.boletaform.get('identificacionLlave')}
    get rutEmisor(){return this.boletaform.get('rutEmisor')}

    datos$: Observable<valorReloj>;
    hora: number;
    minutos: string;
    dia: string;
    fecha;
    fechas:string = '';
    segundos: string;

    ngOnInit(): void {
        this.datos$ = this.secoind.getInfoReloj();
        this.fecha =  this.datos$.subscribe( x => {
                document.getElementById( "#horas" ).innerHTML = String( x.hora );
                document.getElementById( "#minutos" ).innerHTML = x.minutos;
                document.getElementById( '#fecha' ).innerHTML = x.diaymes;
                document.getElementById( "#ampm" ).innerHTML = x.ampm;
                document.getElementById( "#segundos" ).innerHTML = x.segundo;
            }
        );

        this.generate();
        this.sumariva();

    }


    @Input() item: Array<Item>;
    @Input() totalPrices: number;
    @Input() lahora: number;
    @Input() fechaE:string;

    generate() {
        // language=HTML
        var code = "<TED version='1.0'><DD>" +
            "<RE>"+localStorage.getItem("rutE")+"</RE>" +
            "<TD>39</TD>" +
            "<F>"+localStorage.getItem("folio")+"</F>" +
            "<FE>"+this.fechaE+"</FE>" +
            "<RR>11111111-1</RR>" +
            "<RSR>Sin infomacion</RSR>" +
            "<MNT>"+this.totalPrices+"</MNT>" +
            "<CAF version='1.0'>" +
            "<DA>" +
            "<RE>11111111-1</RE>" +
            "<RS>"+localStorage.getItem('rasonS')+"</RS>" +
            "<TD>39</TD>" +
            "<RNG>" +
            "<D>"+localStorage.getItem("iniBol")+"</D>" +
            "<H>"+localStorage.getItem("hasBol")+"</H>" +
            "</RNG>" +
            "<FA>2002-06-10</FA><RSAPK>" +
            "<M>"+localStorage.getItem("modulo")+"</M>" +
            "<E>"+localStorage.getItem("exponente")+"</E>" + "</RSAPK><IDK>"+localStorage.getItem("IDK")+"</IDK>" + "</DA>" +
            "<FRMT algoritmo=”SHA1RSA”>"+localStorage.getItem("crypto")+"</FRMT>" +
            "<TSTED>"+ this.lahora  +"</TSTED>" +
            "</DD><FRMT algoritmo=”SHA1withRSA”>"+localStorage.getItem("tag")+"</FRMT>" +
            "</TED>";

        console.log(code)
        var canvas = document.getElementById( "barcode" );

        var imgObject = new Image();
        PDF417.draw( code, canvas );
        // @ts-ignore
        imgObject.src = canvas.toDataURL( "image/png" );
        const imagenjpg = imgObject.src.toString();
        document.getElementById( 'imagen' ).setAttribute( 'src', imagenjpg )
    }


    sumariva() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const iva = [0];
        if (this.item != []) {
            for (let d in this.item) {
                iva.push( this.item[d].piva * this.item[d].quantity )
            }
            this.totaliva = iva.reduce( reducer )
        }
    }

    guardarformato(boletaform) {
        if (this.boletaform.valid) {

            var md = forge.md.sha1.create();
            var md2 = forge.md.sha1.create();
            md2.update( boletaform.value.identidadLLave );
            md.update( boletaform.value.firmaTimbre );
            //Codificacion del codigo a SHA1
            boletaform.value.identidadLLave = md2.digest().toHex();
            boletaform.value.firmaTimbre = md.digest().toHex();

            //Informacion tranformada en 64BIT
            boletaform.value.identidadLLave = btoa( boletaform.value.identidadLLave );
            boletaform.value.firmaTimbre = btoa( boletaform.value.firmaTimbre );
            boletaform.value.moduloLLave = btoa( boletaform.value.moduloLLave );
            boletaform.value.ExponenteLLave = btoa( boletaform.value.ExponenteLLave );

            localStorage.setItem( 'exponente', boletaform.value.ExponenteLLave );
            localStorage.setItem( 'modulo', boletaform.value.moduloLLave );
            localStorage.setItem( 'tag', boletaform.value.identidadLLave );
            localStorage.setItem( 'crypto', boletaform.value.firmaTimbre );
            localStorage.setItem( 'iniBol', boletaform.value.CantidadDesde );
            localStorage.setItem( 'hasBol', boletaform.value.CantidadHasta );
            localStorage.setItem( 'IDK', boletaform.value.identificacionLlave );
            localStorage.setItem('folio', boletaform.value.numeroFolio);
            localStorage.setItem('rutE', boletaform.value.RutEmpresa);
            localStorage.setItem('rasonS', boletaform.value.rasonSocial);
            localStorage.setItem('fechA', boletaform.value.FechaAutori);
            localStorage.setItem('rutEmi', boletaform.value.rutEmisor);
             this.url.guardarboucher(boletaform.value)
        }else{
            alert("No, debe dejar ningun campo vacío")
        }

    }

    DatosBoleta(){
        const criptografico = localStorage.getItem('crypto')
            this.estadoConfi = criptografico != null || typeof (criptografico) == 'undefined';
    }

    tranformarIdentidad(firmaTimbre) {
        var lll = [];
        var yyy =[];

        forge.rsa.generateKeyPair({bits: 2048, workers: -1}, function(err, keypair) {
            var kdf1 = new forge.kem.kdf1(forge.md.sha1.create());
            var kem = forge.kem.rsa.create(kdf1);
            var result = kem.encrypt(keypair.publicKey, 16);
            var iv = forge.random.getBytesSync(12);
            var someBytes = 'hello world!';
            var cipher = forge.cipher.createCipher('AES-GCM', result.key);
            cipher.start({iv: iv});
            cipher.update(forge.util.createBuffer(firmaTimbre.value.toString()));
            cipher.finish();
             lll.push(cipher.output.getBytes());
             yyy.push( cipher.mode.tag.getBytes());

            //  var kdf1 = new forge.kem.kdf1(forge.md.sha1.create());
            //var kem = forge.kem.rsa.create(kdf1);
            //var key = kem.decrypt(keypair.privateKey, result.encapsulation, 16);

            //var decipher = forge.cipher.createDecipher('AES-GCM', key);
            //decipher.start({iv: iv, tag: tag});
            //decipher.update(forge.util.createBuffer(encrypted));
            //var pass = decipher.finish();

            //if(pass) {
            // outputs 'hello world!'
            //  console.log(decipher.output.getBytes());
            //}
            //console.log(result.key)
            //var md = forge.md.sha1.create();
            //md.update(result.key);
            //console.log(md.digest().toHex());
            //console.log(btoa(md.digest().toHex()))
        });

        this.encript = lll;
        this.taag = yyy;
    }



}
