import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { GaleriaComponent } from '../galeria/galeria.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GaleriaComponent, SlickCarouselModule, GaleriaComponent, RouterModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
