import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalValidationDashComponent } from './professional-validation-dash.component';

describe('ProfessionalValidationDashComponent', () => {
  let component: ProfessionalValidationDashComponent;
  let fixture: ComponentFixture<ProfessionalValidationDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalValidationDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalValidationDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
