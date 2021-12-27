import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import {NavService} from '../../service/nav.service';
import {AutentificacionService} from '../../../Service/autentificacion.service';
import {Router} from '@angular/router';
import {ProductserviceService} from '../../../Service/productservice.service';
import {Mermas} from '../../../components/Modulos/mermas';
import {__await} from 'tslib';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { MarcaService } from 'src/app/Service/marca.service';
import { ImpuestosService } from 'src/app/Service/impuestos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FnParam, THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit{
  // tslint:disable-next-line:variable-name
  public right_sidebar = false;
  public open = false;
  public openNav = false;
  public isOpenMobile: boolean;
  private Actualmermas: Mermas[];
  private mermasnogestionadas = [];
  public cantidad;
  public proIn = 0;
  public NuevoProdu: FormGroup;
  @Output() rightSidebarEvent = new EventEmitter<boolean>();
  get cnombre(){return this.NuevoProdu.get('cnombre')}
  get bnombre(){return this.NuevoProdu.get('bnombre')}
  get nombre_provider(){return this.NuevoProdu.get('nombre_provider')}
  get tnombre(){return this.NuevoProdu.get('tnombre')}
  get timpuesto(){return this.NuevoProdu.get('timpuesto')}
  
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal,public navServices: NavService,
              private offsession: AutentificacionService,
              private router: Router,
              private Cmemrmas: ProductserviceService, 
               private categoria: CategoriasService, 
              private marca: MarcaService,
               private proveedor: ProductserviceService,
               private impuesto: ImpuestosService,
               private frm: FormBuilder,
               private servprd: ProductserviceService
              ) {this.NuevoProdu = this.frm.group({
                cnombre: new FormControl('',[Validators.required]),
                bnombre: new FormControl('', [Validators.required]),
                nombre_provider: new FormControl('', [Validators.required]),
                tnombre: new FormControl('',[Validators.required]),
                timpuesto: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(2)]))
              })  }
              @ViewChild('content', {static: false}) contenidoDelModal;
              public objetoVacio = {categoria: false, marca: false, proveedor: false, impuesto: false}
  ngAfterViewInit(): void {

  }
  async guardarProd(){
    if(this.NuevoProdu.valid){
     
    /* await this.categoria.guardainicialc({cnombre: this.NuevoProdu.value.cnombre})
     await this.marca.guardainicial({bnombre: this.NuevoProdu.value.bnombre})
     await this.proveedor.guardarnuevopro({nombre_provider: this.NuevoProdu.value.nombre_provider})*/
      const tnombre = this.NuevoProdu.value.tnombre
      const timpuesto = this.NuevoProdu.value.timpuesto
      const Elimpuesto = {tnombre, timpuesto }
      console.log('se genera ',Elimpuesto)
     await this.impuesto.iniguardar(Elimpuesto);
      this.NuevoProdu.reset()
    
    }else{
      alert("Rellene bien el formulario.")
    }
  }
 async _vacios(){
    //detecta si la categoria esta vacio
   await this.categoria.veri_categorias().subscribe((ver: boolean) => {
      this.objetoVacio.categoria = ver
       console.log(this.objetoVacio)
    } )
    // detecta si la marca esta vacio.
   await this.marca.datos_vacios().subscribe((ver: boolean) => {
      this.objetoVacio.marca = ver
      console.log(this.objetoVacio)
    })

    //detecta si el proveedor esta vacio.

   await this.proveedor.verificar_vacios().subscribe((ver: boolean) => {
      console.log(this.objetoVacio)

      this.objetoVacio.proveedor = ver
    })

    //detecta si el impuesto esta colocado.
   await this.impuesto._vacio_impuesto().subscribe((ver:boolean) => {
      console.log(this.objetoVacio)

      this.objetoVacio.impuesto = ver
    })
      console.log(this.objetoVacio)
    if(this.objetoVacio.categoria != false && this.objetoVacio.marca != false && this.objetoVacio.impuesto != false && this.objetoVacio.proveedor != false){
        this.openLg()
    }
  }
  openLg() {
    this.modalService.open(this.contenidoDelModal, { size: 'lg', centered: true });
  }
  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  cerrarsession() {
    this.offsession.logout();
    this.router.navigateByUrl('/login');
  }


    mermas() {
    return this.Cmemrmas.mermasdeldia().toPromise().then(
        res => {
          console.log('Mermas', res);
          this.Actualmermas = res;
          // tslint:disable-next-line:no-shadowed-variable
          this.Actualmermas.map((res) => {
            if (res.solution_boolean === false) {
              this.mermasnogestionadas.push(res);
            }
          });
          this.cantidad = this.mermasnogestionadas.length;
        }
    );
  }

  inventario_gestionable() {
    return this.Cmemrmas.inventario_gestion().then(
        res => {
                // @ts-ignore
          this.proIn = res.length;
          console.log('cantidad', this.proIn);
        }
    );
  }



   ngOnInit(): void {
    this._vacios()

    this.mermas().catch(
        // tslint:disable-next-line:no-shadowed-variable
        error => {console.log('el error', error); }
    ).finally();

    this.inventario_gestionable().catch(error => {
      {console.log('error inventario', error); }
    }).finally();
  }

 
}
