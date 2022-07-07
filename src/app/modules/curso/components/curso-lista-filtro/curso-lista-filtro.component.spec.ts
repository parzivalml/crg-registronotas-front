import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListaFiltroComponent } from './curso-lista-filtro.component';

describe('CursoListaFiltroComponent', () => {
  let component: CursoListaFiltroComponent;
  let fixture: ComponentFixture<CursoListaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoListaFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoListaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
