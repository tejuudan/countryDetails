import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as couteryList from 'src/app/store/country.selectors';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(private store: Store,
    private activateRouter: ActivatedRoute) { }
  countries: any;
  selectedCountery: any;
  ngOnInit() {
    // get countries data from selector 
    this.selectedCountery = this.activateRouter.snapshot.params;

    this.store.pipe(select(couteryList.getCouteries)).subscribe((res: any) => {
      this.countries = res.find((data: any) => this.selectedCountery.countryName.trim(" ") === data.name);
    });
  }
}
