import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from "@ngrx/store";
import * as RegionSelectors from "src/app/store/country.selectors"
import { regionReducer, initialState } from "./country.reducer";

describe('Country Selectors', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          region: regionReducer,
        }),
      ],
    });
    store = TestBed.inject(Store);
  });
  it('should select the list of Country', () => {
    let result: string[] | undefined;

    store.select(RegionSelectors.getCouteries).subscribe((countries) => {
      result = countries;
    });

    expect(result).toBe(initialState.countries);
  });
});
