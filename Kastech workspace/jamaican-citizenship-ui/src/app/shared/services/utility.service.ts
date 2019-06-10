import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient) { }

  loadCountriesFromJson(){
    return this.http.get('assets/json/countries.json');
  }
}
