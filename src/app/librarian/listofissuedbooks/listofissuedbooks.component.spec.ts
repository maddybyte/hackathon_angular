import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofissuedbooksComponent } from './listofissuedbooks.component';

describe('ListofissuedbooksComponent', () => {
  let component: ListofissuedbooksComponent;
  let fixture: ComponentFixture<ListofissuedbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofissuedbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofissuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
