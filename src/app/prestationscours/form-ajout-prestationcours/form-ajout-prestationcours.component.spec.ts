import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutPrestationscoursComponent } from './form-ajout-prestationscours.component';

describe('FormAjoutPrestationscoursComponent', () => {
  let component: FormAjoutPrestationscoursComponent;
  let fixture: ComponentFixture<FormAjoutPrestationscoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutPrestationscoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutPrestationscoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
