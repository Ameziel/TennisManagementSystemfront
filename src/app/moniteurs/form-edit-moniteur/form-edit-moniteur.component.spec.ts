import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditMoniteurComponent } from './form-edit-moniteur.component';

describe('FormEditMoniteurComponent', () => {
  let component: FormEditMoniteurComponent;
  let fixture: ComponentFixture<FormEditMoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditMoniteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
