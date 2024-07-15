import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CadastrarTarefaComponent, EditarTarefaComponent, ListarTarefaComponent } from './tarefas';
import { TarefaConcluidaDirective } from './tarefas/shared/tarefa-concluida.directive';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: { }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
