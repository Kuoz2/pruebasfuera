import { VerificarTokenService, respuesta } from './../../../../Service/verificar-token.service';

import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoriasService} from '../../../../Service/categorias.service';
import {Categories} from '../../../Modulos/Categories';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public closeResult: string;
  categoriasForm: FormGroup;
  categorias: Observable<Categories[]>;
  categoriaID: Categories = new Categories();
  p: any;
  public existe:object;

  constructor(private modalService: NgbModal,
     private formBuilder: FormBuilder,
      private servi: CategoriasService,
      private verificar: VerificarTokenService) {
  }

 async ngOnInit() {
   
  this.categoriasForm = this.formBuilder.group({
      cnombre: ['']
    });
  
  await  this.categoriaAsync();
  }

  categoriaAsync() {
    this.categorias = this.servi.mostrarcategorias();
  }

 async guardarcategoria() {
      //verificar si de verdad existe el jti.
      await this.servi.guardarcategorias(this.categoriasForm.value).catch(res => {console.log(res)}).finally(() =>{ this.categoriasForm.reset();
      })
      
    
  }

  open2(content2, catego: Categories): void {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    localStorage.setItem('idc', catego.id.toString());
    this.editar();

  }

  async editarcategoria(categoria: Categories) {
   await this.verificar.probandojti()

    await this.servi.actualizarcategoria(categoria).subscribe(data => {this.categoriaID = data; });
  }

  editar() {
    const id = localStorage.getItem('idc');
    this.servi.mostrarporID(+id).subscribe(data => {this.categoriaID = data; });
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
