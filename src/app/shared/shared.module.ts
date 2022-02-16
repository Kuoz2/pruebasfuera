import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


import {FeatherIconsComponent} from './components/feather-icons/feather-icons.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

import {ToggleFullscreenDirective} from "./directives/fullscreen.directive";
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {NavService} from './service/nav.service';
import {WINDOW_PROVIDERS} from './service/windows.service';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RightSidebarComponent} from './components/right-sidebar/right-sidebar.component';
import {PipePipe} from './Pipe/pipe.pipe';
import {BuscarproductoPipe} from './Pipe/buscarproducto.pipe';
import {VentasfilterPipe} from './Pipe/ventasfilter.pipe';
import {BusquedaAppPipe} from './Pipe/busqueda-app.pipe';
import {TranformarImagenPipe} from './Pipe/tranformar-imagen.pipe';
import {BusquedacategoriappPipe} from './Pipe/busquedacategoriapp.pipe';
import {BuscarselectPPipe} from './Pipe/buscarselect-p.pipe';
import {AgregarmasmermasPipe} from './Pipe/agregarmasmermas.pipe';
import {InventarioGestionPipe} from './Pipe/inventario-gestion.pipe';
import {InventarionsanoPipe} from './Pipe/inventarionsano.pipe';
import {InventariopeligroPipe} from './Pipe/inventariopeligro.pipe';
import {BuscarmarcaPipe} from './Pipe/buscarmarca.pipe';
import {CeparadorPipe} from './Pipe/ceparador.pipe';
import { Inventariosano2Pipe } from './Pipe/inventariosano2.pipe';
import { Inventariogestion2Pipe } from './Pipe/inventariogestion2.pipe';
import { Inventariosinstock2Pipe } from './Pipe/inventariosinstock2.pipe';
import { Busqueda2inventarioPipe } from './Pipe/busqueda2inventario.pipe';
import { RangodefechasPipe } from './Pipe/rangodefechas.pipe';
import { Comproduc1Pipe } from './Pipe/comproduc1.pipe';
import { Comproduc2Pipe } from './Pipe/comproduc2.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MinimarketfilterPipe } from './Pipe/minimarketfilter.pipe';

@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    FeatherIconsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    PipePipe,
    BuscarproductoPipe,
    VentasfilterPipe,
    BusquedaAppPipe,
    TranformarImagenPipe,
    BusquedacategoriappPipe,
    BuscarselectPPipe,
    AgregarmasmermasPipe,
    InventarioGestionPipe,
    InventarionsanoPipe,
    InventariopeligroPipe,
    BuscarmarcaPipe,
    CeparadorPipe,
    Inventariosano2Pipe,  
      Inventariogestion2Pipe,
       Inventariosinstock2Pipe,
        Busqueda2inventarioPipe, 
        RangodefechasPipe, 
        Comproduc1Pipe, 
        Comproduc2Pipe, 
        MinimarketfilterPipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [NavService, WINDOW_PROVIDERS],
    exports: [FeatherIconsComponent,
       ToggleFullscreenDirective,
        PipePipe, BuscarproductoPipe,
         VentasfilterPipe, BusquedaAppPipe,
          TranformarImagenPipe,
           BusquedacategoriappPipe,
            BuscarselectPPipe,
             AgregarmasmermasPipe,
              InventarioGestionPipe,
              Inventariogestion2Pipe,
               Inventariosinstock2Pipe,
                InventarionsanoPipe, 
                InventariopeligroPipe,
                 BuscarmarcaPipe,
                  CeparadorPipe,
                   Inventariosano2Pipe,
                  Busqueda2inventarioPipe, 
                  RangodefechasPipe, MinimarketfilterPipe]
})
export class SharedModule { }
