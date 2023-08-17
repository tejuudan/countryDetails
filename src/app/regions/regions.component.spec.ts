import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RegionsComponent } from './regions.component';
import * as CountryActions from 'src/app/store/country/country.actions';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({})], // Set up your modules here
      declarations: [RegionsComponent],
      providers: [provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit regionSelected event on region change', () => {
    spyOn(component.regionSelected, 'emit');
    component.regionForm.setValue({ selectedRegion: 'Europe', selectedCountry: '' });
    component.onRegionChange();
    expect(component.regionSelected.emit).toHaveBeenCalledWith('europe'); // Expected lowercase value
  });

  it('should load countries and emit countrySelected event on country change', () => {
    const mockCountries = [{ name: 'Country 1' }, { name: 'Country 2' }];
    spyOn(store, 'dispatch');
    spyOn(store, 'pipe').and.returnValue(of(mockCountries));
    spyOn(component.countrySelected, 'emit');
    component.regionForm.setValue({ selectedRegion: 'Europe', selectedCountry: 'Country 1' });
    component.onCounteryChange();
    expect(store.dispatch).toHaveBeenCalledWith(CountryActions.loadCountry({ region: 'europe' }));
    expect(component.countries).toEqual(mockCountries);
    expect(component.countrySelected.emit).toHaveBeenCalledWith('Country 1');
  });

  it('should navigate to country detail on country change with selected region', () => {
    spyOn(component.regionForm, 'value').and.returnValue({ selectedRegion: 'Europe', selectedCountry: 'Country 1' });
    spyOn(component.router, 'navigate');
    component.onCounteryChange();
    expect(component.router.navigate).toHaveBeenCalledWith(['country-detail', 'Country 1']);
  });
});
