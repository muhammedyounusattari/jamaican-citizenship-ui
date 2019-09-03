import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../shared/services/utility.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-naturalisation',
  templateUrl: './naturalisation.component.html',
  styleUrls: ['./naturalisation.component.css']
})
export class NaturalisationComponent implements OnInit {

  process1: FormGroup;
  dob: Date = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  nationalities = ['Indian', 'German', 'Italian'];
  maritalStatus = ['Married', 'Unmarried'];
  personalitynationalities = ['Indian', 'German', 'Italian'];
  email:string;
  type:string;
  nonEdittable:string;
  
  constructor(private datePipe: DatePipe,private formBuilder: FormBuilder, private router: Router,private activatedRoute:ActivatedRoute, private utilityService:UtilityService) {
    this.activatedRoute.params.subscribe(params=>{
      this.type = params.type;
    })
    
   }

  ngOnInit() {

    this.nonEdittable =  localStorage.getItem('isReviewOnly')

    //var process = localStorage.getItem('process1');
    var process = localStorage.getItem('process1');
    var profile = localStorage.getItem('roles');
    var processStorage = (process != null) ?JSON.parse(process) : '';
    var profileStorage = (profile !=null) ?JSON.parse(profile):'';

    
    this.email = profileStorage.email;
    if(!processStorage.section1){
      this.process1 = this.formBuilder.group({ 
     
        lastname: [this.nullCheck(profileStorage.lastname),],
        middlename: [this.nullCheck(profileStorage.middlename)],
        firstname: [this.nullCheck(profileStorage.firstname),],
        //dob: [this.utilityService.enhancedDate(profileStorage.dob, 0, 0, -13)],
        dob: [this.datePipe.transform(this.nullCheck(profileStorage.dob),"M/d/yy"),],
        pob: [this.nullCheck(profileStorage.pob),],
        country: [(profileStorage.country != null) ? profileStorage.country : 'Jamaica',],
        email: [{value:this.nullCheck(profileStorage.email),disabled:true} , Validators.email],
        number: [(this.nullCheck(profileStorage.number != null)) ? profileStorage.number : '876', []],
        gender: [this.nullCheck(profileStorage.gender),],
        address: [this.nullCheck(profileStorage.address1),],

       
        alternateemail: [this.nullCheck(processStorage.alternateemail), Validators.email],
        occupation: [this.nullCheck(processStorage.occupation),],
        othername: [this.nullCheck(processStorage.othername)],
        businessaddress: [this.nullCheck(processStorage.businessaddress),],
        nationalityControl: [this.nullCheck(processStorage.nationalityControl),],
        presentnationalityControl: [this.nullCheck(processStorage.presentnationalityControl)],
        nationalityState: [this.nullCheck(processStorage.nationalityState)],
        nationalityStateless: [this.nullCheck(processStorage.nationalityStateless)],
  
        britishterritory: [this.nullCheck(processStorage.britishterritory),],
        status: [this.nullCheck(processStorage.status)],
        Nationalitystatus: [this.nullCheck(processStorage.Nationalitystatus)],
        fatherLastName: [this.nullCheck(processStorage.fatherLastName),],
        fatherFirstName: [this.nullCheck(processStorage.fatherFirstName),],
        FatherAddress: [this.nullCheck(processStorage.FatherAddress),],
        FatherCOB: [this.nullCheck(processStorage.FatherCOB),],
        motherLastName: [this.nullCheck(processStorage.motherLastName),],
        motherFirstName: [this.nullCheck(processStorage.motherFirstName),],
        motherAddress: [this.nullCheck(processStorage.motherAddress),],
        motherCOB: [this.nullCheck(processStorage.motherCOB),],
        maritalStatus: [this.nullCheck(processStorage.maritalStatus),],
        dom: [this.datePipe.transform(this.nullCheck(processStorage.dom)),],
        pom: [this.nullCheck(processStorage.pom),],
        dod: [this.datePipe.transform(this.nullCheck(processStorage.dod))],
        pod: [this.nullCheck(processStorage.pod)],
        dodissolved: [this.datePipe.transform(this.nullCheck(processStorage.dodissolved))],
        podissolved: [this.nullCheck(processStorage.podissolved)],
        wifeLastname: [this.nullCheck(processStorage.wifeLastname),],
        wifeFirstname: [this.nullCheck(processStorage.wifeFirstname),],
        wifeAddress: [this.nullCheck(processStorage.wifeAddress),],
        wifeCOB: [this.nullCheck(processStorage.wifeCOB),],
        husbandLastname: [this.nullCheck(processStorage.husbandLastname),],
        husbandFirstname: [this.nullCheck(processStorage.husbandFirstname),],
        husbandaddress: [this.nullCheck(processStorage.husbandaddress),],
        husbandCOB: [this.nullCheck(processStorage.husbandCOB),],
  
        residentaddress1: [this.nullCheck(processStorage.residentaddress1),],
        residentfrom1: [this.nullCheck(processStorage.residentfrom1),],
        residentto1: [this.nullCheck(processStorage.residentto1),],
        residentaddress2: [this.nullCheck(processStorage.residentaddress2),],
        residentfrom2: [this.nullCheck(processStorage.residentfrom2),],
        residentto2: [this.nullCheck(processStorage.residentto2),],
        residentaddress3: [this.nullCheck(processStorage.residentaddress3),],
        residentfrom3: [this.nullCheck(processStorage.residentfrom3),],
        residentto3: [this.nullCheck(processStorage.residentto3),],
        years_block: [this.nullCheck(processStorage.years_block),],
  
        visitedCountries1: [this.nullCheck(processStorage.visitedCountries1)],
        visitedCountriesfrom1: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom1))],
        visitedCountriesto1: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto1))],
        visitedCountries2: [this.nullCheck(processStorage.visitedCountries2)],
        visitedCountriesfrom2: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom2))],
        visitedCountriesto2: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto2))],
        visitedCountries3: [this.nullCheck(processStorage.visitedCountries3)],
        visitedCountriesfrom3: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom3))],
        visitedCountriesto3: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto3))],
        visitedCountries4: [this.nullCheck(processStorage.visitedCountries4)],
        visitedCountriesfrom4: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom4))],
        visitedCountriesto4: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto4))],
        visitedCountries5: [this.nullCheck(processStorage.visitedCountries5)],
        visitedCountriesfrom5: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesfrom5))],
        visitedCountriesto5: [this.datePipe.transform(this.nullCheck(processStorage.visitedCountriesto5))],
        
  
        proceedingsname1: [this.nullCheck(processStorage.proceedingsname1)],
        proceedingsDate1: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate1))],
        proceedingsPlace1: [this.nullCheck(processStorage.proceedingsPlace1)],
        proceedingsResult1: [this.nullCheck(processStorage.proceedingsResult1)],
        proceedingsname2: [this.nullCheck(processStorage.proceedingsname2)],
        proceedingsDate2: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate2))],
        proceedingsPlace2: [this.nullCheck(processStorage.proceedingsPlace2)],
        proceedingsResult2: [this.nullCheck(processStorage.proceedingsResult2)],
        proceedingsname3: [this.nullCheck(processStorage.proceedingsname3)],
        proceedingsDate3: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate3))],
        proceedingsPlace3: [this.nullCheck(processStorage.proceedingsPlace3)],
        proceedingsResult3: [this.nullCheck(processStorage.proceedingsResult3)],
        proceedingsname4: [this.nullCheck(processStorage.proceedingsname4)],
        proceedingsDate4: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate4))],
        proceedingsPlace4: [this.nullCheck(processStorage.proceedingsPlace4)],
        proceedingsResult4: [this.nullCheck(processStorage.proceedingsResult4)],
        proceedingsname5: [this.nullCheck(processStorage.proceedingsname5)],
        proceedingsDate5: [this.datePipe.transform(this.nullCheck(processStorage.proceedingsDate5))],
        proceedingsPlace5: [this.nullCheck(processStorage.proceedingsPlace5)],
        proceedingsResult5: [this.nullCheck(processStorage.proceedingsResult5)],
  
        compositionCreditors: [this.datePipe.transform(this.nullCheck(processStorage.compositionCreditors))],
        dischargeBankruptcy: [this.datePipe.transform(this.nullCheck(processStorage.dischargeBankruptcy))],
        bankruptcyDate: [this.datePipe.transform(this.nullCheck(processStorage.bankruptcyDate))],
        previousAppDate: [this.datePipe.transform(this.nullCheck(processStorage.previousAppDate)),],
  
        childrenName1: [this.nullCheck(processStorage.childrenName1)],
        childrenDob1: [this.datePipe.transform(this.nullCheck(processStorage.childrenDob1))],
        childrenPob1: [this.nullCheck(processStorage.childrenPob1)],
        childrenresidence1: [this.nullCheck(processStorage.childrenresidence1)],
        childrenName2: [this.nullCheck(processStorage.childrenName2)],
        childrenDob2: [this.datePipe.transform(this.nullCheck(processStorage.childrenDob2))],
        childrenPob2: [this.nullCheck(processStorage.childrenPob2)],
        childrenresidence2: [this.nullCheck(processStorage.childrenresidence2)],
        childrenNameother1: [this.nullCheck(processStorage.childrenNameother1)],
        childrenDobother1: [this.datePipe.transform(this.nullCheck(processStorage.childrenDobother1))],
        childrenPobother1: [this.nullCheck(processStorage.childrenPobother1)],
        childrenresidenceother1: [this.nullCheck(processStorage.childrenresidenceother1)],
        childrenNameother2: [this.nullCheck(processStorage.childrenNameother2)],
        childrenDobother2: [this.datePipe.transform(this.nullCheck(processStorage.childrenDobother2))],
        childrenPobother2: [this.nullCheck(processStorage.childrenPobother2)],
        childrenresidenceother2: [this.nullCheck(processStorage.childrenresidenceother2)],
  
        accept: [this.nullCheck(processStorage.accept),]
      })

    }else{

    this.process1 = this.formBuilder.group({
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
      alternateemail: [this.nullCheck(processStorage.section1.name), Validators.email],
      occupation: [this.nullCheck(processStorage.section1.occupation),],
      othername: [this.nullCheck(processStorage.section1.otherName)],
      businessaddress: [this.nullCheck(processStorage.section1.busAddress),],

      nationalityControl: [this.nullCheck(processStorage.section2.nationalityBirth),],
      presentnationalityControl: [this.nullCheck(processStorage.section2.nationalityPresent)],
      nationalityState: [this.nullCheck(processStorage.section2.nationalityChanged)],
      nationalityStateless: [this.nullCheck(processStorage.section2.stateless)],

      britishterritory: [this.nullCheck(processStorage.section2.britishTerritory),],
      status: [this.nullCheck(processStorage.section2.statusAcquired)],
      Nationalitystatus: [this.nullCheck(processStorage.section2.nationalityStatus)],


      fatherLastName: [this.nullCheck(processStorage.section3.fatherLName),],
      fatherFirstName: [this.nullCheck(processStorage.section3.fatherFName),],
      FatherAddress: [this.nullCheck(processStorage.section3.fatherAddress),],
      FatherCOB: [this.nullCheck(processStorage.section3.fatherCOB),],
      motherLastName: [this.nullCheck(processStorage.section3.motherLName),],
      motherFirstName: [this.nullCheck(processStorage.section3.motherFName),],
      motherAddress: [this.nullCheck(processStorage.section3.motherAddress),],
      motherCOB: [this.nullCheck(processStorage.section3.motherCOB),],

      maritalStatus: [this.nullCheck(processStorage.section4.maritalStatus),],
      dom: [this.datePipe.transform(this.nullCheck(processStorage.section4.dateOfMarriage)),],
      pom: [this.nullCheck(processStorage.section4.placeOfMarriabe),],
      dod: [this.datePipe.transform(this.nullCheck(processStorage.section4.husbandDate))],
      pod: [this.nullCheck(processStorage.section4.husbandPlaceOfDeath)],
      dodissolved: [this.datePipe.transform(this.nullCheck(processStorage.section4.marriageDissolvedDate))],
      podissolved: [this.nullCheck(processStorage.section4.marriagePlaceOfDecree)],
      wifeLastname: [this.nullCheck(processStorage.section4.wifeLName),],
      wifeFirstname: [this.nullCheck(processStorage.section4.wifeFName),],
      wifeAddress: [this.nullCheck(processStorage.section4.wifeAddress),],
      wifeCOB: [this.nullCheck(processStorage.section4.wifeCOB),],
      husbandLastname: [this.nullCheck(processStorage.section4.husbandLname),],
      husbandFirstname: [this.nullCheck(processStorage.section4.husbandFName),],
      husbandaddress: [this.nullCheck(processStorage.section4.husbandAddress),],
      husbandCOB: [this.nullCheck(processStorage.section4.husbandCOB),],

      residentaddress1: [this.nullCheck(processStorage.section5.postalAddress1),],
      residentfrom1: [this.nullCheck(processStorage.section5.fromDate1),],
      residentto1: [this.nullCheck(processStorage.section5.toDate1),],
      residentaddress2: [this.nullCheck(processStorage.section5.postalAddress2),],
      residentfrom2: [this.nullCheck(processStorage.section5.fromDate2),],
      residentto2: [this.nullCheck(processStorage.section5.toDate2),],
      residentaddress3: [this.nullCheck(processStorage.section5.postalAddress3),],
      residentfrom3: [this.nullCheck(processStorage.section5.fromDate3),],
      residentto3: [this.nullCheck(processStorage.section5.toDate3),],
      years_block: [this.nullCheck(processStorage.section5.yearsOfResidence),],

      visitedCountries1: [this.nullCheck(processStorage.section6.country1Visited)],
      visitedCountriesfrom1: [this.datePipe.transform(this.nullCheck(processStorage.section6.country1FromDate))],
      visitedCountriesto1: [this.datePipe.transform(this.nullCheck(processStorage.section6.country1ToDate))],
      visitedCountries2: [this.nullCheck(processStorage.section6.country2Visited)],
      visitedCountriesfrom2: [this.datePipe.transform(this.nullCheck(processStorage.section6.country2FromDate))],
      visitedCountriesto2: [this.datePipe.transform(this.nullCheck(processStorage.section6.country2ToDate))],
      visitedCountries3: [this.nullCheck(processStorage.section6.country3Visited)],
      visitedCountriesfrom3: [this.datePipe.transform(this.nullCheck(processStorage.section6.country3FromDate))],
      visitedCountriesto3: [this.datePipe.transform(this.nullCheck(processStorage.section6.country3ToDate))],
      visitedCountries4: [this.nullCheck(processStorage.section6.country4Visited)],
      visitedCountriesfrom4: [this.datePipe.transform(this.nullCheck(processStorage.section6.country4FromDate))],
      visitedCountriesto4: [this.datePipe.transform(this.nullCheck(processStorage.section6.country4ToDate))],
      visitedCountries5: [this.nullCheck(processStorage.section6.country5Visited)],
      visitedCountriesfrom5: [this.datePipe.transform(this.nullCheck(processStorage.section6.country5FromDate))],
      visitedCountriesto5: [this.datePipe.transform(this.nullCheck(processStorage.section6.country5ToDate))],
      

      proceedingsname1: [this.nullCheck(processStorage.section7.nameOfProceeding1)],
      proceedingsDate1: [this.datePipe.transform(this.nullCheck(processStorage.section7.date1))],
      proceedingsPlace1: [this.nullCheck(processStorage.section7.place1)],
      proceedingsResult1: [this.nullCheck(processStorage.section7.result1)],
      proceedingsname2: [this.nullCheck(processStorage.section7.nameOfProceeding2)],
      proceedingsDate2: [this.datePipe.transform(this.nullCheck(processStorage.section7.date2))],
      proceedingsPlace2: [this.nullCheck(processStorage.section7.place2)],
      proceedingsResult2: [this.nullCheck(processStorage.section7.result2)],
      proceedingsname3: [this.nullCheck(processStorage.section7.nameOfProceeding3)],
      proceedingsDate3: [this.datePipe.transform(this.nullCheck(processStorage.section7.date3))],
      proceedingsPlace3: [this.nullCheck(processStorage.section7.place3)],
      proceedingsResult3: [this.nullCheck(processStorage.section7.result3)],
      proceedingsname4: [this.nullCheck(processStorage.section7.nameOfProceeding4)],
      proceedingsDate4: [this.datePipe.transform(this.nullCheck(processStorage.section7.date4))],
      proceedingsPlace4: [this.nullCheck(processStorage.section7.place4)],
      proceedingsResult4: [this.nullCheck(processStorage.section7.result4)],
      proceedingsname5: [this.nullCheck(processStorage.section7.nameOfProceeding5)],
      proceedingsDate5: [this.datePipe.transform(this.nullCheck(processStorage.section7.date5))],
      proceedingsPlace5: [this.nullCheck(processStorage.section7.place5)],
      proceedingsResult5: [this.nullCheck(processStorage.section7.result5)],

      compositionCreditors: [this.datePipe.transform(this.nullCheck(processStorage.section8.dateOfComposition))],
      dischargeBankruptcy: [this.datePipe.transform(this.nullCheck(processStorage.section8.dateOfDischargeFromBankruptcy))],
      bankruptcyDate: [this.datePipe.transform(this.nullCheck(processStorage.section8.dateOfBankruptcy))],
      
      previousAppDate: [this.datePipe.transform(this.nullCheck(processStorage.section9.dateOfAnyPrevApplication)),],

      childrenName1: [this.nullCheck(processStorage.section10.fullNameUnder21_1)],
      childrenDob1: [this.datePipe.transform(this.nullCheck(processStorage.section10.dobUnder21_1))],
      childrenPob1: [this.nullCheck(processStorage.section10.pobUnder21_1)],
      childrenresidence1: [this.nullCheck(processStorage.section10.currentResidenceUnder21_1)],
      childrenName2: [this.nullCheck(processStorage.section10.fullNameUnder21_2)],
      childrenDob2: [this.datePipe.transform(this.nullCheck(processStorage.section10.dobUnder21_2))],
      childrenPob2: [this.nullCheck(processStorage.section10.pobUnder21_2)],
      childrenresidence2: [this.nullCheck(processStorage.section10.currentResidenceUnder21_2)],

      childrenNameother1: [this.nullCheck(processStorage.section10.fullNameOther1)],
      childrenDobother1: [this.datePipe.transform(this.nullCheck(processStorage.section10.dobOther1))],
      childrenPobother1: [this.nullCheck(processStorage.section10.pobOther1)],
      childrenresidenceother1: [this.nullCheck(processStorage.section10.currentResidence1)],
      childrenNameother2: [this.nullCheck(processStorage.section10.fullNameOther2)],
      childrenDobother2: [this.datePipe.transform(this.nullCheck(processStorage.section10.dobOther1))],
      childrenPobother2: [this.nullCheck(processStorage.section10.pobOther2)],
      childrenresidenceother2: [this.nullCheck(processStorage.section10.currentResidence)],

      accept: [this.nullCheck(processStorage.accept),]


    })
  }
    var nonEdittable =  localStorage.getItem('isReviewOnly')
    if(this.nonEdittable){
      this.process1.disable();
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

  }

  next(payload) {
    //debugger;
    payload.email = this.email;
    localStorage.setItem('process1', JSON.stringify(payload));
    
  //  localStorage.setItem('roles', JSON.stringify(payload.profile));

  if(this.nonEdittable)
    this.router.navigate(['/naturalisation-process2',this.type]);
  else
    this.router.navigate(['/naturalisation-process2']);
  }


}
