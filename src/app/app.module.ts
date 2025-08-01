﻿// App module
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay  } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app/app.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common'; // <-- Importa CommonModule
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { EdicionFacturacionComponent } from './dashboard/edicion-facturacion/edicion-facturacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FacturacionComponent,
    EdicionFacturacionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule, 
    RouterModule.forRoot (routes)
  ],
  providers: [
    provideClientHydration (withEventReplay ())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
