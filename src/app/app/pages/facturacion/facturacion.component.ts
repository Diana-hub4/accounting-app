import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})

export class FacturacionComponent {
    mostrarInput = false;
    procesando = false;
    procesado = false;
    
    facturas = [
      { id: '# 1001', fecha: '12/04/2024', cliente: 'Jeffrey Morgan', estado: 'Denegado', precio: '$150.00 USD', observaciones: 'Documento ilegible' },
      { id: '# 1002', fecha: '06/11/2024', cliente: 'Dean Smith', estado: 'Denegado', precio: '$220.000 COP', observaciones: 'Formato Incompatible' },
      { id: '# 1003', fecha: '23/12/2024', cliente: 'Andrew Lincoln', estado: 'Pendiente', precio: '$450.000 CAD', observaciones: 'Sin Datos Detectables' },
      { id: '# 1004', fecha: '03/04/2025', cliente: 'Norman Reedus', estado: 'Denegado', precio: '$100.20 GBP', observaciones: 'Calidad Baja' },
      { id: '# 1005', fecha: '04/07/2025', cliente: 'Danai Gurira', estado: 'Pendiente', precio: '$40.50 EUR', observaciones: 'Estructura no reconocida' }
    ];

  mostrarCarga() {
    this.mostrarInput = true;
  }

  procesarArchivo() {
    this.procesando = true;
    // Simulamos el procesamiento
    setTimeout(() => {
      this.procesado = true;
      this.procesando = false;
      this.mostrarInput = false;
    }, 2000);
  }
}