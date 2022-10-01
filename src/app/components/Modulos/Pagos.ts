import {Medio} from "./Medio";
import {Ventas} from "./Ventas";

export class Pagos {
    pagomonto: number;
    pagovuelto: number;
    half_payment_id: number;
    id: number;
    created_at: string;
}

export class PagoHecho {
    total:number = 0
}