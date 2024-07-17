import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TraduccionComponent } from './traduccion/traduccion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CamaraComponent } from './camara/camara.component';
import { SistemaComponent } from './sistema/sistema.component';
import { GestosComponent } from './gestos/gestos.component';
import { HistorialComponent } from './historial/historial.component';
import { ConfiguracionCamaraComponent } from './configuracion-camara/configuracion-camara.component';
import { DiccionarioGestosComponent } from './diccionario-gestos/diccionario-gestos.component';

@NgModule({
  declarations: [
    AppComponent,
    TraduccionComponent,
    UsuarioComponent,
    CamaraComponent,
    SistemaComponent,
    GestosComponent,
    HistorialComponent,
    ConfiguracionCamaraComponent,
    DiccionarioGestosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
