import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {
  public solar: boolean = false;
  public eolica: boolean = false;
  public biomassa: boolean = false;


  constructor() {} 

    setSolar(value: boolean) : void
    {
      this.solar = value;
    }

    //etEolica
    //setBiomassa

    //getSolar
    //getEolica
   // getBiomassa
}
