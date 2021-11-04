import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionVentaComponent } from './comparacion-venta.component';

describe('ComparacionVentaComponent', () => {
  let component: ComparacionVentaComponent;
  let fixture: ComponentFixture<ComparacionVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparacionVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparacionVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
