import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutGroupecoursComponent } from './form-ajout-groupecours.component';

describe('FormAjoutGroupecoursComponent', () => {
  let component: FormAjoutGroupecoursComponent;
  let fixture: ComponentFixture<FormAjoutGroupecoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutGroupecoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutGroupecoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
