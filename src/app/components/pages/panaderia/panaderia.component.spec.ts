import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaderiaComponent } from './panaderia.component';

describe('PanaderiaComponent', () => {
  let component: PanaderiaComponent;
  let fixture: ComponentFixture<PanaderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanaderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
