import {Component, OnInit} from '@angular/core';
import {MarcaService} from "../../../../Service/marca.service";
import {Marca} from "../../../Modulos/Marca";
import "rxjs-compat/add/observable/of";
import {Observable} from "rxjs";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
})
export class MarcaComponent implements OnInit {
p: any
  constructor(private Smarca: MarcaService,private modalService: NgbModal, private fb:FormBuilder) {
      this.marcasForm = this.fb.group({
          bnombre:['', [Validators.required]]
      })

  }

  marcasForm:FormGroup;

  elnombre:Observable<Marca[]>
    public closeResult: string;
    marcaId: Marca = new Marca();

   async lasmarca(){
   const informacion =  () => {
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          resolve(this.Smarca.buscarmarca2().toPromise())
        }, 1500)
      })
    }
    return informacion()
  }

  async informacionasync(){
    this.elnombre = this.Smarca.buscarmarca2()
  }
nombre
  ngOnInit(): void {

    this.informacionasync()
    console.log(this.elnombre)
    this.Smarca.buscarmarca();
  }

    open2(content2, marca: Marca):void
    {
        this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

        localStorage.setItem('idmm', marca.id.toString());
        this.editar();

    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    editarcategoria(marca: Marca){
        this.Smarca.actualizarmarca(marca).subscribe()

    }

    editar(){
        const id = localStorage.getItem('idmm');
        this.Smarca.mostrarporID(+id).subscribe(data => {this.marcaId = data})
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

    guardarmarca(fbm) {
        if (this.marcasForm.valid){
            this.Smarca.guardarmarca(fbm.value)
            this.marcasForm.reset()
        }
    }
}
