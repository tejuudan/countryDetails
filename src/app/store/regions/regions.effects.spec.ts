import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RegionsEffects } from './regions.effects';

describe('RegionsEffects', () => {
  let actions$: Observable<any>;
  let effects: RegionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RegionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
