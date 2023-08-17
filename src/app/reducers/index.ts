import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromCountry from '../store/country/country.reducer';


export interface State {

  [fromCountry.countryFeatureKey]: fromCountry.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCountry.countryFeatureKey]: fromCountry.regionReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
