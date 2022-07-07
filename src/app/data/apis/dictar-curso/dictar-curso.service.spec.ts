import { TestBed } from '@angular/core/testing';

import { DictarCursoService } from './dictar-curso.service';

describe('DictarCursoService', () => {
  let service: DictarCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictarCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
