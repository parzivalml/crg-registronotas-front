import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictarCursoListaFiltroComponent } from './dictar-curso-lista-filtro.component';

describe('DictarCursoListaFiltroComponent', () => {
  let component: DictarCursoListaFiltroComponent;
  let fixture: ComponentFixture<DictarCursoListaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictarCursoListaFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictarCursoListaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
