import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LateralMenuConiaComponent } from '../../shared/components/lateral-menu-conia/lateral-menu-conia.component';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';
import template from './edicion-documento-soporte.component.html?raw';
import styles from './edicion-documento-soporte.component.scss?inline';

@Component({
  selector: 'app-edicion-documento-soporte',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    LateralMenuConiaComponent,
    FooterConiaComponent
  ],
  template,
  styles: [styles]
})
export class EdicionDocumentoSoporteComponent {
  emisor = {
    nombre: 'Parqueadero Lopez',
    nit: 'NIT 9.1236.584-5',
    direccion: 'Calle 30 # 18a - 20 Chiquinquirá Colombia'
  };

  receptor = {
    nombre: 'Lavadero el Roy',
    nit: 'NIT 4.974.615 - 2',
    telefono: '(57) 312 374 00 20'
  };

  fechaEmision = '2020-01-12';
  comprobante = '5498';

  items = [
    { descripcion: 'Lavado del Auto', cantidad: 1, total: 60000 },
    { descripcion: 'Estacionamiento', cantidad: 3, total: 90000 }
  ];

  get subtotal() {
    return this.items.reduce((acc, item) => acc + item.total, 0);
  }

  get iva() {
    return this.subtotal * 0.19;
  }

  get total() {
    return this.subtotal + this.iva;
  }

  guardarCambios() {
    alert('Cambios guardados correctamente.');
  }

  cancelar() {
    history.back();
  }

  resetForm() {
    window.location.reload();
  }

  addItem() {
    this.items.push({ descripcion: '', cantidad: 1, total: 0 });
  }
}
