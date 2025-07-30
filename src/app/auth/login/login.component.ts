import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FooterConiaComponent } from '../../shared/components/footer-conia/footer-conia.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FooterConiaComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  showPassword = false;
  isMobile = window.innerWidth <= 767;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(event: Event) {
    event.preventDefault();
    this.router.navigate(['/dashboard/facturacion']);
  }
}

