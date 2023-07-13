import { Component,HostBinding,Input } from '@angular/core';
import { DestinoRango } from '../models/DestinoRango.model';

@Component({
  selector: 'app-destino-subir',
  templateUrl: './destino-subir.component.html',
  styleUrls: ['./destino-subir.component.css']
})
export class DestinoSubirComponent {
  @Input()
  rango!: DestinoRango;
  @HostBinding ('attr.class') cssClass = 'col-md-4'

  constructor() {
  }

}

