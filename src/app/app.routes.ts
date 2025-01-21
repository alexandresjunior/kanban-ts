import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
