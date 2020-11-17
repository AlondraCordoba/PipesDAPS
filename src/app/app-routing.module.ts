import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaseComponent } from './Components/clase/clase.component';
import { PracticaComponent } from './Components/practica/practica.component';
import { HomeComponent } from './Components/home/home.component';


const routes: Routes = [
  { path: 'clase', component: ClaseComponent },
  { path: 'practica', component: PracticaComponent},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
