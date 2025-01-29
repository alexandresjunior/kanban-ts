import { TestBed } from '@angular/core/testing';

import { TiposTarefaService } from './tipos-tarefa.service';

describe('TiposTarefaService', () => {
  let service: TiposTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
