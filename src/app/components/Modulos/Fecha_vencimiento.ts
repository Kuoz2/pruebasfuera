// tslint:disable-next-line:class-name
export class Fecha_vencimiento {
    // tslint:disable-next-line:variable-name
    brand;
    // tslint:disable-next-line:variable-name
    brand_id: number;
    category;
    // tslint:disable-next-line:variable-name
    category_id: number;
    // tslint:disable-next-line:variable-name
    fecha_vencimiento: string;
    id: number;
    pdescripcion: string;
    // tslint:disable-next-line:variable-name
    date_expiration: DateExpiration = new DateExpiration();

}


export class DateExpiration {
    // tslint:disable-next-line:variable-name
    fecha_vencimiento: string;

}
