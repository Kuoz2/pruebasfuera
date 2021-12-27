import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, observable, Subscriber } from 'rxjs';
import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Pipe } from '@angular/core';
import { proveedores_lista } from '../../Modulos/respuesta';
import { ProductserviceService } from 'src/app/Service/productservice.service';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.scss'],

})
export class ListProvidersComponent implements OnInit {
  concat: Array<Object>
  constructor( private serviProvider: ProductserviceService ) {   
 
  /*  this.serviProvider.ListaProveedor().subscribe((data) => {
    this.concat = data.EWQmap(x => {
      return new proveedores_lista(
       x.nombre_provider
      )
    })*/
 } // fin del contructor
  @Input() providers
  provedor// = new BehaviorSubject([])
  informacion:proveedores_lista
  p= 1
  ngOnInit() {
  
  }
  
}
