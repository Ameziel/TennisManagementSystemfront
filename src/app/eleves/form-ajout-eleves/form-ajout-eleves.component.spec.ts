import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutElevesComponent } from './form-ajout-eleves.component';

describe('FormAjoutElevesComponent', () => {
  let component: FormAjoutElevesComponent;
  let fixture: ComponentFixture<FormAjoutElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutElevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
