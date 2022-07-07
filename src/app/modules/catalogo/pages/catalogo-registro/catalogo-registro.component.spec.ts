import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoRegistroComponent } from './catalogo-registro.component';

describe('CatalogoRegistroComponent', () => {
  let component: CatalogoRegistroComponent;
  let fixture: ComponentFixture<CatalogoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
