import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciaRoutingModule } from './incidencia-routing.module';
import { IncidenciaComponent } from './incidencia/incidencia.component';


@NgModule({
  declarations: [
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciaRoutingModule
  ]
})
export class IncidenciaModule { }
