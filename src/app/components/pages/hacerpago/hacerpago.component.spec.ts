import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerpagoComponent } from './hacerpago.component';

describe('HacerpagoComponent', () => {
  let component: HacerpagoComponent;
  let fixture: ComponentFixture<HacerpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacerpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
