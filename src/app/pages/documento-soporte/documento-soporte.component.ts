import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-documento-soporte',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './documento-soporte.component.html',
  styleUrls: ['./documento-soporte.component.scss']
})
export class DocumentoSoporteComponent {
  mostrarInput = false;
  procesando = false;
  procesado = false;

  documentos = [
    { id: '# 1001', fecha: '12/04/2024', proveedor: 'Primax', estado: 'Rechazado', precio: '$15.000 COP', observaciones: 'Validar NIT del Proveedor' },
    { id: '# 1002', fecha: '06/11/2024', proveedor: 'AutoGas', estado: 'Procesado', precio: '$22.000 COP', observaciones: 'Datos Sobrantes' },
    { id: '# 1003', fecha: '23/12/2024', proveedor: 'Terpel', estado: 'En Proceso', precio: '$45.000 COP', observaciones: 'Verificar la firma' },
    { id: '# 1004', fecha: '03/04/2025', proveedor: 'Blue Oil', estado: 'Procesado', precio: '$100.000 COP', observaciones: 'Información Confusa' },
    { id: '# 1005', fecha: '04/07/2025', proveedor: 'Parking', estado: 'En Proceso', precio: '$30.500 COP', observaciones: 'Ausencia de Descripción' }
  ];

  constructor(private router: Router) {}

  mostrarCarga() {
    this.mostrarInput = true;
  }

  procesarArchivo() {
    this.procesando = true;
    setTimeout(() => {
      this.procesado = true;
      this.procesando = false;
      this.mostrarInput = false;
    }, 2000);
  }

  volverLogin() {
    this.router.navigate(['/login']);
  }
}
