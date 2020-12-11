import {Component, OnInit} from '@angular/core';
import forge from 'node-forge'
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-actualizarbol',
  templateUrl: './actualizarbol.component.html',
  styleUrls: ['./actualizarbol.component.scss']
})
export class ActualizarbolComponent implements OnInit {
  encript: Array<[]>;
  taag: Array<[]>;
  boletaform: FormGroup;
  constructor(private frm: FormBuilder) {
    this.boletaform = frm.group({
      CantidadDesde: new FormControl(''),
      CantidadHasta: new FormControl(''),
      moduloLLave: new FormControl(''),
      ExponenteLLave: new FormControl(''),
      identidadLLave: new FormControl(''),
      firmaTimbre: new FormControl('')
    })

  }

  get CantidadDesde(){ return this.boletaform.get('CantidadDesde')};
  get CantidadHasta(){ return this.boletaform.get('CantidadHasta')};
  get moduloLLave(){ return this.boletaform.get('moduloLLave')};
  get ExponenteLLave(){ return this.boletaform.get('ExponenteLLave')};
  get identidadLLave(){ return this.boletaform.get('identidadLLave')};
  get firmaTimbre(){ return this.boletaform.get('firmaTimbre')};

  ngOnInit(): void {
  }

  tranformarIdentidad(identidadLLave) {
    var lll = [];
    var yyy =[];
    console.log(identidadLLave)
    forge.rsa.generateKeyPair({bits: 2048, workers: -1}, function(err, keypair) {
      var kdf1 = new forge.kem.kdf1(forge.md.sha1.create());
      var kem = forge.kem.rsa.create(kdf1);
      var result = kem.encrypt(keypair.publicKey, 16);
      var iv = forge.random.getBytesSync(12);
      var someBytes = 'hello world!';
      var cipher = forge.cipher.createCipher('AES-GCM', result.key);
      cipher.start({iv: iv});
      cipher.update(forge.util.createBuffer(identidadLLave.value.toString()));
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

    console.log(lll)
    this.encript = lll;
    this.taag = yyy;
  }

  guardarformato(boletaform: FormGroup) {

    var mensaje = confirm("Esta seguro de actualizar estos registros")

    if (mensaje) {

    }

  }
}
