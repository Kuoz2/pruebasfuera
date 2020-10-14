import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ImpuestosService} from "../../../../Service/impuestos.service";
import {Impuestos} from "../../../Modulos/impuestos";
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.scss']
})
export class ImpuestosComponent implements OnInit {
    p: any;
  public closeResult: string;
  public impuestoID: Impuestos = new Impuestos();
  public IMPs: Observable<Impuestos[]>;
  impuestos: FormGroup;
  constructor(private modalService: NgbModal, private servi: ImpuestosService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Bimpuestos()
    this.impuestos = this.formBuilder.group({
      tnombre: new FormControl('',[Validators.required]),
      timpuesto: new FormControl('',[Validators.required])
    })
  }
  guardarimpuesto(imp) {
    if (imp.valid){

        this.servi.guardarIMP(imp.value)
      imp.reset()
    }
  }

  async Bimpuestos(){
   return  this.IMPs = this.servi.obtneriIMP()
  }

  open2(content2, impuestos: Impuestos):void
  {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    localStorage.setItem('idi', impuestos.id.toString());
    this.editar();

  }
  editar(){
    const id = localStorage.getItem('idi');
    this.servi.impuestosporID(+id).subscribe(data => {this.impuestoID = data})
  }

  editarimpuesto(impuesto: Impuestos){
    this.servi.actualizarimpuesto(impuesto).subscribe(data => {this.impuestoID = data})
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
