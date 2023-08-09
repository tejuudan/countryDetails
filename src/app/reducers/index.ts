import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCountry from '../services/country.reducer';


export interface State {

  [fromCountry.countryFeatureKey]: fromCountry.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCountry.countryFeatureKey]: fromCountry.regionReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
