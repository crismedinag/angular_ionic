import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaDatosComponent } from './pages/vista-datos/vista-datos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MenuComponent } from './pages/menu/menu.component';


const routes: Routes = [
  {path:"vista_datos", component: VistaDatosComponent},
  {path:"formulario", component: FormularioComponent},
  {path:"menu", component: MenuComponent},
  {path:"**", redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
