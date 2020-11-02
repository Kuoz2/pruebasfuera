import {Stock} from "./Productos";
import {Categories} from "./Categories";
import {Marca} from "./Marca";

export class Item {
    pvactivacioncatalogo: boolean;
    pactivado: boolean;
    category_id: Categories[];
    ppictures: any;
    id: number;
    pdescripcion: string;
    pcodigo: number;
    pdetalle: string;
    pvalor: number;
    stock_id: Stock[];
    stock = new Stock();
    cantidad:number;
    quantity: number;
    category = new Categories()
    brand = new Marca()
    piva: number
}
export interface IItem {
    id:number,
    img:string,
    name:string,
    description:string,
    price:number,
    quantity:number
}
