import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutFormulecoursComponent } from './form-ajout-formulecours.component';

describe('FormAjoutFormulecoursComponent', () => {
  let component: FormAjoutFormulecoursComponent;
  let fixture: ComponentFixture<FormAjoutFormulecoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutFormulecoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutFormulecoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
