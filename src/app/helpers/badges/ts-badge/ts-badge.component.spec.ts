import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsBadgeComponent } from './ts-badge.component';

describe('TsBadgeComponent', () => {
  let component: TsBadgeComponent;
  let fixture: ComponentFixture<TsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
