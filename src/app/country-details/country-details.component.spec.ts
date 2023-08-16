import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let store: MockStore;
  const mockActivatedRoute = {
    snapshot: {
      params: {
        countryName: 'Test Country'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})], // Set up your store module here
      declarations: [CountryDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideMockStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch country details from store based on route param', () => {
    const mockCountry = {
      name: 'Test Country',
      // Other properties...
    };
    spyOn(store, 'pipe').and.returnValue(of([mockCountry]));
    component.ngOnInit();
    expect(component.selectedCountery).toEqual(mockCountry);
  });
});
