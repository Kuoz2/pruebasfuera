import {Component, OnInit} from '@angular/core';
import {ProductserviceService} from "../../../../Service/productservice.service";
import {Productos, Stock} from "../../../Modulos/Productos";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";
import {PagosService} from "../../../../Service/pagos.service";

@Component({
    selector: 'app-listaproducto',
    templateUrl: './listaproducto.component.html',
    styleUrls: ['./listaproducto.component.scss']
})
export class ListaproductoComponent implements OnInit {
    public closeResult: string;
    public listproductosG: Observable<Productos[]>;
    constructor(private prod: ProductserviceService,private modalService: NgbModal, private formBuilder: FormBuilder, private pd: PagosService) { }
    listproductos: Observable<Productos[]> ;
    productoporid: Productos = new Productos();
    stock_actualizado: Stock = new Stock();
    ck = new Stock;
    stock_nuevo: number;
    stock_perdidas_nuevo: number;
    d: number = 0;
    h:number = 0;
    j: number = 0;

    ngOnInit() {
    this.productosAsync();
    }

     cambiadColor(EsPr,i,id){
         console.log("el intervalor", i, id );
        if (EsPr > 10 || EsPr == 10){
            var cambio = document.getElementById('estado' + i + id);
             cambio.style.backgroundColor = '#B5FF33';
        }
     }

     cambiarColorGestion(EsPr, i, id){
         if (EsPr < 10 && EsPr != 0){
             var cambio2 = document.getElementById('gestionar' + i + id);
             cambio2.style.backgroundColor = '#F9FF33';
         }
     }

     cambiarColorSinStock(EsPr, i, id){
         if (EsPr == 0 ){
             var cambio3 = document.getElementById('peligro' + i + id);
             cambio3.style.backgroundColor = '#FA0000';
         }
     }


    productosAsync(){
        this.listproductos = this.prod.products();
        this.listproductosG = this.prod.products();
    }

    editarproductos(producto: Productos){
        this.prod.actualizarproducto(producto).subscribe(data => { return data});
    }



    editarstock(stck: Stock, stnuevo, stlost){
        const edicion_producto = stck;

        if (stnuevo == 0 && stlost == 0 || stnuevo == null && stlost == null) {
        }else {
            if (stnuevo != 0 && stlost == 0 || stlost == null){
                edicion_producto.pstock += stnuevo;
                edicion_producto.stock_lost += 0;
            } else {
                if (stlost != 0 && stnuevo == 0 || stnuevo == null){
                    edicion_producto.stock_lost += stlost;
                    edicion_producto.pstock += 0;
                }else {
                    if (stnuevo != 0 && stlost != 0 && stnuevo != null && stlost != null){
                        edicion_producto.pstock += stnuevo;
                        edicion_producto.stock_lost += stlost;

                    }
                }

            }

            this.prod.actualizarstock(stck).subscribe(data => { return data});
        }
    }



    editar(){
        const id = localStorage.getItem('idc');

        this.prod.buscarproductoporID(+id).subscribe(data => {this.productoporid = data})
    }

    open2(content2, catego: Productos):void
    {
        this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

        localStorage.setItem('idc', catego.id.toString());
        this.editar();

    }

    editar2(){
        const id = localStorage.getItem('idc2');
        this.prod.buscarelstockporID(+id).subscribe(data => {this.stock_actualizado = data})
    }

    open3(content3, catego: Stock):void
    {
        this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        localStorage.setItem('idc2', catego.id.toString());
        this.editar2();

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
