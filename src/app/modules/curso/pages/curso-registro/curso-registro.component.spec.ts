import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoRegistroComponent } from './curso-registro.component';

describe('CursoRegistroComponent', () => {
  let component: CursoRegistroComponent;
  let fixture: ComponentFixture<CursoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
