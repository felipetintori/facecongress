import { TestBed } from '@angular/core/testing';

import { ProgramacaoService } from './programacao.service';

describe('ProgramacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramacaoService = TestBed.get(ProgramacaoService);
    expect(service).toBeTruthy();
  });
});
