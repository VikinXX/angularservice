import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonaComponent } from './components/persona-component/persona-component';
import { CochesComponent } from './components/coches-component/coches-component';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { PlantillaFuncionMultiple } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple';

const routes: Routes = [
  { path: "comic", component: ComicsComponent },
  { path: "persona", component: PersonaComponent },
  { path: "coche", component: CochesComponent },
  { path: "plantilla", component: PlantillaFuncionSimple },
  { path: "plantillaMultiple", component: PlantillaFuncionMultiple },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
