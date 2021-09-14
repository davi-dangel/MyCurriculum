import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryBadgeComponent } from './jquery-badge.component';

describe('JqueryBadgeComponent', () => {
  let component: JqueryBadgeComponent;
  let fixture: ComponentFixture<JqueryBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
