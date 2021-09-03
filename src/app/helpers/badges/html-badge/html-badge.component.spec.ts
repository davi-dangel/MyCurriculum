import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBadgeComponent } from './html-badge.component';

describe('HtmlBadgeComponent', () => {
  let component: HtmlBadgeComponent;
  let fixture: ComponentFixture<HtmlBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
