//Exporta las ventas totales de este mes.
import {Productos} from "./Productos";
export interface Reporte_grafico {
    ganancias_totales: number ;
}
//Datos toda las perdias del segundo inventario para el grafico
export interface  Reporete_perdidas_grafico {
    total_perdidas: number;
}

//todas las perdidas para el grafico de perdidas del ivnentario 1
export interface totalperdiaspriminv{
    totalperdiasinv: number;
}

export interface totalventasrapidas{
    totalventasR: number;
}

//Se recoje las ventas del mes.
export interface Venta_por_mes {
    ventas_mensual: number
}

//Se recoje las ventas del mes anterior.
export interface Venta_mes_atras {
    mes_anterior_es:number
}

//MUESTRA LAS GANANCIAS Y EL MES
export interface Ventas_mes_ganancias_fv{
    Jun:number,
    Jul:number
}

//OBTIENE LAS PERDIDAS DE ESTE MES.

export  interface Perdidas_este_mes {
    stock_lost: number,
    products: Products[]
}
export interface Products {
    pvalor: number
}
