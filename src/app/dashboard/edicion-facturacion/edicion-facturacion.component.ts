import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LateralMenuConiaComponent } from '../../shared/components/lateral-menu-conia/lateral-menu-conia.component';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-edicion-facturacion',
  standalone: true,
  imports: [
    FormsModule,
    LateralMenuConiaComponent,
    FooterConiaComponent, 
    NavbarComponent
  ],
  templateUrl: './edicion-facturacion.component.html',
  styleUrls: ['./edicion-facturacion.component.scss']
})
export class EdicionFacturacionComponent implements OnInit {
  idFactura!: string;

  factura = {
    emisor: 'Bryce Papenbrook',
    nitEmisor: 'NIT 7.854.987-5',
    emailEmisor: 'Bryce@BPbrook.us',
    receptor: 'Grupo Operativo Logístico y Transporte GOLCAI',
    nitReceptor: 'NIT 7.854.987-5',
    telefono: '(57) 312 374 00 20',
    ciudad: 'Ciudad Bogotá D.C. Colombia',
    fechaEmision: '2025-07-04',
    numeroFactura: 'FVEE 265',
    descripcion: 'Transporte de Carga por Carretera...',
    cantidad: 1,
    total: '4.617.000 COP',
    subtotal: '4.617.000',
    iva: '1.083.000',
    totalGeneral: '5.700.000'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idFactura = this.route.snapshot.paramMap.get('id') || '';
    // Aquí podrías cargar los datos reales de la factura desde un servicio.
  }

  cancelar(): void {
    this.router.navigate(['/dashboard/facturacion']);
  }
}
