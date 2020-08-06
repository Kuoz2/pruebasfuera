import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAppComponent } from './contenedor-app.component';

describe('ContenedorAppComponent', () => {
  let component: ContenedorAppComponent;
  let fixture: ComponentFixture<ContenedorAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
