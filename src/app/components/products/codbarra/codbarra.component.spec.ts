import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodbarraComponent } from './codbarra.component';

describe('CodbarraComponent', () => {
  let component: CodbarraComponent;
  let fixture: ComponentFixture<CodbarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodbarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodbarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
