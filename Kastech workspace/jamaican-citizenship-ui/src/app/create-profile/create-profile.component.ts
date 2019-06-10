import { Component, OnInit } from '@angular/core';
import { CreateProfileService } from '../shared/services/create-profile.service';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UtilityService } from '../shared/services/utility.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  submitted:boolean = false;
  showErrorMsg:boolean = false;
  profile:FormGroup;
  dob:Date = new Date();
  countries:any;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private profileService:CreateProfileService,private utilityService:UtilityService, private routing:Router, private formBuilder:FormBuilder) { 
    this.datePickerConfig = Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,dateInputFormat:'DD/MM/YYYY'})
  }
  
  ngOnInit() {
    
    this.profile = this.formBuilder.group({ //new FormGroup({
      firstname:['', [Validators.required, Validators.maxLength(10)]],
      lastname:['',Validators.required],
      middlename:[''],
      dob:[this.dob,Validators.required],
      pob:['Jamaica',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required]],
      gender:['male',Validators.required],
      address:['',Validators.required]
  
    });

    this.countries = this.utilityService.loadCountriesFromJson().subscribe(data=>{
      this.countries = data;   
    })
   
  }
  get f() { return this.profile.controls; }
  onSubmit(payload){
   

    this.submitted = true;
    this.showErrorMsg= true;
    if (this.profile.invalid) {
      return;
    }

    this.blockUI.start('Loading.....');
    this.profileService.createProfile(payload).subscribe(data=>{
      sessionStorage.setItem('profile',JSON.stringify(data));
      this.routing.navigate(['/allForms']);
      console.log('+++++',data);
      this.blockUI.stop();
    });
    console.log(payload);
  }
}
