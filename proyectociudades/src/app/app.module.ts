import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaDatosComponent } from './pages/vista-datos/vista-datos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CiudadesServiceService } from './shared/ciudades-service.service';
import { CoverComponent } from './pages/cover/cover.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VistaDatosComponent,
    MenuComponent,
    CoverComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CiudadesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
