import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LateralMenuConiaComponent } from '../../shared/components/lateral-menu-conia/lateral-menu-conia.component';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

// Interface para tipar las facturas
interface Factura {
  id: string;
  fecha: string;
  cliente: string;
  estado: 'Denegado' | 'Pendiente' | 'Aprobado'; // Estados posibles
  precio: string;
  observaciones: string;
}

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LateralMenuConiaComponent,
    FooterConiaComponent, 
    NavbarComponent
  ],
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent {
  mostrarInput = false;
  procesando = false;
  procesado = false;

  // Datos tipados con la interfaz Factura
  facturas: Factura[] = [
    { 
      id: '# 1001', 
      fecha: '12/04/2024', 
      cliente: 'Jeffrey Morgan', 
      estado: 'Denegado', 
      precio: '$150.00 USD', 
      observaciones: 'Documento ilegible' 
    },
    { 
      id: '# 1002', 
      fecha: '06/11/2024', 
      cliente: 'Dean Smith', 
      estado: 'Denegado', 
      precio: '$220.000 COP', 
      observaciones: 'Formato Incompatible' 
    },
    { 
      id: '# 1003', 
      fecha: '23/12/2024', 
      cliente: 'Andrew Lincoln', 
      estado: 'Pendiente', 
      precio: '$450.000 CAD', 
      observaciones: 'Sin Datos Detectables' 
    },
    { 
      id: '# 1004', 
      fecha: '03/04/2025', 
      cliente: 'Norman Reedus', 
      estado: 'Denegado', 
      precio: '$100.20 GBP', 
      observaciones: 'Calidad Baja' 
    },
    { 
      id: '# 1005', 
      fecha: '04/07/2025', 
      cliente: 'Danai Gurira', 
      estado: 'Pendiente', 
      precio: '$40.50 EUR', 
      observaciones: 'Estructura no reconocida' 
    }
  ];

  constructor(private router: Router) {}

  // Método para mostrar el input de carga
  mostrarCarga(): void {
    this.mostrarInput = true;
    this.procesado = false; // Resetear estado al mostrar carga
  }

  // Método para simular el procesamiento de archivos
  procesarArchivo(): void {
    if (this.procesando) return; // Evitar doble procesamiento
    
    this.procesando = true;
    this.procesado = false;
    
    // Simulación de procesamiento asíncrono
    setTimeout(() => {
      this.procesado = true;
      this.procesando = false;
      this.mostrarInput = false;
      
      // Opcional: resetear después de cierto tiempo
      setTimeout(() => this.procesado = false, 3000);
    }, 2000);
  }

  // Método para navegar al login (¿se usa realmente?)
  volverLogin(): void {
    this.router.navigate(['/login']);
  }

  // Método adicional sugerido para formatear fechas
  formatearFecha(fecha: string): string {
    // Implementación según necesidad
    return fecha;
  }
}