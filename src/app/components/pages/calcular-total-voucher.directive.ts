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
