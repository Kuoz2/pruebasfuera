import {Categories} from "./Categories";

export class Productos {
    pvactivacioncatalogo: boolean;
    pactivado: boolean;
    category: Categories[];
    category_id: Categories[];
    ppicture: any;
    id: number;
    pdescripcion: string;
    pcodigo: number;
    pdetalle: string;
    pvalor: number;
    stock_id: Stock =  new Stock()
    stock:Stock = new Stock()
    cantidad:number;
    quantity: number;
    munidades:number;
    piva:number;
    vpcventa:number;
}


export class Stock {
    id:number;
    pstock:number;
    pstockcatalogo:number;
    stock_lost:number;
    stock_security:number;
}
