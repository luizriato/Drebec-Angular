import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";

const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Sobre', component: AboutUsComponent}, 
    {path: 'Contatos', component: AboutUsComponent},
    {path: 'Login', component: AboutUsComponent},
    {path: 'Simulador', component: AboutUsComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}