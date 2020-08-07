import { Component, OnInit } from '@angular/core';
import { categoryDB } from '../../../../shared/tables/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoriasService} from "../../../../Service/categorias.service";
import {LocalDataSource, ServerDataSource} from "ng2-smart-table";
import {HttpClient} from "@angular/common/http";
import {Categories} from "../../../Modulos/Categories";
import {Observable} from "rxjs";
import {Marca} from "../../../Modulos/Marca";

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
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private servi: CategoriasService) {
  }

  ngOnInit() {
    this.categoriasForm = this.formBuilder.group({
      cnombre: ['']
    });

this.categoriaAsync()
  }

  categoriaAsync()
  {
    this.categorias = this.servi.mostrarcategorias()
  }

  guardarcategoria(){
    this.servi.guardarcategorias(this.categoriasForm.value);
    this.categoriasForm.reset();
  }
  open2(content2, catego: Categories):void
  {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    localStorage.setItem('idc', catego.id.toString());
    this.editar();

  }

  editarcategoria(categoria: Categories){
    this.servi.actualizarcategoria(categoria).subscribe(data => {this.categoriaID = data})
  }

  editar(){
    const id = localStorage.getItem('idc');
    this.servi.mostrarporID(+id).subscribe(data => {this.categoriaID = data})
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
