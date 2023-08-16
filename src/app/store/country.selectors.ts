import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/store/country.reducer';

export const selectCountriesState = createFeatureSelector<State>('countries');

export const getCouteries = createSelector(
    selectCountriesState,
    state => state.countries
);

export const getError = createSelector(
    selectCountriesState,
    state => state.error
);
