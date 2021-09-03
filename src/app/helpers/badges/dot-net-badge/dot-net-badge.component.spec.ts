import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetBadgeComponent } from './dot-net-badge.component';

describe('DotNetBadgeComponent', () => {
  let component: DotNetBadgeComponent;
  let fixture: ComponentFixture<DotNetBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
