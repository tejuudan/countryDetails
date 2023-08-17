import { createAction, props } from "@ngrx/store";

export const loadCountry = createAction(
  "[contries] Load Countries",
  props<{ region: string }>() // Ensure payload matches the reducer's expectation
);
export const loadCountrySuccess = createAction(
  "[contries] Load Countries Success",
  props<{ countries: any[] }>() // Ensure payload matches the reducer's expectation
);
export const loadCountryFailure = createAction(
  '[Countries] Load Countries Failure',
  props<{ error: string }>() // Ensure payload matches the reducer's expectation
);