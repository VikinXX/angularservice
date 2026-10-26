import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonaComponent } from './components/persona-component/persona-component';

const routes: Routes = [
  { path: "comic", component: ComicsComponent },
  { path: "persona", component: PersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
