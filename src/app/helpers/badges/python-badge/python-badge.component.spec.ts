import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonBadgeComponent } from './python-badge.component';

describe('PythonBadgeComponent', () => {
  let component: PythonBadgeComponent;
  let fixture: ComponentFixture<PythonBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
