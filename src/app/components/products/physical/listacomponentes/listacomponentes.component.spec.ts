import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomponentesComponent } from './listacomponentes.component';

describe('ListacomponentesComponent', () => {
  let component: ListacomponentesComponent;
  let fixture: ComponentFixture<ListacomponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacomponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
