import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncidenciaComponent} from './incidencia/incidencia.component';


const routes: Routes = [
  {path: '', component: IncidenciaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenciaRoutingModule { }
