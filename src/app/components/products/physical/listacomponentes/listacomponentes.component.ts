import { Categories } from './../../../Modulos/Categories';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listacomponentes',
  templateUrl: './listacomponentes.component.html',
  styleUrls: ['./listacomponentes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListacomponentesComponent implements OnInit {
  @Input() hijo: Observable<any>
    constructor(private cd: ChangeDetectorRef, private element: ElementRef, private renderer: Renderer2,) { }
  cambiado = new BehaviorSubject([])
  estoacabiado ;
  ngOnInit() {
  
}

  uncambio(hijo){
      console.log(hijo)
    this.cambiado.next([hijo])
    this.cambiado.pipe(map((x) => console.log(x))).subscribe(x =>  {this.estoacabiado = x; console.log('DelSub',x); this.cd.markForCheck()})
  
  }

  deverdadcambio(hijo){
    console.log(hijo)
  }
  versicambia(){
    this.estoacabiado = [...this.estoacabiado, this.hijo]

  }
}
