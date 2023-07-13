import { Component } from '@angular/core';
import { DestinoRango } from '../models/DestinoRango.model';

@Component({
  selector: 'app-lista-rangos',
  templateUrl: './lista-rangos.component.html',
  styleUrls: ['./lista-rangos.component.css']
})
export class ListaRangosComponent {
  rangos: DestinoRango[];

  constructor() {
    this.rangos = [];
  }

  guardar(nombre: string, url:string ): boolean{
    this.rangos.push(new DestinoRango(nombre, url));
    return false;

  }

}
