import {Voucher} from "./Voucher";
import {Productos} from "./Productos";

export class DetalleVoucher {
    id: number;
    dvcantidad: number[];
    dvprecio: number;
    voucher_id= new Voucher();
    product_id = new Productos();
    product: Productos[];
    voucher: Voucher[];
    created_at: string;
}

