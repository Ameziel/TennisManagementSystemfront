import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutInscriptionformuleComponent } from './form-ajout-inscriptionformule.component';

describe('FormAjoutInscriptionformuleComponent', () => {
  let component: FormAjoutInscriptionformuleComponent;
  let fixture: ComponentFixture<FormAjoutInscriptionformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutInscriptionformuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutInscriptionformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
