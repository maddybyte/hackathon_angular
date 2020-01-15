import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesfinereportComponent } from './feesfinereport.component';

describe('FeesfinereportComponent', () => {
  let component: FeesfinereportComponent;
  let fixture: ComponentFixture<FeesfinereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesfinereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesfinereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
