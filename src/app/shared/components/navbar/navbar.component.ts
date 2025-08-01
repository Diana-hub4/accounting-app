import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public router: Router) {}

  volverLogin(): void {
    this.router.navigate(['/login']);
  }

  esAjustes(): boolean {
    return this.router.url.includes('ajustes');
  }
}
