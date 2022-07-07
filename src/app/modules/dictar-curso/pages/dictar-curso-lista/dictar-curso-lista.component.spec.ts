import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictarCursoListaComponent } from './dictar-curso-lista.component';

describe('DictarCursoListaComponent', () => {
  let component: DictarCursoListaComponent;
  let fixture: ComponentFixture<DictarCursoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictarCursoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictarCursoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
