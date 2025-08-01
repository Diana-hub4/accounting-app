import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LateralMenuConiaComponent } from './lateral-menu-conia.component';

describe('LateralMenuConiaComponent', () => {
  let component: LateralMenuConiaComponent;
  let fixture: ComponentFixture<LateralMenuConiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralMenuConiaComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralMenuConiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
