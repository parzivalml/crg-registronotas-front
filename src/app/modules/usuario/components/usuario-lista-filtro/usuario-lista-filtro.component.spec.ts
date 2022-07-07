import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListaFiltroComponent } from './usuario-lista-filtro.component';

describe('UsuarioListaFiltroComponent', () => {
  let component: UsuarioListaFiltroComponent;
  let fixture: ComponentFixture<UsuarioListaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListaFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioListaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
