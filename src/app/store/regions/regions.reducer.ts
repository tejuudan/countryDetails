import { createReducer, on } from '@ngrx/store';
import { loadRegionsSuccess } from 'src/app/store/regions/regions.actions';
export const regionsFeatureKey = 'regions';

export interface RegionState {
  regions: string[];
}

export const initialState: RegionState = {
  regions: ['Europe', 'Asia'],
};

export const regionReducer = createReducer(
  initialState,
  on(loadRegionsSuccess, (state, { regions }) => ({ ...state, regions }))
);
