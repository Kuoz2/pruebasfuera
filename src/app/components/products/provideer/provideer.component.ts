import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { Provideer } from './../../Modulos/Provideer';
import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Bancos} from "../../../shared/tables/bancos";
import {ProductserviceService} from "../../../Service/productservice.service";
import { proveedores_lista } from '../../Modulos/respuesta';
import { Input } from 'hammerjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-provideer',
  templateUrl: './provideer.component.html',
  styleUrls: ['./provideer.component.scss'],
})
export class ProvideerComponent implements OnInit {
  public provideer: FormGroup;
  public provideer_post: Provideer;
  constructor(private serviProvider: ProductserviceService, private spinner: NgxSpinnerService) {
    this.provideer = ProvideerComponent.CreateFormProvider()
  }
    provedores
    providers
    listprovider: string[]
    provedor
  p = 1
  ngOnInit(): void {
    this.spinner.show()
    this.ListaProveedor()
  }

  static CreateFormProvider(){
    return new FormGroup({
      nombre_provider: new FormControl('',[Validators.required]),     
    })
  }

  resetiarform() {
    this.provideer.reset()
  }

 async guardarprovider() {
 
    if(this.provideer.valid){
    
   await this.serviProvider.guardarProvider(this.provideer);
      setTimeout(()=>{
       this.ListaProveedor();

      }, 1500)

    }
  }

 ListaProveedor(){
  this.serviProvider.ListaProveedor().pipe(map(x => {console.log('el map', this.provedor =x)})).subscribe()
}
}
