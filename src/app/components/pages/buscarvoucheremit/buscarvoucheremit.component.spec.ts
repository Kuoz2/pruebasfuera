import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarvoucheremitComponent } from './buscarvoucheremit.component';

describe('BuscarvoucheremitComponent', () => {
  let component: BuscarvoucheremitComponent;
  let fixture: ComponentFixture<BuscarvoucheremitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarvoucheremitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarvoucheremitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
