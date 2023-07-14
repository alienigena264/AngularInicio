import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoSubirComponent } from './destino-subir/destino-subir.component';
import { ListaRangosComponent } from './lista-rangos/lista-rangos.component';
import { DestinoDetalleComponent} from './destino-detalle/destino-detalle.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';


const routes: Routes = [
  {path:'',redirectTo : 'home', pathMatch: 'full'},
  {path:'home',component:ListaRangosComponent},
  {path:'destino',component:DestinoDetalleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DestinoSubirComponent,
    ListaRangosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
