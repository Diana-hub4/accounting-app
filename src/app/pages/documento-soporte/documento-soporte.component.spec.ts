import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoSoporteComponent } from './documento-soporte.component';

describe('DocumentoSoporteComponent', () => {
  let component: DocumentoSoporteComponent;
  let fixture: ComponentFixture<DocumentoSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentoSoporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
