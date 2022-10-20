import { Pagos, PagoHecho, actualizarPago } from './../components/Modulos/Pagos';
import { Observable, Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ventas} from '../components/Modulos/Ventas';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  resultadoencontrado:Observable <any>
  private siguiendoresultado = new Subject<PagoHecho>();
  public informacion_arg = [];
  public moduloVenta = new actualizarPago
  public obteneritems2=[]
  public resultadoretornados = []
   moduloVentaExport = new PagoHecho;
  constructor(private http: HttpClient, private ngxspinner: NgxSpinnerService, private socket: WebsocketService) { 
  }

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
  argumentos_ingresado(a){
    this.informacion_arg.push(a)
    console.log("informacino ignresada", this.informacion_arg.push(a))
    return this.informacion_arg
  }

  obtener_items2(a){
    this.obteneritems2.push(a)
    
    console.log("items encontrador", this.moduloVenta)
    return this.obteneritems2
  }
  acutalizarlosregistros(){
    this.obteneritems2.forEach(res => {
      console.log(res)

     res.voucher_vendido = true

     this.http.put(this.consu_code  + '/' + res.id, res).subscribe((res) => {console.log('res', res)})
    })

  }
  emiitir_alsocket(){
    this.socket.emitir_unescucha()
 
  }

  recuperaremitido(){
    this.resultadoretornados.splice(0,this.resultadoretornados.length)
    this.socket.io.on('test2', async (a)=> {
      console.log("emitiendo",a)
      
     await this.resultadoretornados.push(a)
          console.log('RESULTADO ON DEL SOCKET', this.resultadoretornados)

    })


    return this.resultadoretornados
  }
}