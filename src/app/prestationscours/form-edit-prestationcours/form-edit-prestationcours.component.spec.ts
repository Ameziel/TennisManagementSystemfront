import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPrestationcoursComponent } from './form-edit-prestationcours.component';

describe('FormEditPrestationcoursComponent', () => {
  let component: FormEditPrestationcoursComponent;
  let fixture: ComponentFixture<FormEditPrestationcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditPrestationcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditPrestationcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
