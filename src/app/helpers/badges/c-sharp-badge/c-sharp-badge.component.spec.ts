import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharpBadgeComponent } from './c-sharp-badge.component';

describe('CSharpBadgeComponent', () => {
  let component: CSharpBadgeComponent;
  let fixture: ComponentFixture<CSharpBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSharpBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSharpBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
