import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  loadCountriesFromJson() {
    return this.http.get('assets/json/countries.json');
  }

  enhancedDate(input, days, months, years) {
    var date;
    if (!input) {
      return null;
    }
    if (typeof (input) === "string") {
      var x = input.split("/");
      date = new Date(x[1] + "/" + x[0] + "/" + x[2]);
    }
    //date = new Date(input);
    date.setDate(date.getDate() + days);
    date.setMonth(date.getMonth() + months);
    date.setFullYear(date.getFullYear() + years);
    return this.formatDate(date);
  }

  formatDate(date) {
    if (typeof (date) === "string") {
      var x = date.split("/");
      date = new Date(x[1] + "/" + x[0] + "/" + x[2]);
    }
    return (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

  }
}
