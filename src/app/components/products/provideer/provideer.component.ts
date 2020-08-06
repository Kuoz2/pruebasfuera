import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Bancos} from "../../../shared/tables/bancos";
import {ProductserviceService} from "../../../Service/productservice.service";
import {Provideer} from "../../Modulos/Provideer";

@Component({
  selector: 'app-provideer',
  templateUrl: './provideer.component.html',
  styleUrls: ['./provideer.component.scss']
})
export class ProvideerComponent implements OnInit {
  public provideer: FormGroup;
  public provideer_post: Provideer;
  constructor(private serviProvider: ProductserviceService) {
    this.provideer = ProvideerComponent.CreateFormProvider()
  }
  public tipos_banco= Bancos;
  public url = [{
    img: "assets/images/dashboard/stats.png",
  }
  ];

  ngOnInit(): void {
  }

  static CreateFormProvider(){
    return new FormGroup({
      nombre_provider: new FormControl('',[Validators.required]),
      //cambia a rut
      rut_provider: new FormControl([]),
      direccion_provider: new FormControl([]),
      telefono_provider: new FormControl([]),
      telefono_persona_provider: new FormControl([]),

      correo_provider: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

      //Sitio web
      web_provider: new FormControl([]),
      comuna_provider: new FormControl([]),
      //El concepto gasto cambiara a detalle del proveedor
      detalle_provider: new FormControl([]),
      banco_provider: new FormControl([]),
      factura_provider: new FormControl([]),
    })
  }


  get primerEmail(){
    return this.provideer.get('correo_provider')
  }

  get seconEmail(){
    return this.provideer.get('correo_provider_2')
  }

  readUrl(event: any, i) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url[i].img = reader.result.toString();
    }



  }

  resetiarform() {

  }

  guardarprovider():void {
          this.provideer.value.factura_provider = btoa(this.provideer.value.factura_provider)
    console.log("guardando", this.provideer.value)
    this.serviProvider.guardarProvider(this.provideer.value).subscribe(res => {this.provideer_post = res});
     this.url.forEach(res => res.img ="assets/images/dashboard/stats.png" );
    this.provideer.reset();
  }
}
