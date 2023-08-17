import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as RegionActions from 'src/app/store/regions/regions.actions';

@Injectable()
export class RegionEffects {
  constructor(private actions$: Actions) {}
  loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionActions.loadRegions),
      map(() => RegionActions.loadRegionsSuccess({ regions: ['Europe', 'Asia'] }))
    )
  );
}
