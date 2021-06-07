import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ProductserviceService} from '../../../Service/productservice.service';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Productos} from '../../Modulos/Productos';
import {Categories} from '../../Modulos/Categories';
import {Mermas} from '../../Modulos/mermas';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HoraActualService, valorReloj} from '../../../Service/hora-actual.service';


@Component({
  selector: 'app-merma',
  templateUrl: './merma.component.html',
  styleUrls: ['./merma.component.scss']
})
export class MermaComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public categorias: Observable<Productos[]>;
  public frmCategoria = '';
  public frmMarca = '';
  public productos: Observable<Categories[]>;
  public marcas: Observable<Productos[]>;
  public mermas_dia: Observable<Mermas[]>;
  public p: any;
  public closeResult: string;
  public datosMermas: any;
  datos$: Observable<valorReloj>;
  fecha;
  hora;
  minutos;
  segundos;


    formMermaEstado: FormGroup;
    constructor(private categoryservice: ProductserviceService,
                private formBuilder: FormBuilder,
                private spinnerService: Ng4LoadingSpinnerService,
                private modalService: NgbModal,
                private formUpdateBuilder: FormBuilder,
                public secoind: HoraActualService) {
    this.mermasForm = this.formBuilder.group({
      categoriasMrm: [''] ,
      product_id: [''],
      unidadesMrm: [''] ,
      causaMrm: [''],
      hora: [''],
      marcaMrm: [''],
    });

    this.formMermaEstado = this.formUpdateBuilder.group(
        {
            mrmsolucion: [''],
            decrease_id: ['']
        }
    );

  }
  get categoriasMrm() { return this.mermasForm.get('categoriasMrm'); }
  get product_id() { return this.mermasForm.get('product_id'); }
  get unidadesMrm() { return this.mermasForm.get('unidadesMrm'); }
  get causaMrm() { return this.mermasForm.get('causaMrm'); }
  get marcaMarm() {return this.mermasForm.get('marcaMrm'); }
  get mrmsolucion() {return this.formMermaEstado.get('mrmsolucion'); }
  mermasForm: FormGroup;
    idproducto: any;
    MotivoActualizado = '';



  ngOnInit(): void {
      this.datos$ = this.secoind.getInfoReloj();
      this.datos$.subscribe(x => {
          this.hora = x.hora;
          this.minutos = x.minutos;
          this.segundos = x.segundo;
      });
      this.spinnerService.show();
      this.categoriasAsync();
      this.busquedaproducto();
      this.hora_horarica();
      this.mermashoy();
      this.actualizarhoras();
      this.busquedaproductos();
      this.spinnerService.hide();

  }
  async busquedaproducto() {
    return this.productos = this.categoryservice.categorias().pipe(takeUntil(this.unsubscribe$));
  }

   busquedaproductos() {
      return this.marcas = this.categoryservice.products();
  }

   categoriasAsync() {
   return this.categorias = this.categoryservice.products();

  }
  async mermashoy() {
     this.mermas_dia = this.categoryservice.mermasdeldia().pipe(takeUntil(this.unsubscribe$));
     return this.mermas_dia;
  }

  guardarmermas() {
    console.log('guardar mermas', this.mermasForm.value);
  }

actualizarhoras() {
   const hora =  window.document.getElementById('hora');
   setTimeout('hora', 1000);
   console.log('la hora', this.hora_horarica());
}
  refrescar() {
  /*  this.mermasForm.patchValue({
      CategoriasFrm: new FormControl('') ,
      ProductosFrm: new FormControl(''),
      UnidadesFrm: new FormControl(''),
      CausaFrm: new FormControl(''),
    });
    this.mermas.controls.splice(0, this.mermas.length)*/
  }

  cambiofrm() {
this.frmCategoria = this.mermasForm.value.categoriasMrm;
  }
  cambicatego() {
    console.log(this.mermasForm.value.marcaMrm);
    this.frmMarca = this.mermasForm.value.marcaMrm;

  }

  hora_horarica() {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

   guardarmerma(mermasForm) {
    // this.categoryservice.buscarelstockporID(mermasForm.value.product_id).subscribe(  (res) => {
      //   this.stockactulizar = res });
            mermasForm.value.hora = this.hora + ':' + this.minutos + ':' + this.segundos;
            const da = mermasForm.value.product_id;
            mermasForm.value.product_id = da.id;
       // tslint:disable-next-line:triple-equals
            if (mermasForm.value.causaMrm != 'No, en factura') {     da.stock.pstock = da.stock.pstock - mermasForm.value.unidadesMrm; }
            da.stock.stock_lost = da.stock.stock_lost + mermasForm.value.unidadesMrm;
            console.log('Mermas ingresada', mermasForm.value);
            try {
          this.categoryservice.guardarMerma(mermasForm.value).subscribe();
          this.categoryservice.actualizarstock(da.stock).subscribe(res => res);
      } catch (e) {
          alert('No se pudo guardar la merma' + e);
      }

            this.mermasForm.reset();
  }


    press(Contenidos, mermas) {

      this.modalService.open(Contenidos, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

      this.datosMermas = mermas;
      console.log('merma', this.datosMermas);

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

   async UpdateStadoMerma(datosMermas) {
      if (!this.formMermaEstado.valid) {
                alert('debe ingresar un comentario pára actualizar el estado de la merma.');
            } else {
          try {
              await  this.actualizar_estado(datosMermas);
            await this.guardarregistromerma(datosMermas);
          } catch (e) {
              console.log('ocurrio un error', e);
          }

      }
    }

   actualizar_estado(actm ) {
        actm.solution_boolean =  true;
      console.log("esto entra", actm)
      this.categoryservice.UpdateMermaEstado(actm);
    }

    guardarregistromerma(mermas) {
                this.formMermaEstado.value.decrease_id = mermas.id;
                this.categoryservice.GuardarRegistro(this.formMermaEstado.value);
    }
}
