import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBadgeComponent } from './bootstrap-badge.component';

describe('BootstrapBadgeComponent', () => {
  let component: BootstrapBadgeComponent;
  let fixture: ComponentFixture<BootstrapBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
