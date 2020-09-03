import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProgressComponent } from './status-progress.component';

describe('StatusProgressComponent', () => {
  let component: StatusProgressComponent;
  let fixture: ComponentFixture<StatusProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
