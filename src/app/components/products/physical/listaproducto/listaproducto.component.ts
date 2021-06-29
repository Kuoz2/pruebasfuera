import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ProductserviceService} from '../../../../Service/productservice.service';
import {date_expiration, Productos, Stock} from '../../../Modulos/Productos';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {PagosService} from '../../../../Service/pagos.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-listaproducto',
    templateUrl: './listaproducto.component.html',
    styleUrls: ['./listaproducto.component.scss']
})
export class ListaproductoComponent implements OnInit, OnDestroy {

    active = 1;
    public closeResult: string;
    public listproductosG: Observable<Productos[]>;
    private unsubscribe$ = new Subject<void>();
    public tomanuevoinventario;
    listproductos: Observable<Productos[]> ;
    productoporid: Productos = new Productos();
    public inventario2;
    isloading: boolean;
    inventario2_datexpiration: date_expiration = new date_expiration();
    inventario2_stocknuevo: Stock =  new Stock();

    // tslint:disable-next-line:variable-name
    constructor(private prod: ProductserviceService,
                private modalService: NgbModal,
                private formBuilder: FormBuilder,
                private pd: PagosService,
                private ngxspinner: NgxSpinnerService,
                private cd: ChangeDetectorRef
    ) {
    this.isloading = false;

    }
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
    g = 0;
    k = 0;
    n = 0;
    fechavencimiento: string;
    producstock: number;
    stockperdida: number;


  async ngOnInit() {
        this.ngxspinner.show();
        await  this.productosAsync();
        await this.busquedaAsync2();
        await this.newinventario();
        console.log('inventario 2', this.tomanuevoinventario);

    }

    // Tomando el inventario nuevo.
     newinventario() {
      return this.prod.getnewinventario().then(
          res =>  {this.tomanuevoinventario = res; }
      ).finally(() => { this.isloading = true; }).catch(
          err => { console.log('Ocurrio un error', err); }
      );
    }

     cambiadColor(EsPr, i, id) {
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


   async productosAsync() {
       try {
           this.listproductos = this.prod.products().pipe(takeUntil(this.unsubscribe$));
       } catch (e) {
           console.log('Ocurrio un error', e);
       }
       this.ngxspinner.hide();
       return this.listproductos;
   }

  async busquedaAsync2() {
       try {
           this.listproductosG = this.prod.products().pipe(takeUntil(this.unsubscribe$));
       } catch (e) {
           console.log('Ocurrion un error', e);
       }
       return this.listproductosG;
   }

   async editarproductos(producto: Productos, nuevo, perdida) {
      console.log('lo que se quiere actualizar', producto);
      await this.prod.actualizarproducto(producto).subscribe(data => data);
      const stock = producto.stock;
      await this.editarstock(stock, nuevo, perdida);
    }



    async editarstock(stck: Stock, stnuevo, stlost) {
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

            await this.prod.actualizarstock(stck).pipe(takeUntil(this.unsubscribe$)).subscribe( data => this.cd.markForCheck() );
            window.location.reload();
        }
    }



   async editar() {
        const id = localStorage.getItem('idc');

       // tslint:disable-next-line:max-line-length
        await this.prod.buscarproductoporID(+id).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {this.productoporid = data; this.cd.markForCheck(); });
    }

    open2(content2, catego: Productos): void {

      console.log('lo que entra', catego.id);
      this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

      localStorage.setItem('idc', catego.id.toString());
      localStorage.setItem('idc2', catego.id.toString());

      this.editar();
      this.editar2();


    }

    open4(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
            );
    }

    async open5(content, inv2) {
        localStorage.setItem('inv2', inv2.id.toString());
        await this.editar5();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      },
          (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
      );
    }

   async editar2() {
        const id = localStorage.getItem('idc2');
        await this.prod.buscarelstockporID(+id).subscribe(data => {this.stock_actualizado = data; });
    }

      editar5() {
        const id = localStorage.getItem('inv2');
         // tslint:disable-next-line:max-line-length
        this.prod.segundoinventarioID(+id).then((res) => {this.inventario2 = res; console.log('respuesta', this.inventario2.product.pdescripcion); }
        ).catch((err) => {console.log('se obtuvo un error', err); }).finally(() => {this.isloading = true; });
    }

    open3(content3, catego: Stock): void {
        this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }


    guardarnewFyS(fechavencimiento, producstock, stockperdida) {
        this.inventario2_datexpiration.fecha_vencimiento = fechavencimiento;
        this.inventario2_datexpiration.stock_expiration = producstock;
        this.inventario2_datexpiration.cambio_fecha = true
        this.inventario2_datexpiration.cantidad_cambiadas = stockperdida;
        this.inventario2_datexpiration.actualizado_stock = true
        this.inventario2_datexpiration.product_id = this.productoporid.id
        this.inventario2_stocknuevo.product_id = this.productoporid.id;
        this.inventario2_stocknuevo.pstock = producstock;
        this.inventario2_stocknuevo.stock_lost = stockperdida;
        console.log('guardar inventario', this.inventario2_datexpiration, this.inventario2_stocknuevo);
        this.prod._stockinventario2(this.inventario2_stocknuevo).subscribe((res) => console.log('resultado stock',res));
        this.prod._guardarfechainventario2(this.inventario2_datexpiration).subscribe((res) =>  console.log('resultado fecha', res));
    }
    guardarinventario2(fechavencimiento, producstock, stockperdida){
        
    }

    editarproducto2(productoporid, stock_nuevo, stock_perdidas_nuevo){

    }
}
