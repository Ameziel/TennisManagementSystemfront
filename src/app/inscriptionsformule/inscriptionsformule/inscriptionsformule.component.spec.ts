import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsformuleComponent } from './inscriptionsformule.component';

describe('InscriptionsformuleComponent', () => {
  let component: InscriptionsformuleComponent;
  let fixture: ComponentFixture<InscriptionsformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsformuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
