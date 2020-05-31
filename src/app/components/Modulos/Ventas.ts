import {Voucher} from "./Voucher";
import {Pagos} from "./Pagos";
import {Documentos} from "./Documentos";

export class Ventas {
    voucher_id: number;
    payment_id = new Pagos();
    id: number;
}