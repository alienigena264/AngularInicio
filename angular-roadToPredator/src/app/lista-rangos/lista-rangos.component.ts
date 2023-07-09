import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-rangos',
  templateUrl: './lista-rangos.component.html',
  styleUrls: ['./lista-rangos.component.css']
})
export class ListaRangosComponent {
  rangos: string[];

  constructor() {
    this.rangos = ['Principiante','bronce','plata','oro','platino','damante','maestro','Predator'];
  }

}
