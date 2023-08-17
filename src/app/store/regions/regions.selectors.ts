import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RegionState } from 'src/app/store/regions/regions.reducer';

export const selectRegionState = createFeatureSelector<RegionState>('regions');

export const selectRegions = createSelector(
  selectRegionState,
  (state) => state.regions
);
