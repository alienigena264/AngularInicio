import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRangosComponent } from './lista-rangos.component';

describe('ListaRangosComponent', () => {
  let component: ListaRangosComponent;
  let fixture: ComponentFixture<ListaRangosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRangosComponent]
    });
    fixture = TestBed.createComponent(ListaRangosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
