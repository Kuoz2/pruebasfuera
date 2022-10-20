import { VentasService } from 'src/app/Service/ventas.service';
import { Directive, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[datos_sumar]'
})
export class CalcularTotalVoucherDirective implements OnInit {
  @Input() datos_sumar:any[] = []
  @Output() guardar_Datos
  constructor(private almacenamiento: VentasService) { }
  ngOnInit() {
    this.calcular_Total(this.datos_sumar)
  }
  itemcomprados=[]
  calcular_Total(a){
   this.guardar_Datos = this.almacenamiento.guardar_aqui(a)
   console.log("resultado", this.guardar_Datos)
  }
}
@Directive({
  selector: '[dats_busq]'
})
export class DestacarDirective implements OnInit{
  @Input() dats_busq:any[] = []

  constructor(private vnt:VentasService) { }
  ngOnInit(): void {
    this.vnt.obtener_items2(this.dats_busq)
    console.log("datos de busqueda", this.dats_busq)
  }
 
}