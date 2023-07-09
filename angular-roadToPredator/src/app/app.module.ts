import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoSubirComponent } from './destino-subir/destino-subir.component';
import { ListaRangosComponent } from './lista-rangos/lista-rangos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoSubirComponent,
    ListaRangosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
