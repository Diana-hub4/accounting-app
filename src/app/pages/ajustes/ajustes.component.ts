import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuConiaComponent } from '../../shared/components/lateral-menu-conia/lateral-menu-conia.component';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-ajustes',
  standalone: true,
  imports: [
    CommonModule,
    LateralMenuConiaComponent,
    FooterConiaComponent, 
    NavbarComponent
  ],
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss']
})
export class AjustesComponent {
}
