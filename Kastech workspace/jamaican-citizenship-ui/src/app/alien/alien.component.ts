import { Component, OnInit } from '@angular/core';
import { CreateProfileService } from '../shared/services/create-profile.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UtilityService } from '../shared/services/utility.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";


@Component({
  selector: 'app-alien',
  templateUrl: './alien.component.html',
  styleUrls: ['./alien.component.css']
})
export class AlienComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  datePickerConfig: Partial<BsDatepickerConfig>;
  submitted: boolean = false;
  showErrorMsg: string;
  alienRegistrationForm: FormGroup;
  dob: Date = new Date();
  countries: any;

  section2: boolean;
  section1: boolean;
  section3: boolean;
  section4: boolean;
  section5: boolean;
  section6: boolean;
  section7: boolean;

  constructor(private profileService: CreateProfileService,
     private utilityService: UtilityService,
      private routing: Router,
    private formBuilder: FormBuilder) { 
   
  }

  ngOnInit() {
    this.section1 = true;
    this.section2 = false;
    this.section3 = false;
    this.section4 = false;
    this.section5 = false;
    this.section6 = false;
    this.section7 = false;
    /*--CalendarIntiate--*/
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false,
      maxDate: this.dob,dateInputFormat: 'DD/MM/YYYY'
    })

    this.loadForm();

    this.countries = this.utilityService.loadCountriesFromJson().subscribe(data => {
      this.countries = data;
    })
  }

  showsection2() {
      this.section2 = true;
      this.section1 = false;
  }
  showsection3() {
    this.section3 = true;
    this.section1 = false;
    this.section2 = false;
}
showsection4() {
  this.section4 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;
}
showsection5() {
  this.section5 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;  
  this.section4 = false;
}
showsection6() {
  this.section6 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;  
  this.section4 = false;  
  this.section5 = false;
}
showsection7() {
  this.section7 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;  
  this.section4 = false;
  this.section5 = false;
  this.section6 = false;
}

showprevioussection1(){
  this.section2 = false;
  this.section1 = true;
}

showprevioussection2(){
  this.section3 = false;
  this.section1 = false;
  this.section2 = true;
}

showprevioussection3(){
  this.section1 = false;
  this.section2 = false;
  this.section3 = true;
  this.section4 = false;
}

showprevioussection4(){
  this.section3 = false;
  this.section1 = false;
  this.section2 = false;
  this.section4 = true;
  this.section5 = false;
}

showprevioussection5(){
  this.section5 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;
  this.section4 = false;
  this.section6 = false;
}


loadForm() {
  // alert('hi');
  this.alienRegistrationForm = this.formBuilder.group({ //new FormGroup({
    firstname: ['', [Validators.required, Validators.maxLength(10)]],
    lastname: ['', Validators.required],
    middlename: [''],
    dob: [this.dob, Validators.required],
    pob: ['', Validators.required],
    country: ['Jamaica', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    number: ['876', [Validators.required]],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    zip: ['', Validators.required],
    name:['', Validators.required],
    occupation:['', Validators.required],
    othername:['', Validators.required],
    businessaddress:['', Validators.required],
    britishterritory:['', Validators.required],
    status:['', Validators.required],
    Nationalitystatus:['', Validators.required],
    fulladdress:['', Validators.required],
    fulladdress2:['', Validators.required],
    fulladdress3:['', Validators.required],
    file:['', Validators.required],
    passport:['', Validators.required],
    driving:['', Validators.required],
    declaration:['', Validators.required],
  });
}

loadPhoneNumber() {
  var controls = this.alienRegistrationForm.controls;
  if (controls.country.value && controls.country.value == 'Jamaica') {
    this.alienRegistrationForm.controls.number.setValue('876')
  } else {
    this.alienRegistrationForm.controls.number.setValue('')
  }


}


get f() { return this.alienRegistrationForm.controls; }
onSubmit(payload) {

  this.submitted = true;
  this.showErrorMsg = "Please fill the required fields";
  if (this.alienRegistrationForm.invalid) {
    return;
  }

  
  console.log(payload);
}

onReset() {
  this.alienRegistrationForm.reset();
  this.loadForm();
}

onCancel(){
  var result = confirm('By cancelling you will discard your changes ')
  if(result)
    this.routing.navigate(['/home'])
}

}
