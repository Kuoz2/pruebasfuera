import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentvoucherComponent } from './currentvoucher.component';

describe('CurrentvoucherComponent', () => {
  let component: CurrentvoucherComponent;
  let fixture: ComponentFixture<CurrentvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
