import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from "../../../../Service/productservice.service";
import {Productos, Stock} from "../../../Modulos/Productos";
import {Categories} from "../../../Modulos/Categories";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {productos} from "../../../Modulos/GANANCIAS";
import {stripComments} from "tslint/lib/utils";

@Component({
    selector: 'app-listaproducto',
    templateUrl: './listaproducto.component.html',
    styleUrls: ['./listaproducto.component.scss']
})
export class ListaproductoComponent implements OnInit {
    public closeResult: string;
    constructor(private prod: ProductserviceService,private modalService: NgbModal, private formBuilder: FormBuilder) { }
    listproductos: Productos[] = [];
    productoFomr: FormGroup;
    productoporid: Productos = new Productos();
    stock_actualizado: Stock = new Stock();
    ck = new Stock
    stock_nuevo: number;
    stock_perdidas_nuevo: number;
    d: any;

    ngOnInit() {

        this.prod.products().subscribe(data => {this.listproductos= data})
    }

    editarproductos(producto: Productos){
        this.prod.actualizarproducto(producto).subscribe(data => { return data});



    }

    editarstock(stck: Stock, stnuevo, stlost){
        const edicion_producto = stck;

        if (stnuevo == 0 && stlost == 0 || stnuevo == null && stlost == null) {
            console.log( "producto editado en 0 ", edicion_producto );
        }else {
            if (stnuevo != 0 && stlost == 0 || stlost == null){
                edicion_producto.pstock += stnuevo;
                edicion_producto.stock_lost += 0;
                console.log("stock nuevo no es vacio", edicion_producto)
            } else {
                if (stlost != 0 && stnuevo == 0 || stnuevo == null){
                    edicion_producto.stock_lost += stlost;
                    edicion_producto.pstock += 0;
                    console.log("stock de perdida no esta vacio", edicion_producto)
                }else {
                    if (stnuevo != 0 && stlost != 0 && stnuevo != null && stlost != null){
                        edicion_producto.pstock += stnuevo;
                        edicion_producto.stock_lost += stlost;
                        console.log( "producto editado ", edicion_producto );

                    }
                }

            }
            console.log("productos",stck)
            console.log("edicion del producto", edicion_producto)
            this.prod.actualizarstock(stck).subscribe(data => { return data});
            console.log(edicion_producto)
        }
    }



    editar(){
        const id = localStorage.getItem('idc');
        console.log(id);

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
        console.log(id);

        this.prod.buscarelstockporID(+id).subscribe(data => {this.stock_actualizado = data})
    }

    open3(content3, catego: Stock):void
    {
        this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
            console.log("id que muestra", catego.id);
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
