import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Favereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  /**
   * Retorna um observable contendo os dados a serem
   * exibidos no gráfico.
   * 
   * @returns Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }

}
