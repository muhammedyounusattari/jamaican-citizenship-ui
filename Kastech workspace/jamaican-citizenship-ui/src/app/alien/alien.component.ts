import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UtilityService } from '../shared/services/utility.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-alien',
  templateUrl: './alien.component.html',
  styleUrls: ['./alien.component.css']
})
export class AlienComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

   datePickerConfig: Partial<BsDatepickerConfig>;
   submitted: boolean = false;
   showErrorMsg: any;
   dob: Date = new Date();
   countries: any;

  alienRegistrationForm: FormGroup;

  nationalities = ['Indian', 'German', 'Italian'];
  maritalStatus = ['Married', 'Unmarried'];
  personalitynationalities = ['Indian', 'German', 'Italian'];
  
  section2: boolean;
  section1: boolean;
  section3: boolean;
  section4: boolean;
  section5: boolean;
  section6: boolean;
  section7: boolean;

  constructor(
     private utilityService: UtilityService,
      private routing: Router,
    private formBuilder: FormBuilder) { 
  }

 

  ngOnInit() {

    //sessionStorage.clear();

    this.section1 = true;
    this.section2 = false;
    this.section3 = false;
    this.section4 = false;
    this.section5 = false;
    this.section6 = false;
    this.section7 = false;
    // /*--CalendarIntiate--*/
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false,
      maxDate: this.dob,dateInputFormat: 'DD/MM/YYYY'
    })

    // //this.loadForm();
     this.loadForm();

    this.countries = this.utilityService.loadCountriesFromJson().subscribe(data => {
      this.countries = data;
    })
  }

  showsection2() {
    this.section1 = false;
    this.section2 = true;
    this.section3 = false;  
    this.section4 = false;
    this.section5 = false;
    this.section6 = false;
    this.section7 = false;
  }
  showsection3() {
    this.section1 = false;
    this.section2 = false;
    this.section3 = true;
    this.section4 = false;  
  this.section5 = false;
  this.section6 = false;  
  this.section7 = false;
}
showsection4() {
  this.section4 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;
  this.section5 = false;
  this.section6 = false;  
  this.section7 = false;
}
showsection5() {
  this.section5 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false; 
  this.section4 = false;
  this.section6 = false;  
  this.section7 = false;
}
showsection6() {
  this.section6 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;  
  this.section4 = false;  
  this.section5 = false;
  this.section7 = false;
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
  this.section1 = true;
  this.section2 = false;
  this.section3 = false;  
  this.section4 = false;  
  this.section5 = false;
  this.section6 = false;
  this.section7 = false;
}

showprevioussection2(){
  this.section3 = false;
  this.section1 = false;
  this.section4 = false;  
  this.section5 = false;
  this.section6 = false;
  this.section7 = false;
  this.section2 = true;
}

showprevioussection3(){
  this.section1 = false;
  this.section2 = false;
  this.section3 = true;
  this.section4 = false;
  this.section5 = false;
  this.section6 = false;
  this.section7 = false;
}

showprevioussection4(){
  this.section3 = false;
  this.section1 = false;
  this.section2 = false;
  this.section4 = true;
  this.section5 = false;
  this.section6 = false;
  this.section7 = false;
}

showprevioussection5(){
  this.section5 = true;
  this.section1 = false;
  this.section2 = false;
  this.section3 = false;
  this.section4 = false;
  this.section6 = false;
  this.section7 = false;
}

loadForm() {
  this.alienRegistrationForm = this.formBuilder.group({ //new FormGroup({
      personalData: this.formBuilder.group({
        lastname:  ['', Validators.required],
        middlename: [''],
        firstname:  ['', Validators.required],
        dob: [this.dob, Validators.required],
        pob: ['', Validators.required],
        country: ['Jamaica', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        number: ['876', [Validators.required]],
        gender: ['', Validators.required],
        address: ['', Validators.required],
        name:['', Validators.required],
        occupation:['', Validators.required],
        othername:[''],
        businessaddress:['', Validators.required],
        nationalityControl:['', Validators.required],
        presentnationalityControl: [''],
      }),
       section2: this.formBuilder.group({
        britishterritory:['', Validators.required],
        status:[''],
        Nationalitystatus:[''],
        fatherLastName:['', Validators.required],
        fatherFirstName:['', Validators.required],
        FatherAddress:['', Validators.required],
        FatherCOB:['', Validators.required],
        motherLastName:['', Validators.required],
        motherFirstName:['', Validators.required],
        motherAddress:['', Validators.required],
        motherCOB:['', Validators.required],
        maritalStatus:['', Validators.required],
        dom:['', Validators.required],
        pom:['', Validators.required],
        dod:[''],
        pod:[''],
        dodissolved:[''],
        podissolved:[''],
        wifeLastname:['', Validators.required],
        wifeFirstname:['', Validators.required],
        wifeAddress:['', Validators.required],
        wifeCOB:['', Validators.required],
        husbandLastname:['', Validators.required],
        husbandFirstname:['', Validators.required],
        husbandaddress:['', Validators.required],
        husbandCOB:['', Validators.required],
      }),
      section3: this.formBuilder.group({
        residentaddress:['', Validators.required],
        residentfrom:['', Validators.required],
        residentto:['', Validators.required],
        residentanotheraddress:[''],
        residentanotherfrom:[''],
        residentanotherto:[''],
        years_block:['', Validators.required],
        visitedCountries:[''],
        visitedCountriesfrom:[''],
        visitedCountriesto:[''],
      }),
      section4: this.formBuilder.group({
        proceedingsname:[''],
        proceedingsDate:[''],
        proceedingsPlace:[''],
        proceedingsResult:[''],
        compositionCreditors:[''],
        dischargeBankruptcy:[''],
        bankruptcyDate:[''],
        previousAppDate:['',Validators.required]
      }),
      section5: this.formBuilder.group({
        childrenName:['', Validators.required],
        childrenDob:['', Validators.required],
        childrenPob:['', Validators.required],
        childrenresidence:['', Validators.required],
        childrenNameother:[''],
        childrenDobother:[''],
        childrenPobother:[''],
        childrenresidenceother:['']
      }),
      section6: this.formBuilder.group({
        file:[''],
        birthCert:[''],
        passport:[''],
        driving:[''],
        declaration:['', Validators.required]
      })
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


get f () { 
  return this.alienRegistrationForm.controls;
}
onSubmit(payload) {
  //console.log(this.f.personalData);
  if (this.alienRegistrationForm.controls.personalData.status == "INVALID") {
    console.log('personData =' + this.alienRegistrationForm.controls.personalData.status);
    this.showErrorMsg = "Please fill the required fields";
    this.submitted = true;
   
   } if (this.alienRegistrationForm.controls.personalData.status == "VALID") {
    console.log('personData =' + this.alienRegistrationForm.controls.personalData.status);
    sessionStorage.setItem('personalData',JSON.stringify(this.alienRegistrationForm.controls.personalData.value));
    this.showErrorMsg = false;
    this.submitted = false;
   
    this.showsection2();
    //console.log(payload);
  } if(this.alienRegistrationForm.controls.section2.status == "INVALID" && this.alienRegistrationForm.controls.section2.touched == true){
    console.log('section2 =' + this.alienRegistrationForm.controls.section2.status);
    this.showErrorMsg = "Please fill the required fields";
    this.submitted = true;
  } if(this.alienRegistrationForm.controls.section2.status == "VALID") {
    console.log('section2 =' + this.alienRegistrationForm.controls.section2.status);
    sessionStorage.setItem('section2',JSON.stringify(this.alienRegistrationForm.controls.section2.value));
    this.showErrorMsg = false;
    this.submitted = false;
    this.showsection3();
    //console.log(payload);
   } if(this.alienRegistrationForm.controls.section3.status == "INVALID" && this.alienRegistrationForm.controls.section3.touched == true){
    console.log('section3 =' + this.alienRegistrationForm.controls.section3.status);
    this.showErrorMsg = "Please fill the required fields";
    this.submitted = true;
  } if(this.alienRegistrationForm.controls.section3.status == "VALID") {
    console.log('section3 =' + this.alienRegistrationForm.controls.section3.status);
    sessionStorage.setItem('section3',JSON.stringify(this.alienRegistrationForm.controls.section3.value));
    this.showErrorMsg = false;
    this.submitted = false;
    this.showsection4();
    //console.log(payload);
  } if(this.alienRegistrationForm.controls.section4.status == "INVALID" &&      this.alienRegistrationForm.controls.section4.touched == true){
    debugger;
    console.log('section4 =' + this.alienRegistrationForm.controls.section4.status);
    this.showErrorMsg = "Please fill the required fields";
    this.submitted = true;
  } if(this.alienRegistrationForm.controls.section4.status == "VALID") {
    console.log('section4 =' + this.alienRegistrationForm.controls.section4);
    console.log('section4 =' + this.alienRegistrationForm.controls.section4.status);
    sessionStorage.setItem('section4',JSON.stringify(this.alienRegistrationForm.controls.section4.value));
    this.showErrorMsg = false;
    this.submitted = false;
    this.showsection5();
    //console.log(payload);
  } if(this.alienRegistrationForm.controls.section5.status == "INVALID" &&      this.alienRegistrationForm.controls.section5.touched == true){
    console.log('section5 =' + this.alienRegistrationForm.controls.section4.status);
    this.showErrorMsg = "Please fill the required fields";
    this.submitted = true;
  } if(this.alienRegistrationForm.controls.section5.status == "VALID") {
    console.log('section5 =' + this.alienRegistrationForm.controls.section5.status);
    sessionStorage.setItem('section5',JSON.stringify(this.alienRegistrationForm.controls.section5.value));
    this.showErrorMsg = false;
    this.submitted = false;
    this.showsection6();
    //console.log(payload);
  } if(this.alienRegistrationForm.controls.section6.status == "INVALID" &&      this.alienRegistrationForm.controls.section6.touched == true){
    console.log('section6 =' + this.alienRegistrationForm.controls.section6.status);
    this.showErrorMsg = "Please fill the required fields";
    this.submitted = true;
  } if(this.alienRegistrationForm.controls.section6.status == "VALID") {
    console.log('section6 =' + this.alienRegistrationForm.controls.section6.status);
    sessionStorage.setItem('section6',JSON.stringify(this.alienRegistrationForm.controls.section6.value));
    this.showErrorMsg = false;
    this.submitted = false;
    this.showsection7();
    console.log(payload);
    sessionStorage.setItem('payload',JSON.stringify(payload));
  } 
  

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
onHome(){
  this.routing.navigate(['/home'])
}

}
