import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesnavegacionComponent } from './botonesnavegacion.component';

describe('BotonesnavegacionComponent', () => {
  let component: BotonesnavegacionComponent;
  let fixture: ComponentFixture<BotonesnavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesnavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesnavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
