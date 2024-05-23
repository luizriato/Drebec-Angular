import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: AboutUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'calculadora', component: SimuladorComponent }
];
