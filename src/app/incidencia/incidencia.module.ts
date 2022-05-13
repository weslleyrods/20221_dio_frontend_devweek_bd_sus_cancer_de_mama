import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IncidenciaComponent } from './incidencia/incidencia.component';
import { IncidenciaRoutingModule } from './incidencia-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    IncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciaRoutingModule,
    MatCardModule,
    MatSortModule,
  ]
})
export class IncidenciaModule { }
