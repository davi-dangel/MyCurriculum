import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBadgeComponent } from './angular-badge.component';

describe('AngularBadgeComponent', () => {
  let component: AngularBadgeComponent;
  let fixture: ComponentFixture<AngularBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
