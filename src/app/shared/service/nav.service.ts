import {HostListener, Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WINDOW} from './windows.service';

// Menu
export interface Menu {
path?: string;
title?: string;
icon?: string;
type?: string;
badgeType?: string;
badgeValue?: string;
active?: boolean;
bookmark?: boolean;
children?: Menu[];
rol?: string;
}


@Injectable({
providedIn: 'root'
})

export class NavService {
constructor(@Inject(WINDOW) private window, ) {
this.onResize();
if (this.screenWidth < 991) {
this.collapseSidebar = true;
}
}

public screenWidth: any;
public collapseSidebar = false;
MENUITEMS: Menu[] = [

{
path: '/dashboard/default', rol: 'administrador', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
},
{
title: 'Productos' , icon: 'box', rol: '', type: 'sub', active: false,  children: [

{ path: '/products/physical/lista-editar'  , rol: '', title: 'Inventario', type: 'link' },
{ path: '/products/physical/add-product', rol: '', title: 'Agregar producto', type: 'link' },
{ path: '/products/physical/proveedor', rol: '', title: 'Proveedor', type: 'link'},
{ path: '/products/physical/promociones', rol: '', title: 'Promociones', type: 'link'},
{ path: '/products/physical/impuestos', rol: '', title: 'Impuestos', type: 'link'},
{path: '/products/brands/marca', rol: '', title: 'Marcas', type: 'link'},
{path: '/products/categorias/category', rol: '', title: 'Categoría', type: 'link'},
{path: '/products/physical/vencimiento', rol: '', title: 'Vencidos', type: 'link'	},
{path: '/products/codigo', rol: 'administrador', title:'Código', type:'link'},
{path: '/products/presupuesto', rol:'administrador', title:'Presupuesto', type:'link'}

]
},


		{
			title: 'Pagos', icon: 'clipboard', rol: '', type: 'sub', active: false, children: [
				{path: '/pages/create-voucher', rol: '', title: 'Crear Pago', type: 'link'},
				{path: '/pages/lista-pago', rol: '', title: 'Lista Pagos', type: 'link'},
				{path: '/pages/medio-pago', rol: '', title: 'Medio de pago', type: 'link', },
				{path: '/pages/app-pago', rol: '', title: 'App de pago', type: 'link'},
				{path: '/pages/boleta', rol: 'administrador', title: 'Boleta', type: 'link'},
				{path: '/pages/comparar', rol:'administrador', title:'Comparación', type: 'link'}
			]
		},

		{
			title: 'Usuarios', rol: 'administrador', icon: 'user-plus', type: 'sub', active: false, children: [
				{
					path: '/users/create-user', rol: 'administrador', title: 'Crear usuario', type: 'link'
				}
			]
		},

		{
			title: 'Mermas', type: 'sub', rol: '', icon: 'book', active: false, children: [
				{
					path: '/merma/ingresar', rol: '', title: 'Situación', type: 'link'
				},
				{
					path: '/merma/solucion-merma', rol: '', title: 'Solucion Mrm', type: 'link'
				}
			]
		}, 
		{
			title: 'botonesnavegacion', type: 'sub', rol:'', icon:'eye', active:false, children:[
				{
					path:'/pruebanavegacion/botoncillo', rol:'', title: 'navegable', type:'link'
				}
			]
		}
		

	];
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}


}
