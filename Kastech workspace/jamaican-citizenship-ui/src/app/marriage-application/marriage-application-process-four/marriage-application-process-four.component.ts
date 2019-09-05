import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UtilityService } from '../../shared/services/utility.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-marriage-application-process-four',
  templateUrl: './marriage-application-process-four.component.html',
  styleUrls: ['./marriage-application-process-four.component.css']
})
export class MarriageApplicationProcessFourComponent implements OnInit {

  showErrorMsg: string;
  dob: Date = new Date();
  profile:any;

  marriageApplicationFormprocess4: FormGroup;
  uploadForm: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;
  @BlockUI() blockUI: NgBlockUI;
  countries: any;
  marriageFormSession: any;
  type:string;
  nonEdittable:string;
  applicantId:string;

  maritalStatus = ['Married', 'Unmarried'];

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

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

    this.uploadForm = this.formBuilder.group({
      document: [null, null],
      type: [null, Validators.compose([Validators.required])],
      accept:['',Validators.required]
    });

    this.nonEdittable =  localStorage.getItem('isReviewOnly');
      this.marriageApplicationFormprocess4 = this.formBuilder.group({

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
        this.marriageApplicationFormprocess4.disable();
      }
  }

  home() {
    this.router.navigate(['/home']);
  }

  // uploadSubmit() {
  //   this.marriageApplicationFormprocess4.value.email = JSON.parse(localStorage.getItem('roles')).email;
  //   this.naturialisationService.submitNaturalisationForm(this.process6.value).subscribe((data:any)=>{
  //   if(!data){
  //     alert('data doesnt exsit');
  //     return false;
  //   }      

  //   this.uploadForm.controls.accept.setValue("accept");
  //   if (!this.uploadForm.controls.accept.value) {
  //     this.message = "Please confirm Declaration ";
  //     this.declaration = true;
  //     return false;
  //   }

  //   if (this.uploader.queue.length === 0 ) {
  //     this.message = "Please select documents to be uploaded";
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

  //      }
  // }) 
  // }


  onSave(payload) {
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
     localStorage.setItem('marriageApplicationFormProcess4', JSON.stringify(payload));
   if(this.nonEdittable)
     this.router.navigate(['/marriageApplication-complete',this.type]);
   else
     this.router.navigate(['/marriageApplication-complete']);
   }

   back(payload){
    localStorage.setItem('marriageApplicationFormProcess4', JSON.stringify(payload));
    this.router.navigate(['/marriageApplication-process3']) 
  }

}
