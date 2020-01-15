import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenthistorysComponent } from './paymenthistorys.component';

describe('PaymenthistorysComponent', () => {
  let component: PaymenthistorysComponent;
  let fixture: ComponentFixture<PaymenthistorysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenthistorysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenthistorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
