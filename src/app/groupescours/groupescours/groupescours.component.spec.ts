import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupescoursComponent } from './groupescours.component';

describe('GroupescoursComponent', () => {
  let component: GroupescoursComponent;
  let fixture: ComponentFixture<GroupescoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupescoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupescoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
