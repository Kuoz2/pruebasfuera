import { Pagos, PagoHecho } from './../components/Modulos/Pagos';
import { Observable, Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ventas} from '../components/Modulos/Ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  resultadoencontrado:Observable <any>
  private siguiendoresultado = new Subject<PagoHecho>();
   moduloVentaExport = new PagoHecho;
  constructor(private http: HttpClient) { }

  PruebaVentas = 'https://multikart-norte.herokuapp.com/sales';
  consu_code='https://multikart-norte.herokuapp.com/codes'
  almacenando = []
  mostrarventas() {
   return this.http.get<Ventas>(this.PruebaVentas);
  }

  guardarventas(vebta: Ventas) {
    return this.http.post<Ventas[]>(this.PruebaVentas, vebta);
  }

  consultar_code(code){
    console.log(code)
      return this.http.post(this.consu_code ,code).subscribe(res => {console.log("servicio panaderia",res)})
  }
  
  //Actualizar el antiguo registro
  actualizar_voucher(code, id){
    console.log("esta ingresando esta id", id)
    console.log("se esta actualizando este registro", code)
    return this.http.put(this.consu_code + '/'+ id, code).subscribe(res => { console.log("actualizando", res)})
  }

  guardar_aqui(b):Number{
    console.log(this.almacenando.length)
    this.almacenando.push(b)
    var SumTotal: number = 0
    SumTotal = this.almacenando.reduce((a,b) => a +b)
    console.log("lo almacenado",     SumTotal)
      this.moduloVentaExport.total = SumTotal
      console.log("total service",this.moduloVentaExport.total)
    return this.moduloVentaExport.total
  }

  guardarLimpiarVenta(){
    this.almacenando.splice(0, this.almacenando.length)
  }

}
