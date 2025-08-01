import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterConiaComponent } from './footer-conia.component';

describe('FooterConiaComponent', () => {
  let component: FooterConiaComponent;
  let fixture: ComponentFixture<FooterConiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterConiaComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterConiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
