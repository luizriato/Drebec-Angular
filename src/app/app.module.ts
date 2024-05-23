import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { RouterLink } from "@angular/router";
import { GaleriaComponent } from "./galeria/galeria.component";
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterLink, NgModule, AppComponent, BrowserModule, FooterComponent, HeaderComponent, HomeComponent, GaleriaComponent
    ],
    exports: [RouterLink, NgModule, AppComponent, BrowserModule, FooterComponent, HeaderComponent, HomeComponent, GaleriaComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }