import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarClaveFormComponent } from './actualizar-clave-form.component';

describe('ActualizarClaveFormComponent', () => {
  let component: ActualizarClaveFormComponent;
  let fixture: ComponentFixture<ActualizarClaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarClaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarClaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
