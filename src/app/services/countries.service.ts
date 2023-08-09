import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountriesByRegion(region: any): Observable<any[]> {
    return this.http.get<any[]>(`https://restcountries.com/v2/region/${region}`);
  }
}
