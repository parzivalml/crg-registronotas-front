import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoListaFiltroComponent } from './catalogo-lista-filtro.component';

describe('CatalogoListaFiltroComponent', () => {
  let component: CatalogoListaFiltroComponent;
  let fixture: ComponentFixture<CatalogoListaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoListaFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoListaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
