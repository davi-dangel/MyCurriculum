import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBadgeComponent } from './js-badge.component';

describe('JsBadgeComponent', () => {
  let component: JsBadgeComponent;
  let fixture: ComponentFixture<JsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
