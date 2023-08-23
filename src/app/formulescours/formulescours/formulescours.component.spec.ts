import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulescoursComponent } from './formulescours.component';

describe('FormulescoursComponent', () => {
  let component: FormulescoursComponent;
  let fixture: ComponentFixture<FormulescoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulescoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulescoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
