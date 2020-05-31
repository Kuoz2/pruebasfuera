import { Component, OnInit } from '@angular/core';
import {PagosService} from "../../../Service/pagos.service";
import {Medio} from "../../Modulos/Medio";

@Component({
  selector: 'app-medio',
  templateUrl: './medio.component.html',
  styleUrls: ['./medio.component.scss']
})
export class MedioComponent implements OnInit {

  constructor(private medio: PagosService) { }
nuevomedio: Medio;
  mediopago = new Medio();
  ngOnInit() {

  }

  guardarmedio(medio:Medio){
    return this.medio.guardarmododepago(medio).subscribe(data => {this.nuevomedio = data})
  }

}
