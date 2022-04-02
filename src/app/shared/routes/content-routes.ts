import {Routes} from '@angular/router';
import {VerificadorService} from "../../Service/verificador.service";


export const
    content: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [VerificadorService],

  },
  {
    path: 'products',
    loadChildren: () => import('../../components/products/products.module').then(m => m.ProductsModule),
    data: {
      breadcrumb: "Productos"
    }
  },

  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: "Pagos"
    },

  },
  {
    path: 'auth',
    loadChildren: () => import('../../components/auth/auth.module').then(m => m.AuthModule),
    data:{
      breadcrumb: "Autentificación"
    }
  },

  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    canActivate: [VerificadorService],
    data: {
      breadcrumb: "Usuario"
    }
  },
  {
   path:'merma',
   loadChildren: () => import('../../components/merma/merma.module').then(m => m.MermaModule),
   data: {
     breadcrumb: "Mermas"
    }
  },
  {
    path:"pruebanavegacion",
    loadChildren: () => import('../../components/pruebanavegacion/pruebanavegacion.module').then(m => m.PruebanavegacionModule)
  },
  {
    path: 'estacionaimiento',
    loadChildren: () => import('../../components/estacionamiento/estacionamiento.module'). then(m => m.EstacionamientoModule)
  },

];

