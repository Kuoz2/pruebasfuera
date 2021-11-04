import {Component, OnInit} from '@angular/core';
import {PagosService} from "../../../Service/pagos.service";
import {Medio} from "../../Modulos/Medio";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-medio',
  templateUrl: './medio.component.html',
  styleUrls: ['./medio.component.scss']
})
export class MedioComponent implements OnInit {
  public medioForm: FormGroup;

  static CreateFormProvider(){
    return new FormGroup({
      mpnombre: new FormControl('',[Validators.required])
    })
  }

  constructor(private medio: PagosService) {
    this.medioForm = MedioComponent.CreateFormProvider();
  }
nuevomedio: Medio;
  mediopago = new Medio();
  tomarmedio:Medio[];
  ngOnInit() {
    this.medio.mostrarmediodepago().subscribe(data => {this.tomarmedio = data})
  }


  guardarmedio() {
    if (this.medioForm.valid) {
      const data = []
      for (const o of this.tomarmedio) {
        data.push( o.mpnombre )
      }
      if (data.includes( this.medioForm.value.mpnombre.toLowerCase() ) != true) {
        this.medioForm.value.mpnombre = this.medioForm.value.mpnombre.toLowerCase()
        return this.medio.guardarmododepago( this.medioForm.value ).subscribe( res => {
          this.mediopago = res
        ;        this.medioForm.reset()
      } )
      } else {
        alert( "El medio de pago ya existe" + this.medioForm.value.mpnombre.toLowerCase() )
      }
    }else {
      alert("Debe agregar un medio de pago.")
    }
  }
}
