import { Component,EventEmitter,HostBinding,Input, Output } from '@angular/core';
import { DestinoRango } from '../models/DestinoRango.model';

@Component({
  selector: 'app-destino-subir',
  templateUrl: './destino-subir.component.html',
  styleUrls: ['./destino-subir.component.css']
})
export class DestinoSubirComponent {
  @Input()rango!: DestinoRango;
  @Input()position!: number;
  @HostBinding ('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoRango>;
  

  constructor() {
    this.clicked = new EventEmitter();
  }

  ir() {
    this.clicked.emit(this.rango);
    return false;
  }


}

