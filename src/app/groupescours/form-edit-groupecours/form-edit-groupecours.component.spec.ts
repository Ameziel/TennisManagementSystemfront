import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditGroupecoursComponent } from './form-edit-groupecours.component';

describe('FormEditGroupecoursComponent', () => {
  let component: FormEditGroupecoursComponent;
  let fixture: ComponentFixture<FormEditGroupecoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditGroupecoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditGroupecoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
