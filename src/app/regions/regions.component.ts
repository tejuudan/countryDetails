import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as countryAction from 'src/app/store/country.actions';
import * as couteryList  from 'src/app/store/country.selectors';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit{
  @Output() regionSelected = new EventEmitter<string>();
  @Output() countrySelected = new EventEmitter<string>();

  label = 'Region';
  countryLabel = 'Country';
  countries: any = [];
  regionForm: FormGroup;
  constructor(public router: Router,
              private store: Store,
              private fb: FormBuilder){
    this.regionForm = this.fb.group({
      selectedRegion: [''],
      selectedCountry: ['']
    });
  }
  ngOnInit(){
    this.regionForm.get('selectedCountry')?.disable();
  }
  onRegionChange() {
    this.regionForm.get('selectedCountry')?.enable();
    this.regionSelected.emit(this.regionForm.value.selectedRegion.toLowerCase());
    this.loadCountriesByRegion(this.regionForm.value.selectedRegion.toLowerCase());
  }
  loadCountriesByRegion(region: any) {
    // load countries data from Action 
    this.store.dispatch(countryAction.loadCountry({ region }));
    // get countries data from selector 
    this.store.pipe(select(couteryList.getCouteries)).subscribe((res:any)=>{
    this.countries = res;
    });
  }
  onCounteryChange(){
    this.countrySelected.emit( this.regionForm.value.selectedCountry);
    if (this.regionForm.value.selectedRegion.toLowerCase()) {
      this.router.navigate(['country-detail',  this.regionForm.value.selectedCountry]);
    }
  }
}
