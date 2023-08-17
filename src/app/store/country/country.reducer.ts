import { createReducer, on } from '@ngrx/store';
import * as countriesAction from 'src/app/store/country/country.actions';
export const countryFeatureKey = 'country';

export interface State {
  countries: any[];
  error: any;
}

export const initialState: State = {
  countries: [],
  error: null,
};

export const regionReducer = createReducer(
  initialState,
  on(countriesAction.loadCountry, (state, { region }) => ({
    ...state,
    countries: [],
    error: null,
  })),
  on(countriesAction.loadCountrySuccess, (state, { countries }) => ({
    ...state,
    countries,
    error: null,
  })),
  on(countriesAction.loadCountryFailure, (state, { error }) => ({
    ...state,
    countries: [],
    error,
  }))
);

