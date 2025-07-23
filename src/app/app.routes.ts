import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BackgroundTestComponent } from './background-test/background-test.component';
import { FacturacionComponent } from './app/pages/facturacion/facturacion.component';
import { EdicionFacturacionComponent } from './dashboard/edicion-facturacion/edicion-facturacion.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'background-test', component: BackgroundTestComponent },
  { path: 'dashboard/facturacion', component: FacturacionComponent },
  { path: 'dashboard/facturacion/editar/:id', component: EdicionFacturacionComponent },
  { path: '**', redirectTo: 'register' },
];
