import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTestComponent } from './background-test.component';

describe('BackgroundTestComponent', () => {
  let component: BackgroundTestComponent;
  let fixture: ComponentFixture<BackgroundTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
