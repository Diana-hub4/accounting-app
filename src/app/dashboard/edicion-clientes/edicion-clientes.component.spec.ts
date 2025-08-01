import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicionClientesComponent } from './edicion-clientes.component';

describe('EdicionClientesComponent', () => {
  let component: EdicionClientesComponent;
  let fixture: ComponentFixture<EdicionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
