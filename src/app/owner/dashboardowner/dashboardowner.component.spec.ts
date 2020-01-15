import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardownerComponent } from './dashboardowner.component';

describe('DashboardownerComponent', () => {
  let component: DashboardownerComponent;
  let fixture: ComponentFixture<DashboardownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
