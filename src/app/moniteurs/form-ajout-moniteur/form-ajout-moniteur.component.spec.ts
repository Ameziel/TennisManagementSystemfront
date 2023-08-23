import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutMoniteurComponent } from './form-ajout-moniteur.component';

describe('FormAjoutMoniteurComponent', () => {
  let component: FormAjoutMoniteurComponent;
  let fixture: ComponentFixture<FormAjoutMoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutMoniteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
