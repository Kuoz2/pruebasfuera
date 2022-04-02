import { VerificarTokenService } from './verificar-token.service';
import { VerificadorService } from './verificador.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DetalleVoucher} from '../components/Modulos/DetalleVoucher';
import {Voucher} from '../components/Modulos/Voucher';
import {Observable} from 'rxjs';
import {V_Producto} from '../components/Modulos/GANANCIAS';

import {Reporete_perdidas_grafico, Reporte_grafico, totalperdiaspriminv, totalventasrapidas, Venta_mes_atras, Venta_por_mes, } from '../components/Modulos/reporte_grafico';
import { dada, respuesta } from '../components/Modulos/respuesta';

@Injectable({
  providedIn: 'root'
})

export class VoucherService {

  //de forma local se aran el ingreso.
  Pruebaurldetallevoucher = 'https://multikart-norte.herokuapp.com/voucher_details';
  PruebaUrlvoucher = 'https://multikart-norte.herokuapp.com/vouchers';
  PruebaUrlultvoucher = 'https://multikart-norte.herokuapp.com/vouchers/showlast';
  PruebaUrlVntMes = 'https://multikart-norte.herokuapp.com/show_date';
  PruebaUrlVentasTotal = 'https://multikart-norte.herokuapp.com/voucher_details/show_cantidad';
  PruebaUrlmespasado = 'https://multikart-norte.herokuapp.com/voucher_details/show_after_month';
  PruebaUrlproductosV = 'https://multikart-norte.herokuapp.com/voucher_details/producto_max_vend';
  PruebaUrltotalganacias = 'https://multikart-norte.herokuapp.com/voucher_details/las_ganancias_totales_meses';
  PruebaUrltotalganancias_FV = 'https://multikart-norte.herokuapp.com/vouchers/mostrar_ganancias_por_mes';
  PruebaUrlGuardarconfig = 'https://multikart-norte.herokuapp.com/config_vouchers';
  PruebaInformeXML = 'https://multikart-norte.herokuapp.com/archives'
  pruebaenvioxml = 'https://multikart-norte.herokuapp.com/archives/'
  prueba_perdidaxmes='https://multikart-norte.herokuapp.com/stocks/buscar_las_fechas_perdidas';
  prueba_inventarioperdida2 ='https://multikart-norte.herokuapp.com/date_expirations/buscar_las_fechas_perdidas'
  todaslasperdidas = 'https://multikart-norte.herokuapp.com/date_expirations/todaslasperdidasdos'
  pruebatodaslasperdidasdinv1 ='https://multikart-norte.herokuapp.com/stocks/todaslasperdiadasinvprim'
  pruebaquicksales = 'https://multikart-norte.herokuapp.com/quick_sales/ventarapida_fechas'
  totalventasrapidas = 'https://multikart-norte.herokuapp.com/quick_sales/totalventasrapidas'
  codeVoucher = 'https://multikart-norte.herokuapp.com/codes'
  ultimoemitido = 'https://multikart-norte.herokuapp.com/codes/last_code'
  constructor(private http: HttpClient , private verificar: VerificarTokenService) { }
  // Ganancias totales del mes pasado.
  ganancia_mes_anterior(): Observable<Venta_mes_atras> {
      return this.http.get<Venta_mes_atras>(this.PruebaUrlmespasado);
  }

  // Ganancias este mes
  cantidad_vendida(): Observable<Venta_por_mes> {
      return this.http.get<Venta_por_mes>(this.PruebaUrlVentasTotal);
  }

  // Lista de productos vendidos.
    p_vendidos() {
      return this.http.get<V_Producto[]>(this.PruebaUrlproductosV);
    }
    // Productos de este mes
  vnts_mes(): Observable<DetalleVoucher> {
        return this.http.get<DetalleVoucher>(this.PruebaUrlVntMes);
  }

   crearvoucher(deta: DetalleVoucher){
     console.log(deta)
    this.verificar.verificarSaveVouchDetai().subscribe((res: respuesta) => {
      if (res.resultado != 'existe') { return; }
      if (res.resultado == 'existe') {
        console.log(res)
    return this.http.post<DetalleVoucher>(this.Pruebaurldetallevoucher, deta).subscribe(res => console.log(res));
  }
})
  }
  crearunvoucher(vouch: Voucher) {
    return  this.http.post<Voucher>(this.PruebaUrlvoucher, vouch);
  }

 ultimovoucher(): Observable<Voucher> {
      return  this.http.get<Voucher>(this.PruebaUrlultvoucher);
  }

  mostratodo() {
    return this.http.get<DetalleVoucher>(this.Pruebaurldetallevoucher);
  }

  mostrar_promise(){
    return this.http.get(this.Pruebaurldetallevoucher).toPromise();
  }

  detalledeventa(): Observable<DetalleVoucher[]> {
      return this.http.get<DetalleVoucher[]>(this.Pruebaurldetallevoucher);
  }
  
  mostrarvoucher(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(this.PruebaUrlvoucher);
  }

  // Muesta todas las ganancias obtenidas asta ahora.
    muestra_todas_ganancias() {
      return this.http.get<Reporte_grafico>(this.PruebaUrltotalganacias);
    }
    // Muesta el total de las ganancias este mes. CON LOS RESULTADOS Y EL MES.
    mostrar_ganancias_fv() {
        return this.http.get<any[]>(this.PruebaUrltotalganancias_FV);
    }
      //Muestra las perdidas por mes.
    mostrar_perdidasXmes(){
      return this.http.get<any[]>(this.prueba_perdidaxmes)
    }

    guardarcambios(d) {
      this.http.post(this.PruebaUrlGuardarconfig, d);
    }

    // Guardar el xml para enviarlo por email.
    PostANDSendXML(xml){
      this.http.post(this.PruebaInformeXML, xml).subscribe(res => {console.log("envio",res)})
    }


    //Inventario 2 de perdidas.
    perdidas_inventario2(){
      return this.http.get<any[]>(this.prueba_inventarioperdida2)
    }

    //Muestra todas las perdidas
    todaslasperdiadsinventario2(){
        return this.http.get<Reporete_perdidas_grafico>(this.todaslasperdidas)
    }

    //Todas las perdidas del inventario primario.
    todaslasperdidasdinventario1(){
      return this.http.get<totalperdiaspriminv>(this.pruebatodaslasperdidasdinv1)
    }

    //Todas las ventas rapidas
    ventasrapidas(){
        return this.http.get<any[]>(this.pruebaquicksales)
    }

    //Total de las ventas rapidas
    totalventasR(){
      return this.http.get<totalventasrapidas>(this.totalventasrapidas)
    }

    //Busqueda del voucher emitidos
    buscaVoucherEmitido(){
      return this.http.get(this.codeVoucher)
    }

    //encontrar los ultimos emitidos

    buscarultimosemitidos(){
      return this.http.get(this.ultimoemitido)
    }
}
