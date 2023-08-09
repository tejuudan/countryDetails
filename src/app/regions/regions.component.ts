import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as countryAction from 'src/app/services/country.actions';
import * as couteryList  from 'src/app/services/country.selectors';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit{
  @Output() regionSelected = new EventEmitter<string>();
  @Output() countrySelected = new EventEmitter<string>();

  selectedRegion: any;
  selectedCountry: any;
  label = 'Region';
  countryLabel = 'Country';
  countries: any = [];
  constructor(private router: Router,
              private store: Store){

  }
  ngOnInit(){
   
  }
  onRegionChange() {
    this.regionSelected.emit(this.selectedRegion);
    this.loadCountriesByRegion(this.selectedRegion);
  }
  loadCountriesByRegion(region: any) {
    this.store.dispatch(countryAction.loadCountry({ region }));
    // get countries data from selector 
    this.store.pipe(select(couteryList.getCouteries)).subscribe((res:any)=>{
    this.countries = res;
    });
  }
  onCounteryChange(){
    this.countrySelected.emit(this.selectedCountry);
    if (this.selectedRegion) {
      this.router.navigate(['country-detail', this.selectedCountry]);
    }
  }
}
