import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CountriesService } from './countries.service';
import * as countryAction from 'src/app/services/country.actions';

@Injectable()
export class CountryEffects {


  constructor(private actions$: Actions,
    private countryService: CountriesService) { }

  loadCountriesByRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryAction.loadCountry),
      mergeMap(action =>
        this.countryService.getCountriesByRegion(action.region).pipe(
          map(countries => countryAction.loadCountrySuccess({ countries })),
          catchError(error =>
            of(countryAction.loadCountryFailure({ error: error }))
          )
        )
      )
    )
  );
}