import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'app-citizen-registration',
  templateUrl: './citizen-registration.component.html',
  styleUrls: ['./citizen-registration.component.css']
})
export class CitizenRegistrationComponent implements OnInit {

  Register_Formone: FormGroup;
  dob: Date = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  nationalities = ['Indian', 'German', 'Italian'];
  maritalStatus = ['Married', 'Unmarried'];
  personalitynationalities = ['Indian', 'German', 'Italian'];
  email:string;
  type:string;
  nonEdittable:string;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private activatedRoute:ActivatedRoute,
     private utilityService:UtilityService) {
    this.activatedRoute.params.subscribe(params=>{
      this.type = params.type;
    })
    
   }

  ngOnInit() {

    this.nonEdittable =  localStorage.getItem('isReviewOnly')

    //var process = localStorage.getItem('process1');
    var Register_Formone = localStorage.getItem('Register_Formone');
    var profile = localStorage.getItem('roles');

    var processStorage = (Register_Formone != null) ? JSON.parse(Register_Formone) : '';
    var profileStorage = (profile !=null) ?JSON.parse(profile):'';

    this.email = profileStorage.email;
//alert(this.utilityService.convertDate(profileStorage.dob));
    if(!processStorage.section1){
      this.Register_Formone = this.formBuilder.group({ 
     
        lastname: [this.nullCheck(profileStorage.lastname),],
        middlename: [this.nullCheck(profileStorage.middlename)],
        firstname: [this.nullCheck(profileStorage.firstname),],
        dob: [this.utilityService.formatDate(this.nullCheck(profileStorage.dob)),],
        pob: [this.nullCheck(profileStorage.pob),],
        country: [(profileStorage.country != null) ? profileStorage.country : 'Jamaica',],
        email: [{value:this.nullCheck(profileStorage.email),disabled:true} , Validators.email],
        number: [(this.nullCheck(profileStorage.number != null)) ? profileStorage.number : '876', []],
        gender: [this.nullCheck(profileStorage.gender),],
        address: [this.nullCheck(profileStorage.address1),],

       
        fatherlastName: [this.nullCheck(processStorage.fatherlastName), Validators.email],
        fathermiddleName: [this.nullCheck(processStorage.fathermiddleName),],
        fatherfirstName: [this.nullCheck(processStorage.fatherfirstName)],
        fatherdob: [this.nullCheck(processStorage.fatherdob),],
        fatherpob: [this.nullCheck(processStorage.fatherpob),],
        fathercob: [this.nullCheck(processStorage.fathercob)],
       
        maritalStatus: [this.nullCheck(processStorage.maritalStatus),],
        spouselastname: [this.nullCheck(processStorage.spouselastname),],
        spousefirstname: [this.nullCheck(processStorage.spousefirstname)],
        spousedob: [this.nullCheck(processStorage.spousedob)],
        spousepob: [this.nullCheck(processStorage.spousepob),],
        spousecob: [this.nullCheck(processStorage.spousecob),],

        citizen: [this.nullCheck(processStorage.citizen),],
        citizencountry: [this.nullCheck(processStorage.citizencountry),],

        fullpostalAddress1: [this.nullCheck(processStorage.fullpostalAddress1),],
        fullpostalfromDate1: [this.nullCheck(processStorage.fullpostalfromDate1),],
        fullpostaltoDate1: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostaltoDate1)),],
        fullpostalyears1: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostalyears1)),],
        fullpostalmonths1: [this.nullCheck(processStorage.fullpostalmonths1),],
        fullpostalAddress2: [this.nullCheck(processStorage.fullpostalAddress2),],
        fullpostalfromDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostalfromDate2)),],
        fullpostaltoDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostaltoDate2)),],
        fullpostalyears2: [this.nullCheck(processStorage.fullpostalyears2),],
        fullpostalmonths2: [this.nullCheck(processStorage.fullpostalmonths2),],
        fullpostalAddress3: [this.nullCheck(processStorage.fullpostalAddress3),],
        fullpostalfromDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostalfromDate3)),],
        fullpostaltoDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostaltoDate3)),],
        fullpostalyears3: [this.nullCheck(processStorage.fullpostalyears3),],
        fullpostalmonths3: [this.nullCheck(processStorage.fullpostalmonths3),],
        fullpostalAddress4: [this.nullCheck(processStorage.fullpostalAddress4),],
        fullpostalfromDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostalfromDate4)),],
        fullpostaltoDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostaltoDate4)),],
        fullpostalyears4: [this.nullCheck(processStorage.fullpostalyears4),],
        fullpostalmonths4: [this.nullCheck(processStorage.fullpostalmonths4),],
        fullpostalAddress5: [this.nullCheck(processStorage.fullpostalAddress5),],
        fullpostalfromDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostalfromDate5)),],
        fullpostaltoDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.fullpostaltoDate5)),],
        fullpostalyears5: [this.nullCheck(processStorage.fullpostalyears5),],
        fullpostalmonths5: [this.nullCheck(processStorage.fullpostalmonths5),],
  
        crownServiceDept1: [this.nullCheck(processStorage.crownServiceDept1)],
        crownServiceCapacity1: [this.nullCheck(processStorage.crownServiceCapacity1)],
        crownServicefromDate1: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate1))],
        crownServiceToDate1: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate1))],
        crownServiceYears1: [this.nullCheck(processStorage.crownServiceYears1)],
        crownServiceMonths1: [this.nullCheck(processStorage.crownServiceYears1)],
        crownServiceDept2: [this.nullCheck(processStorage.crownServiceDept2)],
        crownServiceCapacity2: [this.nullCheck(processStorage.crownServiceCapacity2)],
        crownServicefromDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate2))],
        crownServiceToDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate2))],
        crownServiceYears2: [this.nullCheck(processStorage.crownServiceYears2)],
        crownServiceMonths2: [this.nullCheck(processStorage.crownServiceYears2)],
        crownServiceDept3: [this.nullCheck(processStorage.crownServiceDept3)],
        crownServiceCapacity3: [this.nullCheck(processStorage.crownServiceCapacity3)],
        crownServicefromDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate3))],
        crownServiceToDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate3))],
        crownServiceYears3: [this.nullCheck(processStorage.crownServiceYears3)],
        crownServiceMonths3: [this.nullCheck(processStorage.crownServiceYears3)],
        crownServiceDept4: [this.nullCheck(processStorage.crownServiceDept4)],
        crownServiceCapacity4: [this.nullCheck(processStorage.crownServiceCapacity4)],
        crownServicefromDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate4))],
        crownServiceToDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate4))],
        crownServiceYears4: [this.nullCheck(processStorage.crownServiceYears4)],
        crownServiceMonths4: [this.nullCheck(processStorage.crownServiceYears4)],
        crownServiceDept5: [this.nullCheck(processStorage.crownServiceDept5)],
        crownServiceCapacity5: [this.nullCheck(processStorage.crownServiceCapacity5)],
        crownServicefromDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate5))],
        crownServiceToDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.crownServicefromDate5))],
        crownServiceYears5: [this.nullCheck(processStorage.crownServiceYears5)],
        crownServiceMonths5: [this.nullCheck(processStorage.crownServiceYears5)],
        years_block: [this.nullCheck(processStorage.years_block)],
        citizen_renounced: [this.nullCheck(processStorage.crownServiceCapacity5)],
        renouncedDate: [this.utilityService.formatDate(this.nullCheck(processStorage.renouncedDate))],
        citizen_declare: [this.nullCheck(processStorage.crownServiceCapacity5)],
        declarationDate: [this.utilityService.formatDate(this.nullCheck(processStorage.declarationDate))],
       
        accept: [this.nullCheck(processStorage.accept),]
      })

    }
    else{
      this.Register_Formone = this.formBuilder.group({
        lastname: [this.nullCheck(processStorage.profile.lastname),],
          middlename: [this.nullCheck(processStorage.profile.middlename)],
          firstname: [this.nullCheck(processStorage.profile.firstname),],
          dob: [this.nullCheck(processStorage.profile.dob),],
          pob: [this.nullCheck(processStorage.profile.pob),],
          country: [(processStorage.profile.country != null) ? processStorage.profile.country : 'Jamaica',],
          email: [this.nullCheck(processStorage.profile.email), [, Validators.email]],
          number: [(this.nullCheck(processStorage.profile.number != null)) ? processStorage.profile.number : '876', []],
          gender: [this.nullCheck(processStorage.profile.gender),],
          address: [this.nullCheck(processStorage.profile.address),],
      
          fatherlastName: [this.nullCheck(processStorage.section1.fatherlastName), Validators.email],
          fathermiddleName: [this.nullCheck(processStorage.section1.fathermiddleName),],
          fatherfirstName: [this.nullCheck(processStorage.section1.fatherfirstName)],
          fatherdob: [this.nullCheck(processStorage.section1.fatherdob),],
          fatherpob: [this.nullCheck(processStorage.section1.fatherpob),],
          fathercob: [this.nullCheck(processStorage.section1.fathercob)],

          maritalStatus: [this.nullCheck(processStorage.section1.maritalStatus),],
          spouselastname: [this.nullCheck(processStorage.section1.spouselastname),],
          spousefirstname: [this.nullCheck(processStorage.section1.spousefirstname)],
          spousedob: [this.nullCheck(processStorage.section1.spousedob)],
          spousepob: [this.nullCheck(processStorage.section1.spousepob),],
          spousecob: [this.nullCheck(processStorage.section1.spousecob),],

          citizen: [this.nullCheck(processStorage.section2.citizen),],
          citizencountry: [this.nullCheck(processStorage.section2.citizencountry),],
  
          fullpostalAddress1: [this.nullCheck(processStorage.section3.fullpostalAddress1),],
          fullpostalfromDate1: [this.nullCheck(processStorage.section3.fullpostalfromDate1),],
          fullpostaltoDate1: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostaltoDate1)),],
          fullpostalyears1: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostalyears1)),],
          fullpostalmonths1: [this.nullCheck(processStorage.section3.fullpostalmonths1),],
          fullpostalAddress2: [this.nullCheck(processStorage.section3.fullpostalAddress2),],
          fullpostalfromDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostalfromDate2)),],
          fullpostaltoDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostaltoDate2)),],
          fullpostalyears2: [this.nullCheck(processStorage.section3.fullpostalyears2),],
          fullpostalmonths2: [this.nullCheck(processStorage.section3.fullpostalmonths2),],
          fullpostalAddress3: [this.nullCheck(processStorage.section3.fullpostalAddress3),],
          fullpostalfromDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostalfromDate3)),],
          fullpostaltoDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostaltoDate3)),],
          fullpostalyears3: [this.nullCheck(processStorage.section3.fullpostalyears3),],
          fullpostalmonths3: [this.nullCheck(processStorage.section3.fullpostalmonths3),],
          fullpostalAddress4: [this.nullCheck(processStorage.section3.fullpostalAddress4),],
          fullpostalfromDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostalfromDate4)),],
          fullpostaltoDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostaltoDate4)),],
          fullpostalyears4: [this.nullCheck(processStorage.section3.fullpostalyears4),],
          fullpostalmonths4: [this.nullCheck(processStorage.section3.fullpostalmonths4),],
          fullpostalAddress5: [this.nullCheck(processStorage.section3.fullpostalAddress5),],
          fullpostalfromDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostalfromDate5)),],
          fullpostaltoDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.section3.fullpostaltoDate5)),],
          fullpostalyears5: [this.nullCheck(processStorage.section3.fullpostalyears5),],
          fullpostalmonths5: [this.nullCheck(processStorage.section3.fullpostalmonths5),],
    
          crownServiceDept1: [this.nullCheck(processStorage.section4.crownServiceDept1)],
          crownServiceCapacity1: [this.nullCheck(processStorage.section4.crownServiceCapacity1)],
          crownServicefromDate1: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate1))],
          crownServiceToDate1: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate1))],
          crownServiceYears1: [this.nullCheck(processStorage.section4.crownServiceYears1)],
          crownServiceMonths1: [this.nullCheck(processStorage.section4.crownServiceYears1)],
          crownServiceDept2: [this.nullCheck(processStorage.section4.crownServiceDept2)],
          crownServiceCapacity2: [this.nullCheck(processStorage.section4.crownServiceCapacity2)],
          crownServicefromDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate2))],
          crownServiceToDate2: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate2))],
          crownServiceYears2: [this.nullCheck(processStorage.section4.crownServiceYears2)],
          crownServiceMonths2: [this.nullCheck(processStorage.section4.crownServiceYears2)],
          crownServiceDept3: [this.nullCheck(processStorage.section4.crownServiceDept3)],
          crownServiceCapacity3: [this.nullCheck(processStorage.section4.crownServiceCapacity3)],
          crownServicefromDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate3))],
          crownServiceToDate3: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate3))],
          crownServiceYears3: [this.nullCheck(processStorage.section4.crownServiceYears3)],
          crownServiceMonths3: [this.nullCheck(processStorage.section4.crownServiceYears3)],
          crownServiceDept4: [this.nullCheck(processStorage.section4.crownServiceDept4)],
          crownServiceCapacity4: [this.nullCheck(processStorage.section4.crownServiceCapacity4)],
          crownServicefromDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate4))],
          crownServiceToDate4: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate4))],
          crownServiceYears4: [this.nullCheck(processStorage.section4.crownServiceYears4)],
          crownServiceMonths4: [this.nullCheck(processStorage.section4.crownServiceYears4)],
          crownServiceDept5: [this.nullCheck(processStorage.section4.crownServiceDept5)],
          crownServiceCapacity5: [this.nullCheck(processStorage.section4.crownServiceCapacity5)],
          crownServicefromDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate5))],
          crownServiceToDate5: [this.utilityService.formatDate(this.nullCheck(processStorage.section4.crownServicefromDate5))],
          crownServiceYears5: [this.nullCheck(processStorage.section4.crownServiceYears5)],
          crownServiceMonths5: [this.nullCheck(processStorage.section4.crownServiceYears5)],
          years_block: [this.nullCheck(processStorage.section4.years_block)],
          
          citizen_renounced: [this.nullCheck(processStorage.section5.crownServiceCapacity5)],
          renouncedDate: [this.utilityService.formatDate(this.nullCheck(processStorage.section5.renouncedDate))],
          citizen_declare: [this.nullCheck(processStorage.section5.crownServiceCapacity5)],
          declarationDate: [this.utilityService.formatDate(this.nullCheck(processStorage.section5.declarationDate))],
         
          accept: [this.nullCheck(processStorage.accept),]

        


      })
    }
    var nonEdittable =  localStorage.getItem('isReviewOnly')
    if(this.nonEdittable){
      this.Register_Formone.disable();
    }

    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false,
      maxDate: this.dob, dateInputFormat: 'DD/MM/YYYY'
    })
  }

  nullCheck(value) {
    return (value != null) ? value : '';
  }
  onCancel() {

  }

  onSave(payload) {
   payload.email = this.email;
      if(!payload){
        alert('data doesnt exsit');
        return false;
      }else{
        alert('data saved successfully ');
        return false;
      }      
  }

  next(payload) {
    debugger;
    payload.email = this.email;
    localStorage.setItem('Register_Formone', JSON.stringify(payload));
    
  //  localStorage.setItem('roles', JSON.stringify(payload.profile));

  if(this.nonEdittable)
    this.router.navigate(['/citizenRegistration-process2',this.type]);
  else
    this.router.navigate(['/citizenRegistration-process2']);
  }

}
