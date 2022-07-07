import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictarCursoRegistroComponent } from './dictar-curso-registro.component';

describe('DictarCursoRegistroComponent', () => {
  let component: DictarCursoRegistroComponent;
  let fixture: ComponentFixture<DictarCursoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictarCursoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictarCursoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
