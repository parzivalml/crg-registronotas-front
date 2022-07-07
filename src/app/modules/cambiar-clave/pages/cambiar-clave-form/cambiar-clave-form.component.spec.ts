import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarClaveFormComponent } from './cambiar-clave-form.component';

describe('CambiarClaveFormComponent', () => {
  let component: CambiarClaveFormComponent;
  let fixture: ComponentFixture<CambiarClaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarClaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarClaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
