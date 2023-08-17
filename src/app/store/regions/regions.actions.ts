import { createAction, props } from '@ngrx/store';

export const loadRegions = createAction('[Region] Load Regions');
export const loadRegionsSuccess = createAction('[Region] Load Regions Success', props<{ regions: string[] }>());
