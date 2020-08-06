import {Categories} from "./Categories";
import {Marca} from "./Marca";

export class Productos {
    pvactivacioncatalogo: boolean;
    pactivado: boolean;
    category: Categories[];
    category_id: Categories[];
    brand_id: Marca[];
    ppicture: any;
    id: number;
    pdescripcion: string;
    pcodigo: number;
    pdetalle: string;
    pvalor: number;
    stock_id: Stock =  new Stock()
    stock:Stock = new Stock()
    cantidad:number;
    quantity: number
}


export class Stock {
    id:number;
    pstock:number;
    pstockcatalogo:number;
    stock_lost:number;
    stock_security:number;
}
