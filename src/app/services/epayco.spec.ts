import { TestBed } from '@angular/core/testing';

import { Epayco } from './epayco';

describe('Epayco', () => {
  let service: Epayco;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Epayco);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
