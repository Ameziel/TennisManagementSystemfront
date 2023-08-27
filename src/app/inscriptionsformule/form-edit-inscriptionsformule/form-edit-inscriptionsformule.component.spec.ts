import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditInscriptionsformuleComponent } from './form-edit-inscriptionsformule.component';

describe('FormEditInscriptionsformuleComponent', () => {
  let component: FormEditInscriptionsformuleComponent;
  let fixture: ComponentFixture<FormEditInscriptionsformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditInscriptionsformuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditInscriptionsformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
