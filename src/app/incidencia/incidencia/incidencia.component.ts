import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  regioes: Regiao [] = [];

  constructor(private regiaoService: RegiaoService){}


  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
  }

}
