import { Observable, Subject } from 'rxjs';
import { ProductserviceService } from './../../../../Service/productservice.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Productos } from 'src/app/components/Modulos/Productos';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { takeUntil } from 'rxjs/operators';
import { HoraActualService, valorReloj } from 'src/app/Service/hora-actual.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public closeResult: string;
  public cotizacion: FormGroup;
  public GetProduct: Observable<Productos[]>;
  public descontar: [] = [];
  public arreglo = []
  public numeral = [];
  public totaldescuento:number = 0;
  public encontrandoApp
  hora: string;
  minutos: string;
  dia: string;
  fechaE: string;
  fecha_emision: string;
  hora_emision: string;
  private datos$: Observable<valorReloj>;
  private fechad;
  subtotal:[] 
  totalQuantity = 0;
  totalPrice = 0;
  p: any;
  public telefono:number;
  public persempresa:string= "";
  public correo:string = "";
  public vencimiento:string ="";
  public metodopago:string=""
  items: Array<any>;
  
  get cliente(){return this.cotizacion.get('cliente')};
  get telefonos(){return this.cotizacion.get('telefonos')};
  get corre(){return this.cotizacion.get('corre')};
  get fecha(){return this.cotizacion.get('fecha')};
  get formapago(){return this.cotizacion.get('formapago')};
  get descuentos(){return this.cotizacion.get('descuentos')};
  get total(){return this.cotizacion.get('total')};
  get totaldesc(){return this.cotizacion.get('totaldesc')};
  constructor(private modalService: NgbModal,
     private frm: FormBuilder,
      private pservi: ProductserviceService,
      private carservice:CartServiceService,
      private productos_car:ProductserviceService, 
      private cd: ChangeDetectorRef,
      public secoind: HoraActualService,) { 
this.cotizacion = this.frm.group({
  cliente: new FormControl(''),
  telefonos: new FormControl(''),
  corre: new FormControl(''),
  fecha: new FormControl(''),
  formapago: new FormControl(''),
  descuentos: new FormControl(''),
  total: new FormControl(''),
  totaldesc: new FormControl('')
})

  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

 async ngOnInit() {
  this.datos$ = this.secoind.getInfoReloj();
  this.fechad =  this.datos$.subscribe( x => {
        this.hora = x.diaymes + 'T' + x.hora.toString() + ':' + x.minutos + ':' + x.segundo;
        this.fechaE = x.diaymes;
        this.fecha_emision = x.diaymes;
        this.hora_emision = x.hora.toString() + ':' + x.minutos + ':' +  x.segundo;
      })
    this.productos();
    console.log(this.GetProduct.subscribe(res => console.log(res)))
    await this.carservice.currentDataCart$.pipe(takeUntil(this.unsubscribe$)).subscribe(
      x => {
        
        if (x) { 
          this.items = x;
          this.totalQuantity = x.length;
          this.totalPrice = x.reduce((sum, current) => sum + ((current.pvalor || current.product.pvalor) * current.quantity), 0 )
          this.cd.markForCheck();
        }
      
      }
  );
  }
  open(content) {
    console.log(content)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: <any>'xl ' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

getDismissReason(reason){
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
  }

  productos() {
   return this.GetProduct =   this.pservi.products()
  }

  addCart(product: any) {
    delete product.sinventario
    delete product.sinventario2
    console.log('lo que entra', product)

    if(product.pcodigo){
      Object.assign(product, {sinventario:true})
    }else{
      Object.assign(product, {sinventario2:false})
    }
    const data = product;
    const elemento = {quantity: 1};
    if (data.quantity >= elemento.quantity){
      this.carservice.changeCart(data)
    }else {
      const cambio = Object.assign( product, elemento )
      this.carservice.changeCart(cambio)
  }
  }
 generarDesc(a, i, valor ) {
 
  const porcentaje = a[i] / 100    
  const preciodescuento = (porcentaje * valor)
  console.log(this.arreglo.length)
  if(this.arreglo.length == 0){
    this.arreglo.push(preciodescuento.toFixed(0))
  }else{
    this.arreglo.splice(i, 1, preciodescuento.toFixed(0))
  }
  console.log(this.arreglo)
   
    const subtotal = this.arreglo.reduce((a,b) => (a + b),0) 
 
    this.totaldescuento = (this.totalPrice - subtotal)
   
    console.log('resultado',this.arreglo.reduce((a,b) => (a + b),0))
 }

 generarCotizar(){
  this.telefono
  this.persempresa
  this.correo
  this.vencimiento
  this.metodopago
 }
}
