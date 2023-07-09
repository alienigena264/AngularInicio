import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-destino-subir',
  templateUrl: './destino-subir.component.html',
  styleUrls: ['./destino-subir.component.css']
})
export class DestinoSubirComponent {
  @Input() nombre: string;

  constructor() {
    this.nombre = 'nombre por defecto';
  }

}
