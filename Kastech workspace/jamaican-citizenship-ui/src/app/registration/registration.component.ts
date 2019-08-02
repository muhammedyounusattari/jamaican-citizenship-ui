import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  datePickerConfig: Partial<BsDatepickerConfig>;
  submitted: boolean = false;
  showErrorMsg: string;
  RegistrationForm: FormGroup;
  dob: Date = new Date();

  section1: boolean;
  section2: boolean; 
  section3: boolean;
  section4: boolean;
  section5: boolean;

  constructor(private routing: Router,
    private formBuilder: FormBuilder) {
      
   }

  ngOnInit() {
    this.section1 = true;
    this.section2 = false;
    this.section3 = false;
    this.section4 = false;
    this.section5 = false;

    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false,
      maxDate: this.dob,dateInputFormat: 'DD/MM/YYYY'
    })

    this.loadForm();
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
}

  loadForm() {
    // alert('hi');
    this.RegistrationForm = this.formBuilder.group({ //new FormGroup({
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
      fromDate: ['', Validators.required],
      toDate:['', Validators.required],
      years:['', Validators.required],
      months:['', Validators.required],
      Postal_Address:['', Validators.required],
      residence:['', Validators.required],
      crown_Service:['', Validators.required],
      capacity:['', Validators.required],
      from:['', Validators.required],
      to:['', Validators.required],
      citiz:['', Validators.required],
      declaration:['', Validators.required],

      passport:['', Validators.required],
      driving:['', Validators.required],
    });
  }

  get f() { return this.RegistrationForm.controls; }
  onSubmit(payload) {

    this.submitted = true;
    this.showErrorMsg = "Please fill the required fields";
    if (this.RegistrationForm.invalid) {
      return;
    }

    
    console.log(payload);
  }

  onReset() {
    this.RegistrationForm.reset();
    this.loadForm();
  }

  onCancel(){
    var result = confirm('By cancelling you will discard your changes ')
    if(result)
      this.routing.navigate(['/home'])
  }

}
