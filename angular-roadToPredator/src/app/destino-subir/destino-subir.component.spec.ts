import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoSubirComponent } from './destino-subir.component';

describe('DestinoSubirComponent', () => {
  let component: DestinoSubirComponent;
  let fixture: ComponentFixture<DestinoSubirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinoSubirComponent]
    });
    fixture = TestBed.createComponent(DestinoSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
