import {HostListener, Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WINDOW} from "./windows.service";

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
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(@Inject(WINDOW) private window) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		},
		{
			title: 'Productos', icon: 'box', type: 'sub', active: false,  children: [

						{ path: '/products/physical/category', title: 'Categorias', type: 'link'},
						{ path: '/products/physical/lista-editar', title: 'Lista y editar productos', type: 'link' },
						{ path: '/products/physical/add-product', title: 'Agregar producto', type: 'link' },
						{path: '/products/physical/agregar-marca', title: ' Agregar marca', type: 'link'},
						{ path: '/products/physical/proveedor', title:'Proveedor', type:'link'}

			]
		},


		{
			title: 'Pagos', icon: 'clipboard', type: 'sub', active: false, children: [
				{path: '/pages/create-Pago', title: 'Crear Pago', type: 'link'},
				{path: '/pages/lista-Pago', title: 'Lista Pagos', type: 'link'},
				{path: '/pages/medio-pago', title: 'Medio de pago', type: 'link'},
				{path:'/pages/app-pago', title:'App de pago', type:'link'}
			]
		},

		{
			title: 'Reportes', path: '/reports', icon: 'bar-chart', type: 'link', active: false
		},
		{
			title: 'Inicio',path: '/auth/login', icon: 'log-in', type: 'link', active: false
		}
	];
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
