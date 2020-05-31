import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavoucherComponent } from './listavoucher.component';

describe('ListavoucherComponent', () => {
  let component: ListavoucherComponent;
  let fixture: ComponentFixture<ListavoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListavoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListavoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
