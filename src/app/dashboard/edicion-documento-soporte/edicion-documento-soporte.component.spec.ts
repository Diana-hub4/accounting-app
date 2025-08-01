import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicionDocumentoSoporteComponent } from './edicion-documento-soporte.component';

describe('EdicionDocumentoSoporteComponent', () => {
  let component: EdicionDocumentoSoporteComponent;
  let fixture: ComponentFixture<EdicionDocumentoSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDocumentoSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDocumentoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
