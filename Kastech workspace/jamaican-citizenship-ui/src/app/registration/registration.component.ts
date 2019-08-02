import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  section1: boolean;
  section2: boolean; 
  section3: boolean;
  section4: boolean;
  

  constructor() {
    this.section1 = false;
    this.section2 = false;    
    this.section3 = true;    
   }

  ngOnInit() {

  }
  showsection2() {
    this.section2 = true;
    this.section1 = false;
}
showsection3() {
  this.section3 = true;
  this.section2 = false;
  this.section1 = false;
}

}
