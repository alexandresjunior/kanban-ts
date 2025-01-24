import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Kanban Redmine | Login',
        component: LoginComponent
    },
    {
        path: 'home',
        title: 'Kanban Redmine | Home',
        component: HomeComponent
    }
];
