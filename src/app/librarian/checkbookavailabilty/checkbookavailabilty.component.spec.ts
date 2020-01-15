import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookavailabiltyComponent } from './checkbookavailabilty.component';

describe('CheckbookavailabiltyComponent', () => {
  let component: CheckbookavailabiltyComponent;
  let fixture: ComponentFixture<CheckbookavailabiltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookavailabiltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookavailabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
