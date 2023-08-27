import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditFormulecoursComponent } from './form-edit-formulecours.component';

describe('FormEditFormulecoursComponent', () => {
  let component: FormEditFormulecoursComponent;
  let fixture: ComponentFixture<FormEditFormulecoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditFormulecoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditFormulecoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
