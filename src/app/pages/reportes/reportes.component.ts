import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuConiaComponent } from '../../shared/components/lateral-menu-conia/lateral-menu-conia.component';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    LateralMenuConiaComponent,
    FooterConiaComponent
  ],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent {
  busqueda = '';
  clientes = [
    {
      nombre: 'Ing. Pablo Román',
      nit: '1256209782',
      ultimoReporte: '10/11/2025',
      expandido: true,
      documentos: [
        { nombre: 'Factura #1001', tipo: 'Factura', fecha: '10/11/2025' },
        { nombre: 'Recibo #2003', tipo: 'Documento Soporte', fecha: '25/05/2024' },
        { nombre: 'Factura #1891', tipo: 'Factura', fecha: '14/07/2025' }
      ]
    },
    {
      nombre: 'Veterinaria Taca',
      nit: '851852851-2',
      ultimoReporte: '08/12/2023',
      expandido: false,
      documentos: []
    }
  ];

  toggleCliente(cliente: any) {
    cliente.expandido = !cliente.expandido;
  }
}
