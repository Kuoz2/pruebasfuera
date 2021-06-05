import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavService} from '../../service/nav.service';
import {AutentificacionService} from '../../../Service/autentificacion.service';
import {Router} from '@angular/router';
import {ProductserviceService} from '../../../Service/productservice.service';
import {Mermas} from '../../../components/Modulos/mermas';
import {error} from 'selenium-webdriver';
import {__await} from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public right_sidebar = false;
  public open = false;
  public openNav = false;
  public isOpenMobile: boolean;
  private Actualmermas: Mermas[];
  private mermasnogestionadas = [];
  public cantidad;
  public proIn = 0;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  // tslint:disable-next-line:max-line-length
  constructor(public navServices: NavService,
              private offsession: AutentificacionService,
              private router: Router,
              private Cmemrmas: ProductserviceService) { }

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
    this.mermas().catch(
        // tslint:disable-next-line:no-shadowed-variable
        error => {console.log('el error', error); }
    ).finally();

    this.inventario_gestionable().catch(error => {
      {console.log('error inventario', error); }
    }).finally();
  }

  emitiralerta() {
    alert('hola');
  }
}
