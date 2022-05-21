import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';

import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixaetaria.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  regioes: Regiao [] = [];

  faixasetarias: Faixaetaria[] = [];

  constructor(
    private regiaoService: RegiaoService,
    private faixaetariaService: FaixaEtariaService,
    ){}


  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
    this.faixasetarias = this.faixaetariaService.listFaixaEtaria();
  }

}
