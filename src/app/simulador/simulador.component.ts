import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.scss'
})
export class SimuladorComponent implements OnInit {
  public solar: boolean = false;
  public eolica: boolean = false;
  public biomassa: boolean = false;

  alterarVisibilidade(tamanho: string, tipo: string): void {
    this.resetFlags();
    if (tipo === 'casa') {
      if (tamanho === 'pequena') {
        this.solar = true;
      } else if (tamanho === 'media') {
        this.solar = true;
        this.biomassa = true;
      } else if (tamanho === 'grande') {
        this.solar = true;
        this.eolica = true;
        this.biomassa = true;
      }
    } else if (tipo === 'apartamento') {
      if (tamanho === 'media' || tamanho === 'grande') {
        this.solar = true;
      }
    } else if (tipo === 'rural') {
      if (tamanho === 'pequena') {
        this.solar = true;
      } else if (tamanho === 'media') {
        this.biomassa = true;
      } else if (tamanho === 'grande') {
        this.eolica = true;
      }
    }
  }
ngOnInit(): void {
    
}
  resetFlags(): void {
    this.solar = false;
    this.eolica = false;
    this.biomassa = false;
  }
}


