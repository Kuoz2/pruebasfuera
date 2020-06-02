import { Component, OnInit } from '@angular/core';
import {Marca} from "../../../../Modulos/Marca";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MarcaService} from "../../../../../Service/marca.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {
  public closeResult: string;
  marcasForm: FormGroup;
  marca: Observable<Marca[]>;
  marcangmo: Marca = new Marca();
  p:any;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private servimarca: MarcaService) {

  }

  ngOnInit() {
    this.marcasForm = this.formBuilder.group({
      bnombre:['']
    });
  }

  editarmarca(marca: Marca){
    this.servimarca.actualizarmarca(marca).subscribe(data => {this.marcangmo = data})
  }

  marcaAsync(){
    this.marca = this.servimarca.mostrarmarcas()
  }

  guardarmarca(){
    this.servimarca.guardarmarca(this.marcasForm.value).subscribe( );
    console.log(this.marcasForm.value);
    alert('se guardo con exito');
    this.marcasForm.reset()
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }

  open2(content2, marca: Marca):void
  {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    localStorage.setItem('idc', marca.id.toString());
    this.editar();

  }

  editar(){
const id = localStorage.getItem('idc');
    console.log(id);

    this.servimarca.mostrarpoID(+id).subscribe(data => {this.marcangmo = data})
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
