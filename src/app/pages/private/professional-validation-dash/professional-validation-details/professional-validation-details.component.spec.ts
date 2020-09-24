import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalValidationDetailsComponent } from './professional-validation-details.component';

describe('ProfessionalValidationDetailsComponent', () => {
  let component: ProfessionalValidationDetailsComponent;
  let fixture: ComponentFixture<ProfessionalValidationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalValidationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalValidationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
