import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo:  "regions"},
    {path: 'regions', component: RegionsComponent},
    {path: `country-detail/:countryName`, component: CountryDetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
