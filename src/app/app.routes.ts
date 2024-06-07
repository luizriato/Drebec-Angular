import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SimuladorComponent } from './simulador/simulador.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';
import { ContatosComponent } from './contatos/contatos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';

export const routes: Routes = [
{path: 'simulador', component: SimuladorComponent},
{path: 'sobre', component: AboutUsComponent},
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'teste', component: TesteComponent},
{path: 'contatos', component: ContatosComponent},
{path: 'cadastro', component: CadastroComponent},
{path: 'cadastro-empresa', component: CadastroEmpresaComponent}
];
