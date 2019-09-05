import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UtilityService } from '../../shared/services/utility.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marriage-application-process-three',
  templateUrl: './marriage-application-process-three.component.html',
  styleUrls: ['./marriage-application-process-three.component.css']
})
export class MarriageApplicationProcessThreeComponent implements OnInit {

  showErrorMsg: string;
  dob: Date = new Date();
  profile:any;

  marriageApplicationFormProcess3: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;
  @BlockUI() blockUI: NgBlockUI;
  countries: any;
  marriageFormSession: any;
  type:string;
  nonEdittable:string;

  maritalStatus = ['Married', 'Unmarried'];

  constructor(private utilityService: UtilityService,private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute, private router: Router) {
    this.profile  = JSON.parse(sessionStorage.getItem('profile'));
      this.activatedRoute.params.subscribe(params=>{
        this.type = params.type;
      })
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      //maxDate: this.dob,
      showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY'
    })
    this.utilityService.loadCountriesFromJson().subscribe(data => {
      this.countries = data;
    })

  }

  ngOnInit() {
    this.nonEdittable =  localStorage.getItem('isReviewOnly');
      this.marriageApplicationFormProcess3 = this.formBuilder.group({

        lastname: [''],
        middlename: [''],
        firstname: [''],
        dob: [''],
        pob: [''],
        country: [''],
        email: [''],
        number: [''],
        gender: [''],
        address1: [''],
        address2: [''],
        zip: [''],

        pom: [''],
        dom: [''],

        paternallastName: [''],
        paternalmiddleName: [''],
        paternalfirstName: [''],
        paternaldob: [''],
        paternalpob: [''],

        husbandlastname: [''],
        husbandmiddlename: [''],
        husbandfirstname: [''],
        husbandpob: [''],
        husbanddob: [''],
        hflastname: [''],
        hfmiddlename: [''],
        hffirstname: [''],
        hfpob: [''],
        hfdob: [''],
        maritalStatus: [''],
        terminated: [''],
        death: [''],
        citizen: [''],
        citizenCountry: [''],
        citizenState: [''],

        priormarriage: [''],
        priormarriageLocation: [''],
        priorhusbandlastname: [''],
        priorhusbandmiddlename: [''],
        priorhusbandfirstname: [''],
        priorhusbandnationality: [''],
        renounced: [''],
        renunciationdate: [''],
        citizendeclare: [''],
        declarationdate: [''],
        justicelastname: [''],
        justicemiddlename: [''],
        justicefirstname: [''],
        justiceackdate: [''],

        accept:[''],
      });

      var nonEdittable =  localStorage.getItem('isReviewOnly')
      if(this.nonEdittable){
        this.marriageApplicationFormProcess3.disable();
      }
  }

  home() {
    this.router.navigate(['/home']);
  }

  onSave(payload) {
     //this.naturialisationService.submitNaturalisationForm(payload).subscribe((data:any)=>{
       if(!payload){
         alert('data doesnt exsit');
         return false;
       }else{
         alert('data saved successfully ');
         return false;
       }      
     //});
   }
 
   next(payload) {
     debugger;
     localStorage.setItem('marriageApplicationFormProcess3', JSON.stringify(payload));
   if(this.nonEdittable)
     this.router.navigate(['/marriageApplication-process4',this.type]);
   else
     this.router.navigate(['/marriageApplication-process4']);
   }

   back(payload){
    localStorage.setItem('marriageApplicationFormProcess3', JSON.stringify(payload));
    this.router.navigate(['/marriageApplication-process2']) 
  }

}
