import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActualizarbolComponent} from './actualizarbol.component';

describe('ActualizarbolComponent', () => {
  let component: ActualizarbolComponent;
  let fixture: ComponentFixture<ActualizarbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
