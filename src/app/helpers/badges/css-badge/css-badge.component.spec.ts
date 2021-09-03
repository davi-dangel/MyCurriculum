import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBadgeComponent } from './css-badge.component';

describe('CssBadgeComponent', () => {
  let component: CssBadgeComponent;
  let fixture: ComponentFixture<CssBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
