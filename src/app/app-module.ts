import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComicsJson } from './components/comics-json/comics-json';
import { ServiceComics } from './services/service.comic';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonaComponent } from './components/persona-component/persona-component';
import { ServicePersona } from './services/service.persona';
import { MenuComponent } from './components/menu-component/menu-component';
import { CochesComponent } from './components/coches-component/coches-component';
import { ServiceCoches } from './services/service.coches';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { ServicePlantilla } from './services/service.plantilla';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ComicsJson,
    ComicsComponent,
    PersonaComponent,
    MenuComponent,
    CochesComponent,
    PlantillaFuncionSimple,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersona,
    ServiceCoches,
    ServicePlantilla,
    provideHttpClient()
  ],
  bootstrap: [App],
})
export class AppModule {}
