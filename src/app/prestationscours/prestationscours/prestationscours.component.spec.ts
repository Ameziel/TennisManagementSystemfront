import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationscoursComponent } from './prestationscours.component';

describe('PrestationscoursComponent', () => {
  let component: PrestationscoursComponent;
  let fixture: ComponentFixture<PrestationscoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationscoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationscoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
