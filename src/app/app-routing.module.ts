import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'incidencia', //quando na url for digitada "/incidencia", será executado o caminho definido na arrow function, ou seja, as informações do modulo secundario.
    loadChildren: () => {
      return import('./incidencia/incidencia.module')
        .then(m => m.IncidenciaModule);
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
