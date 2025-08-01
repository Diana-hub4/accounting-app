import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lateral-menu-conia',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lateral-menu-conia.component.html',
  styleUrls: ['./lateral-menu-conia.component.scss']
})
export class LateralMenuConiaComponent {
  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}