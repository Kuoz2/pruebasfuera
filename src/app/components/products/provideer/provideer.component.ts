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

  ngOnInit(): void {
  }

  static CreateFormProvider(){
    return new FormGroup({
      nombre_provider: new FormControl('',[Validators.required]),     
    })
  }

  resetiarform() {
    this.provideer.reset()
  }

  guardarprovider():void {
    this.serviProvider.guardarProvider(this.provideer.value).subscribe(res => {this.provideer_post = res});
    this.provideer.reset();
  }
}
