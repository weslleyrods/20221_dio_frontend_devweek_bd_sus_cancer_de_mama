import { Injectable } from '@angular/core';
import {Faixaetaria} from '../model/faixaetaria'

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor() { }

  listFaixaEtaria(): Faixaetaria[]{
    return[{
      id: 1,
      faixa_i: 18,
      faixa_n: 30,
      descricao: 'Até 30 anos',
    }]
  }
}
