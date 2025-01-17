import { Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor';
import { TarefasRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...TarefasRoutes,
    ...JogoDaVelhaRoutes
];
