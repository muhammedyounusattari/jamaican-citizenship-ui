import { Component, OnInit } from '@angular/core';
import { CreateProfileService } from '../shared/services/create-profile.service';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  profile = new FormGroup({
    firstname:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastname:new FormControl(),
    middlename:new FormControl(),
    dob:new FormControl(),
    pob:new FormControl(),
    email:new FormControl(),
    number:new FormControl(),
    gender:new FormControl(),
    address:new FormControl()

  });

  constructor(private profileService:CreateProfileService, private routing:Router) { 
  }

  ngOnInit() {
  }

  onSubmit(payload){
    debugger;
    this.profileService.createProfile(payload).subscribe(data=>{
      sessionStorage.setItem('profile',JSON.stringify(data));
      this.routing.navigate(['/allForms']);
      console.log('+++++',data);
    });
    console.log(payload);
  }
}
