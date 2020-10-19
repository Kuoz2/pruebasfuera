import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PruebaRelojComponent} from './prueba-reloj.component';

describe('PruebaRelojComponent', () => {
  let component: PruebaRelojComponent;
  let fixture: ComponentFixture<PruebaRelojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaRelojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
