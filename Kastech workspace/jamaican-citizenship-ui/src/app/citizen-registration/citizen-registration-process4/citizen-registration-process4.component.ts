import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';
import { FileUploader } from 'ng2-file-upload';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-citizen-registration-process4',
  templateUrl: './citizen-registration-process4.component.html',
  styleUrls: ['./citizen-registration-process4.component.css']
})
export class CitizenRegistrationProcess4Component implements OnInit {

  Register_Formfour: FormGroup;
  dob: Date = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  nationalities = ['Indian', 'German', 'Italian'];
  maritalStatus = ['Married', 'Unmarried'];
  personalitynationalities = ['Indian', 'German', 'Italian'];
  email:string;
  type:string;
  nonEdittable:string;

  showErrorMsg: any;
  uploadForm: FormGroup;
  declaration:boolean = false;
  applicantId:string;
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  @BlockUI() blockUI: NgBlockUI;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private activatedRoute:ActivatedRoute,
     private utilityService:UtilityService) {
      this.activatedRoute.params.subscribe(params=>{
        this.type = params.type;
      })
   }

  ngOnInit() {

    this.nonEdittable =  localStorage.getItem('isReviewOnly');
    
    var Register_Formone = localStorage.getItem('Register_Formone');

    var processStorage = (Register_Formone != null) ? JSON.parse(Register_Formone) : '';

    this.uploadForm = this.formBuilder.group({
      document: [null, null],
      type: [null, Validators.compose([Validators.required])],
      accept:['',Validators.required]
    });

    this.Register_Formfour = this.formBuilder.group({ 
     
      lastname: [this.nullCheck(processStorage.lastname),],
      middlename: [this.nullCheck(processStorage.middlename)],
      firstname: [this.nullCheck(processStorage.firstname),],
      dob: [this.utilityService.formatDate(this.nullCheck(processStorage.dob)),],
      pob: [this.nullCheck(processStorage.pob),],
      country: [(processStorage.country != null) ? processStorage.country : 'Jamaica',],
      email: [{value:this.nullCheck(processStorage.email),disabled:true} , Validators.email],
      number: [(this.nullCheck(processStorage.number != null)) ? processStorage.number : '876', []],
      gender: [this.nullCheck(processStorage.gender),],
      address: [this.nullCheck(processStorage.address1),],
  
     
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

        rownServiceDept1: [this.nullCheck(processStorage.crownServiceDept1)],
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

    this.nonEdittable =  localStorage.getItem('isReviewOnly')
    if(this.nonEdittable){
      this.Register_Formfour.disable();
    }

  }

  // uploadSubmit() {
  //   this.Register_Formfour.value.email = JSON.parse(localStorage.getItem('roles')).email;
  //   this.uploadForm.controls.accept.setValue("accept");
  //   if (!this.uploadForm.controls.accept.value) {
  //     this.showErrorMsg = "Please confirm Declaration ";
  //     this.declaration = true;
  //     return false;
  //   }

  //   if (this.uploader.queue.length === 0 ) {
  //     this.showErrorMsg = "Please select documents to be uploaded";
  //     return false;
  //   }
   
  //   for (var i = 0; i < this.uploader.queue.length; i++) {
  //     let fileItem = this.uploader.queue[i]._file;

  //     if (fileItem.size > 10000000) {
  //       alert("Each File should be less than 10 MB of size.");
  //       return;
  //     }
  //   }
  //   this.blockUI.start('load ....');
  //   this.router.navigate(['/citizenRegistration-complete']);
  //   var count =0;
  //   for (var j = 0; j < this.uploader.queue.length; j++) {
  //     let data = new FormData();
  //     let fileItem = this.uploader.queue[j]._file;
  //     console.log(fileItem.name);
  //     data.append('file', fileItem);
  //     data.append('fileSeq', 'seq' + j);
  //     data.append('dataType', this.uploadForm.controls.type.value);
  //     this.naturialisationService.uploadFile(data).subscribe(data => {
  //       this.blockUI.stop();
  //       count++;
      
  //       //alert('count...'+count);
  //       if(count==(this.uploader.queue.length)){
  //       console.log('.....',data);
  //       if(data==null){
  //         alert('Your have already submitted your application for Naturalization')
  //       }else{
  //         this.applicantId =data.profile.appCode; 
  //         localStorage.setItem('process1',JSON.stringify(this.process6.value));
  //          this.router.navigate(['/naturalisation-submission',this.applicantId])
        
  //       }
  //       }

  //     });

      
  //     if(count==(this.uploader.queue.length-1)){
  //       debugger;
  //       this.uploader.clearQueue();
  //       sessionStorage.removeItem('descentForm');
    
  //       console.log('.....',data);
      
  //        this.applicantId =data.profile.appCode; 
  //         localStorage.setItem('process1',JSON.stringify(this.process6.value));
  //         delay(1000);

  //        if(this.nonEdittable)
  //          this.router.navigate(['/naturalisation-submission',this.applicantId])
  //        else
  //          this.router.navigate(['/naturalisation-submission'])
  //       }
  //      }

  //     this.uploadFile(data).subscribe(data => alert(data.message));
  // }
  

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

  back(payload){
    localStorage.setItem('Register_Formfour',JSON.stringify(payload));
    if(this.nonEdittable)
     this.router.navigate(['/citizenRegistration-process3',this.type])
    else
    this.router.navigate(['/citizenRegistration-process3']) 
  }

  next(payload) {
    debugger;
    localStorage.setItem('Register_Formfour', JSON.stringify(payload));
    
  //  localStorage.setItem('roles', JSON.stringify(payload.profile));

  if(this.nonEdittable)
    this.router.navigate(['/citizenRegistration-complete',this.type]);
  else
    this.router.navigate(['/citizenRegistration-complete']);
  }

}
