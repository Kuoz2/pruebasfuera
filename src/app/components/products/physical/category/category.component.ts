import { CookieService } from 'ngx-cookie-service';
import { takeUntil, switchMap, map, switchMapTo, shareReplay, share, takeWhile, scan, startWith, delay, mapTo, tap, mergeMap, timeInterval } from 'rxjs/operators';
import { VerificarTokenService, respuesta } from './../../../../Service/verificar-token.service';

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, Input, Renderer2, Pipe, OnChanges, AfterViewInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CategoriasService} from '../../../../Service/categorias.service';
import {Categories} from '../../../Modulos/Categories';
import { Observable, BehaviorSubject, Subject, interval, timer, ObservableInput, Subscriber, EMPTY, EmptyError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/Service/websocket.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit, OnDestroy, AfterViewInit {
  
  public closeResult: string;
  categoriasForm: FormGroup;
  categorias: Categories;
  categoriaID: Categories = new Categories();
  otracategoria:any
  p: any;
  da: String[] = []
  room:string
  private unsubscribe$ = new Subject<void>();
  public existe:object;
  url:string
  cambioos = new BehaviorSubject([])
  constructor(private modalService: NgbModal,
     private formBuilder: FormBuilder,
      private servi: CategoriasService,
      private cd: ChangeDetectorRef,
      private cookies: CookieService,
      private socketwebservice: WebsocketService,
      private verificar: VerificarTokenService, private spinner: NgxSpinnerService, private router: ActivatedRoute ) {
         
  }
  ngAfterViewInit():void {
    this.socketwebservice.callback.subscribe((res:Categories) =>{
      this.cookies.delete('category')
      console.log("hola", Object.values(res)[0]  )
      this.categorias =  Object.values(res)[0] 
      this.cd.detectChanges()
     return this.categorias
      
    })
  }
 

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    
  }
intervalo 
 ngOnInit() {
     this.spinner.show("spinnerdashcategori", {
    type: "pacman",
    size: "large",
    color: "white"
})

  this.categoriasForm = this.formBuilder.group({
      cnombre: ['', [Validators.required]]
    });
   this.categoriaAsync()
  
  }




  categoriaAsync() {
     this.servi.mostrarcategorias().pipe(takeUntil(this.unsubscribe$)).subscribe((res:Categories) => {this.categorias = res; 
      this.cd.markForCheck();
      this.spinner.hide('spinnerdashcategori');
    
    })
     
    }


    apretrando(){
      alert(this.room)
    }
  guardarcategoria():Observable<Categories> {
      //verificar si de verdad existe el jti.
      if(this.categoriasForm.valid){
      ( this.servi.guardarcategorias(this.categoriasForm)).subscribe(
          res => { this.otracategoria = res;console.log(this.otracategoria) }
        )
        this.room = this.router.snapshot.paramMap.get('category')
        this.cookies.set('categoria', this.room) 
     
        this.servi.mostrarcategorias().subscribe(res =>  this.socketwebservice.emitEvent({res}))

      return this.otracategoria
      }

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

  editarcategoria(categoria: Categories) {
    this.servi.actualizarcategoria(categoria)
    setTimeout(() => {
      this.categoriaAsync()
    }, 1500)
  }

  editar() {
    const id = localStorage.getItem('idc');
    this.servi.mostrarporID(+id).subscribe(data => {this.categoriaID = data; });
  }


  open(content) {
    console.log(content)
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

  detectar_cambio(){
    this.cambioos.next([this.categorias])
    this.cambioos.subscribe(data => {console.log(...data);   this.cd.detach()})
    
  }

}
