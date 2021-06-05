import {Component, OnInit} from '@angular/core';
import {ProductserviceService} from '../../../../Service/productservice.service';
import {Productos, Stock} from '../../../Modulos/Productos';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {PagosService} from '../../../../Service/pagos.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-listaproducto',
    templateUrl: './listaproducto.component.html',
    styleUrls: ['./listaproducto.component.scss']
})
export class ListaproductoComponent implements OnInit {
    public closeResult: string;
    public listproductosG: Observable<Productos[]>;
    constructor(private prod: ProductserviceService,
                private modalService: NgbModal,
                private formBuilder: FormBuilder,
                private pd: PagosService,
                private ngxspinner: NgxSpinnerService
    ) { }
    listproductos: Observable<Productos[]> ;
    productoporid: Productos = new Productos();
    // tslint:disable-next-line:variable-name new-parens
    stock_actualizado: Stock = new Stock();
    // tslint:disable-next-line:new-parens
    ck = new Stock;
    // tslint:disable-next-line:variable-name
    stock_nuevo: number;
    // tslint:disable-next-line:variable-name
    stock_perdidas_nuevo: number;
    d = 0;
    h = 0;
    j = 0;

  async  ngOnInit() {
        this.ngxspinner.show()
       await this.productosAsync();

    }

     cambiadColor(EsPr, i, id) {
         console.log('el intervalor', i, id );
         // tslint:disable-next-line:triple-equals
         if (EsPr > 10 || EsPr == 10) {
            const cambio = document.getElementById('estado' + i + id);
            cambio.style.backgroundColor = '#B5FF33';
        }
     }

     cambiarColorGestion(EsPr, i, id) {
         // tslint:disable-next-line:triple-equals
         if (EsPr < 10 && EsPr != 0) {
             const cambio2 = document.getElementById('gestionar' + i + id);
             cambio2.style.backgroundColor = '#F9FF33';
         }
     }

     cambiarColorSinStock(EsPr, i, id) {
         // tslint:disable-next-line:triple-equals
         if (EsPr == 0 ) {
             const cambio3 = document.getElementById('peligro' + i + id);
             cambio3.style.backgroundColor = '#FA0000';
         }
     }


    productosAsync() {
        this.listproductos = this.prod.products();
        this.listproductosG = this.prod.products();
        this.ngxspinner.hide();
    }

    editarproductos(producto: Productos) {
        this.prod.actualizarproducto(producto).subscribe(data => data);
    }



    editarstock(stck: Stock, stnuevo, stlost) {
        // tslint:disable-next-line:variable-name
        const edicion_producto = stck;

        // tslint:disable-next-line:triple-equals
        if (stnuevo == 0 && stlost == 0 || stnuevo == null && stlost == null) {
        } else {
            // tslint:disable-next-line:triple-equals
            if (stnuevo != 0 && stlost == 0 || stlost == null) {
                edicion_producto.pstock += stnuevo;
                edicion_producto.stock_lost += 0;
            } else {
                // tslint:disable-next-line:triple-equals
                if (stlost != 0 && stnuevo == 0 || stnuevo == null) {
                    edicion_producto.stock_lost += stlost;
                    edicion_producto.pstock += 0;
                } else {
                    // tslint:disable-next-line:triple-equals
                    if (stnuevo != 0 && stlost != 0 && stnuevo != null && stlost != null) {
                        edicion_producto.pstock += stnuevo;
                        edicion_producto.stock_lost += stlost;

                    }
                }

            }

            this.prod.actualizarstock(stck).subscribe(data => data);
        }
    }



    editar() {
        const id = localStorage.getItem('idc');

        this.prod.buscarproductoporID(+id).subscribe(data => {this.productoporid = data; });
    }

    open2(content2, catego: Productos): void {
        this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

        localStorage.setItem('idc', catego.id.toString());
        this.editar();

    }

    editar2() {
        const id = localStorage.getItem('idc2');
        this.prod.buscarelstockporID(+id).subscribe(data => {this.stock_actualizado = data; });
    }

    open3(content3, catego: Stock): void {
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
