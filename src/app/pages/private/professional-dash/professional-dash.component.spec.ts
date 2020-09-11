import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDashComponent } from './professional-dash.component';

describe('ProfessionalDashComponent', () => {
  let component: ProfessionalDashComponent;
  let fixture: ComponentFixture<ProfessionalDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
