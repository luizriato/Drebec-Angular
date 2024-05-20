import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent} from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports:[
        NgModule,AppComponent,BrowserModule,AppRoutingModule,FooterComponent, HeaderComponent, HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule{}