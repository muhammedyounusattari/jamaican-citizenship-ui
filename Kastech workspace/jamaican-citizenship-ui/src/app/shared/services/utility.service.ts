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

  loadNaturalizationFromJson() {
    return this.http.get('assets/json/naturalization.json');
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
    if(date.length==0){
      return;
    }
    if (typeof (date) === "string") {
      var x = date.split("/");
      if(x.length>1){
        date = new Date(x[1] + "/" + x[0] + "/" + x[2]);
      }
      else{
        date = new Date(date);
      }
    }
    return (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

  }

  convertDate(date){
    if (typeof (date) === "string") {
      var x = date.split("/");
      date = new Date(x[1] + "/" + x[0] + "/" + x[2]);
    }
    return (date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear());
  }

  getMonth(index) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[index];
  }


  getDay(index) {
   
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[index];
  }
}
