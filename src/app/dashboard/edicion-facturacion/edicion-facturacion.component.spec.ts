import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionFacturacionComponent } from './edicion-facturacion.component';

describe('EdicionFacturacionComponent', () => {
  let component: EdicionFacturacionComponent;
  let fixture: ComponentFixture<EdicionFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicionFacturacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
