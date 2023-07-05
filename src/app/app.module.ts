import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NewRegistroComponent } from './new-registro/new-registro.component';
import { ConsultaApiComponent } from './consulta-api/consulta-api.component';
import { FirebaseService } from './firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    NewRegistroComponent,
    ConsultaApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
