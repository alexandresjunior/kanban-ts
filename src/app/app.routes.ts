import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { NovaTarefaComponent } from './paginas/nova-tarefa/nova-tarefa.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Kanban | Login',
        component: LoginComponent
    },
    {
        path: 'home',
        title: 'Kanban | Home',
        component: HomeComponent
    },
    {
        path: 'novaTarefa',
        title: 'Kanban | Nova Tarefa',
        component: NovaTarefaComponent
    },
    {
        path: 'editarTarefa/:id',
        title: 'Kanban | Editar Tarefa',
        component: NovaTarefaComponent
    }
];
