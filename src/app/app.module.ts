import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from 'src/app/reducers';
import { CountryEffects } from './store/country/country.effects';
import { regionReducer } from './store/country/country.reducer';
import { RegionEffects } from './store/regions/regions.effects';
import * as fromRegions from './store/regions/regions.reducer';


@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('countries', regionReducer),
    EffectsModule.forRoot([CountryEffects]),
    EffectsModule.forFeature([RegionEffects]),
    StoreModule.forFeature(fromRegions.regionsFeatureKey, fromRegions.regionReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
