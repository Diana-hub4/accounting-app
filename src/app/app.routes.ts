import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BackgroundTestComponent } from './background-test/background-test.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { EdicionFacturacionComponent } from './dashboard/edicion-facturacion/edicion-facturacion.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'background-test',
    loadComponent: () => import('./background-test/background-test.component').then(m => m.BackgroundTestComponent)
  },
  {
    path: 'dashboard/facturacion',
    loadComponent: () => import('./pages/facturacion/facturacion.component').then(m => m.FacturacionComponent)
  },
  {
    path: 'dashboard/facturacion/editar/:id',
    loadComponent: () => import('./dashboard/edicion-facturacion/edicion-facturacion.component').then(m => m.EdicionFacturacionComponent)
  },
  {
    path: 'dashboard/documento-soporte',
    loadComponent: () =>
      import('./pages/documento-soporte/documento-soporte.component').then(
        (m) => m.DocumentoSoporteComponent
      )
  },
  {
    path: '**',
    redirectTo: 'register'
  },
];
