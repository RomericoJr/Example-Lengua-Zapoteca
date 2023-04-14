import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { PrototipoComponent } from './components/prototipo/prototipo.component';
import { DiagramaSistemaComponent } from './components/diagrama-sistema/diagrama-sistema.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/crud/admin/admin.component';
import { UserComponent } from './components/crud/user/user.component';

import { AngularFireModule } from '@angular/fire/compat';


import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AddEditComponent } from './components/crud/admin/components/add-edit/add-edit.component';
import { DeleteComponent } from './components/crud/admin/components/delete/delete.component';
import { ReadComponent } from './components/crud/admin/components/read/read.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntegrantesComponent,
    PrototipoComponent,
    DiagramaSistemaComponent,
    MainComponent,
    AdminComponent,
    UserComponent,
    AddEditComponent,
    DeleteComponent,
    ReadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
