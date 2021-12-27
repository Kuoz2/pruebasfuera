import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MarcaService} from "../../../../Service/marca.service";
import {Marca} from "../../../Modulos/Marca";
import {Observable} from "rxjs";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { map } from 'rxjs/internal/operators/map';
import { WebsocketService } from 'src/app/Service/websocket.service';


@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaComponent implements OnInit, AfterViewInit {
p: any
  constructor(private Smarca: MarcaService,
    private modalService: NgbModal,
     private fb:FormBuilder,
     private cd: ChangeDetectorRef,
      private cookie: CookieService, private router: ActivatedRoute, 
      private socketwebservice: WebsocketService,
      ) {
      this.marcasForm = this.fb.group({
          bnombre:['', [Validators.required]]
      })

  }
  ngAfterViewInit(): void {
    }
  route: string;
  marcasForm:FormGroup;

  elnombre:Marca
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

   informacionasync(){
     this.Smarca.buscarmarca().subscribe((x:Marca) => {
      this.elnombre= x
     })
  }
nombre;
  ngOnInit(): void {

    this.informacionasync();
    console.log(this.elnombre);
      

      this.socketwebservice.Marcallback.subscribe((res:Marca) =>{
        this.cookie.delete('marca')
        console.log(res)
        console.log("hola", Object.values(res)[0]  )
        this.elnombre =  Object.values(res)[0] 
        this.cd.detectChanges();
       return this.elnombre
        
      }) 
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
        this.Smarca.actualizarmarca(marca)
        setTimeout(() => {
          this.marcaId
          this.informacionasync()
        }, 1500)

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
        if(this.marcasForm.valid){
            this.Smarca.guardarmarca(this.marcasForm);
            this.route = this.router.snapshot.paramMap.get('marca')
            console.log(this.route)
            this.cookie.set('marca', this.route)

            this.Smarca.buscarmarca().subscribe(res =>  this.socketwebservice.emitEventMarca({res}))

          }
    }
}
