import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlBadgeComponent } from './sql-badge.component';

describe('SqlBadgeComponent', () => {
  let component: SqlBadgeComponent;
  let fixture: ComponentFixture<SqlBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
