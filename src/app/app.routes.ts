import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadComponent: () => 
      import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => 
      import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'background-test',
    loadComponent: () => 
      import('./background-test/background-test.component').then(m => m.BackgroundTestComponent)
  },
  {
    path: 'dashboard/facturacion',
    loadComponent: () => 
      import('./pages/facturacion/facturacion.component').then(m => m.FacturacionComponent)
  },
  {
    path: 'dashboard/facturacion/editar/:id',
    loadComponent: () => 
      import('./dashboard/edicion-facturacion/edicion-facturacion.component').then(m => m.EdicionFacturacionComponent)
  },
  {
    path: 'dashboard/documento-soporte',
    loadComponent: () => 
      import('./pages/documento-soporte/documento-soporte.component').then(m => m.DocumentoSoporteComponent)
  },
  {
    path: 'dashboard/documento-soporte/editar/:id',
    loadComponent: () => 
      import('./dashboard/edicion-documento-soporte/edicion-documento-soporte.component').then(m => m.EdicionDocumentoSoporteComponent)
  },
  {
    path: 'ajustes',
    loadComponent: () => 
      import('./pages/ajustes/ajustes.component').then(m => m.AjustesComponent)
  },
  {
    path: '**',
    redirectTo: 'register'
  },
];
