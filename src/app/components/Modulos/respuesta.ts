export class respuesta{
    resultado: string ='';
}

export class guardado{
    guardado: string = ''
}

export class stock_perdidos{
    stock_lost:number = 0
}

export class ganancia_ateriores{
    mes_anterior_es= 0
}

export class proveedores_lista{

    nombre_provider:string = ''

    constructor(nombre_provider:string){
            this.nombre_provider = nombre_provider
    }
}

export class resiviendo{
    id:number;
    cnombre: string;
    created_at:string;

    constructor(id:number, cnombre:string, created_at:string){
        this.id = id
        this.cnombre = cnombre
        this.created_at = created_at
    }
}
export class resivendoMarca{
    id: number;
    bnombre:string;
    created_at:string;
    constructor(id:number, bnombre:string, created_at:string){
        this.id = id
        this.bnombre = bnombre;
        this.created_at = created_at
    }
}

export class dada {
    id:number
}