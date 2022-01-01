import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  public closeResult: string;
  public cotizacion: FormGroup
  constructor(private modalService: NgbModal, private frm: FormBuilder) { 
this.cotizacion = frm.group({
  cliente: new FormControl(''),
  telefono: new FormControl(''),
  corre: new FormControl(''),
  fecha: new FormControl(''),
  descuento: new FormControl(''),
  total: new FormControl('')
})

  }

  ngOnInit(): void {
  }
  open(content) {
    console.log(content)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: <any>'xl ' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
getDismissReason(reason){
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
  }
}
