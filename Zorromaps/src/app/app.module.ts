import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environments/environment';




@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CrearCuentaComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase con la configuración
    AngularFireDatabaseModule, // Importa el módulo de base de datos
    AngularFirestoreModule,

  ],
  providers: [],
})
export class AppModule { }
