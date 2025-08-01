import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LateralMenuConiaComponent } from '../../shared/components/lateral-menu-conia/lateral-menu-conia.component';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-edicion-clientes',
  imports: [
    CommonModule,
    FormsModule,
    FooterConiaComponent,
    LateralMenuConiaComponent,
    NavbarComponent
  ],
  templateUrl: './edicion-clientes.component.html',
  styleUrls: ['./edicion-clientes.component.scss']
})
export class EdicionClientesComponent {
  cliente = {
    tipoDocumento: 'Cédula de Ciudadanía',
    numeroDocumento: '10003698547',
    correo: 'Docrosa@ruma.com',
    nombre: 'Rosa María Juarez',
    telefono: '(57) 601 374 00 20',
    celular: '(57) 301 203 85 60',
    direccion: 'Calle marroquín 15',
    ciudad: 'Zipaquirá'
  };

  regimenes = [
    'Régimen Ordinario',
    'Régimen Especial',
    'Régimen de Tributación Simple'
  ];

  responsabilidades = [
    '01 - Agente especial para la administración de justicia',
    '02 - Genera valor en movimientos financieros',
    '03 - Inversor a la Nación',
    '04 - Realiza operaciones sobre datos en moneda extranjera',
    '05 - Vende a los productos comestibles'
  ];
}
