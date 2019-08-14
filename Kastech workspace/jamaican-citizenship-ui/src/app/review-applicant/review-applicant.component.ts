import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DescentFormService } from '../shared/services/descent-form.service';
import { FileUploader } from "ng2-file-upload";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { LogoutService } from '../shared/services/logout.service';
import { UtilityService } from '../shared/services/utility.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DescentSaveComponent } from '../descent-save/descent-save.component';
import { ReviewDailogComponentComponent } from '../review-dailog-component/review-dailog-component.component';

@Component({
  selector: 'app-review-applicant',
  templateUrl: './review-applicant.component.html',
  styleUrls: ['./review-applicant.component.css']
})
export class ReviewApplicantComponent implements OnInit {


  submitted: boolean; 
  showErrorMsg: string;
  dob: Date = new Date();
  profile:any;
  message: string;
  submit:boolean= true;
  declaration:boolean = false;

  descentForm: FormGroup;
  uploadForm: FormGroup;
  applicationCode: number = 0;
  showDescentForm: boolean = true;
  showDocumentUpload: boolean = false;
  datePickerConfig: Partial<BsDatepickerConfig>;

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  loginStatus: boolean;
  countries: any;
  descentFormSessoin: any;
  loginType:string;

  @BlockUI() blockUI: NgBlockUI;

  constructor(private descentService: DescentFormService, private fb: FormBuilder, private logoutService: LogoutService,
    private activateRoute:ActivatedRoute ,private utilityService: UtilityService, private formBuilder: FormBuilder, private router: Router,public dialog:MatDialog) {
      this.profile  = JSON.parse(localStorage.getItem('profile'));
      if(this.profile==null){
       this.router.navigate(['/home']);
     } 
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      maxDate: this.dob,
      showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY'
    })

    this.activateRoute.params.subscribe((params)=>{
      this.loginType = params.type;
    })


    
  }

  ngOnInit() {
    this.logoutService.setTitle('All-Forms...');
    var descentFormLocal = localStorage.getItem('descentForm');
    if (descentFormLocal != null) {
      this.descentFormSessoin = JSON.parse(descentFormLocal);

      this.descentForm = this.formBuilder.group({

        firstname: [this.descentFormSessoin.profile.firstname, [Validators.required, Validators.maxLength(10)]],
        lastname: [this.descentFormSessoin.profile.lastname, Validators.required],
        middlename: [this.descentFormSessoin.profile.middlename],
        dob: [this.descentFormSessoin.profile.dob, Validators.required],
        pob: [this.descentFormSessoin.profile.pob, Validators.required],
        country: [this.descentFormSessoin.profile.country, Validators.required],
        email: [{ value: this.descentFormSessoin.profile.email, disabled: true }, [Validators.required, Validators.email]],
        number: [this.descentFormSessoin.profile.number, [Validators.required]],
        gender: [this.descentFormSessoin.profile.gender, Validators.required],
        address1: [this.descentFormSessoin.profile.address1, Validators.required],
        address2: [this.descentFormSessoin.profile.address2, Validators.required],
        zip: [this.descentFormSessoin.profile.zip, Validators.required],

        flastname: [this.descentFormSessoin.father.lastName],
        ffirstname: [this.descentFormSessoin.father.firstName],
        fdob: [this.descentFormSessoin.father.dob],
        fpob: [this.descentFormSessoin.father.pob],
        fcountry:[this.descentFormSessoin.father.cob],

        mlastname: [this.descentFormSessoin.mother.lastName],
        mfirstname: [this.descentFormSessoin.mother.firstName],
        mdob: [this.descentFormSessoin.mother.dob],
        mpob: [this.descentFormSessoin.mother.pob],
        mcountry: [this.descentFormSessoin.mother.cob],

        plastname1: [this.descentFormSessoin.paternalFather.lastName],
        pfirstname1: [this.descentFormSessoin.paternalFather.firstName],
        pdob1: [this.utilityService.enhancedDate(this.descentFormSessoin.paternalFather.dob,0,0,0)],
        ppob1: [this.descentFormSessoin.paternalFather.cob],

        plastname2: [this.descentFormSessoin.paternalMother.lastName],
        pfirstname2: [this.descentFormSessoin.paternalMother.firstName],
        pdob2: [this.utilityService.enhancedDate(this.descentFormSessoin.paternalMother.dob,0,0,0)],
        ppob2: [this.descentFormSessoin.paternalMother.cob],

        mlastname1: [this.descentFormSessoin.maternalFather.lastName],
        mfirstname1: [this.descentFormSessoin.maternalFather.firstName],
        mdob1: [this.utilityService.enhancedDate(this.descentFormSessoin.maternalFather.dob, 0, 0, 0) ],
        mpob1: [this.descentFormSessoin.maternalFather.cob],

        mlastname2: [this.descentFormSessoin.maternalMother.lastName],
        mfirstname2: [this.descentFormSessoin.maternalMother.firstName],
        mdob2: [this.utilityService.enhancedDate(this.descentFormSessoin.maternalMother.dob, 0, 0, 0) ],
        mpob2: [this.descentFormSessoin.maternalMother.cob]


      });
      this.descentForm.disable();
    } else {
      this.descentForm = this.formBuilder.group({

        firstname: [this.profile.firstname, [Validators.required, Validators.maxLength(10)]],
        lastname: [this.profile.lastname, Validators.required],
        middlename: [this.profile.middlename],
        dob: [this.utilityService.formatDate(new Date(this.profile.dob)), Validators.required],
        pob: [this.profile.pob, Validators.required],
        country: [this.profile.country, Validators.required],
        email: [{ value: this.profile.email, disabled: true }, [Validators.required, Validators.email]],
        number: [this.profile.number, [Validators.required]],
        gender: [this.profile.gender, Validators.required],
        address1: [this.profile.address1, Validators.required],
        address2: [this.profile.address2, Validators.required],
        zip: [this.profile.zip, Validators.required],

        flastname: [''],
        ffirstname: [''],
        fdob: [this.utilityService.enhancedDate(this.profile.dob, 0, 0, -13)],
        fpob: [''],
        fcountry:['Jamaica'],
        mlastname: [''],
        mfirstname: [''],
        mdob: [this.utilityService.enhancedDate(this.profile.dob, 0, 0, -13)],
        mpob: [''],
        mcountry: ['Jamaica'],

        plastname1: [''],
        pfirstname1: [''],
        pdob1: [''],
        ppob1: [''],
        plastname2: [''],
        pfirstname2: [''],
        pdob2: [''],
        ppob2: [''],

        mlastname1: [''],
        mfirstname1: [''],
        mdob1: [''],
        mpob1: [''],
        mlastname2: [''],
        mfirstname2: [''],
        mdob2: [''],
        mpob2: ['']


      })
      this.descentForm.disable();
    }
   // this.logoutService.changeMessage(true);
    this.uploadForm = this.fb.group({
      document: [null, null],
      type: [null, Validators.compose([Validators.required])],
      accept:['',Validators.required]
    });
    this.utilityService.loadCountriesFromJson().subscribe(data => {
      this.countries = data;
    })
    this.blockUI.stop();
  }

  get f() { return this.descentForm.controls; }

  onSubmit(payload) {
    debugger;
    this.submitted = true;
    this.submit = true;

    if (this.descentForm.invalid) {
      this.showErrorMsg = "Please fill all mandatory fields";
      return;
    }
/*
    if (this.descentForm.value.plastname1 || this.descentForm.value.pfirstname1 || this.descentForm.value.pdob1 || this.descentForm.value.ppob1) {
      if (!this.descentForm.value.pfirstname1 || !this.descentForm.value.pdob1 || !this.descentForm.value.ppob1 || !this.descentForm.value.plastname1 || !this.descentForm.value.pfirstname1 || !this.descentForm.value.pdob1 || !this.descentForm.value.ppob1) {
        this.submit = false;
        alert('please fill all Paternal Father information ')
      }
    }

    if (this.descentForm.value.plastname2 || this.descentForm.value.pfirstname2 || this.descentForm.value.pdob2 || this.descentForm.value.ppob2) {
      if (!this.descentForm.value.plastname2 || !this.descentForm.value.pfirstname2 || !this.descentForm.value.pdob2 || !this.descentForm.value.ppob2 ) {
        this.submit = false;
        alert('please fill all Paternal Mother information ')
      }
    }

    if (!this.descentForm.value.plastname1 && !this.descentForm.value.pfirstname1 && !this.descentForm.value.pdob1 && !this.descentForm.value.ppob1) {
      if (!this.descentForm.value.plastname2 && !this.descentForm.value.pfirstname2 && !this.descentForm.value.pdob2 && !this.descentForm.value.ppob2){
        this.submit = false;
        alert('please fill either paternal father or mother information');
      }
    }


    if (this.descentForm.value.mlastname1 || this.descentForm.value.mfirstname1 || this.descentForm.value.mdob1 || this.descentForm.value.mpob1) {
      if (!this.descentForm.value.mfirstname1 || !this.descentForm.value.mdob1 || !this.descentForm.value.mpob1 || !this.descentForm.value.mlastname1 || !this.descentForm.value.mpob1) {
        this.submit = false;
        alert('please fill all Maternal Father information ')
      }
    }

    if (this.descentForm.value.mlastname2 || this.descentForm.value.mfirstname2 || this.descentForm.value.mdob2 || this.descentForm.value.mpob2) {
      if (!this.descentForm.value.mlastname2 || !this.descentForm.value.mfirstname2 || !this.descentForm.value.mdob2 || !this.descentForm.value.mpob2) {
        this.submit = false;
        alert('please fill all Maternal Mother information ')
      }
    }

    if (!this.descentForm.value.mlastname1 && !this.descentForm.value.mfirstname1 && !this.descentForm.value.mdob1 && !this.descentForm.value.mpob1) {
      if (!this.descentForm.value.mlastname2 && !this.descentForm.value.mfirstname2 && !this.descentForm.value.mdob2 && !this.descentForm.value.mpob2){
        this.submit = false;
        alert('please fill either maternal father or mother information');

      }
    } */

    // var profile = JSON.parse(sessionStorage.getItem('profile'));
    // var data ={};
    // data = this.jsonConcat(data,payload);
    // data = this.jsonConcat(data,profile);
    payload.email = this.profile.email;
    //if(this.submit){

      this.blockUI.start('Loading......');
      if(!payload.dob){
        payload.dob = this.utilityService.formatDate(payload.dob);
      }
     
      if(payload.mdob){
        payload.mdob = this.utilityService.formatDate(payload.mdob);
      }
      if(payload.fdob){
        payload.fdob = this.utilityService.formatDate(payload.fdob);
      }
      if(payload.mdob1){
        payload.mdob1 = this.utilityService.formatDate(payload.mdob1);
      }
      if(payload.mdob2){
        payload.dob = this.utilityService.formatDate(payload.mdob2);
      }
      if(payload.pdob1){
        payload.pdob1 = this.utilityService.formatDate(payload.pdob1);
      }
      if(payload.podb2){
        payload.podb2 = this.utilityService.formatDate(payload.podb2);
      }

      this.descentService.submitDescentForm(payload).subscribe(data => {
        sessionStorage.setItem('descentForm',JSON.stringify(data));
        this.showDescentForm = false;
        this.showDocumentUpload = true;
        this.blockUI.stop();
        console.log(data);
      })
      
    }
 // }

  onSave(payload) {
    

    // if(!this.descentForm.value.mlastname1 && !this.descentForm.value.mlastname2){
    //   alert('please fill either maternal father or mother information');
    // }

    // var profile = JSON.parse(sessionStorage.getItem('profile'));
    // var data ={};
    // data = this.jsonConcat(data,payload);
    // data = this.jsonConcat(data,profile);



    payload.email = this.profile.email;
     
    
    this.blockUI.start('Loading......');
    
    if(payload.dob){
      payload.dob = this.utilityService.formatDate(payload.dob);
    }
   
    if(payload.mdob){
      payload.mdob = this.utilityService.formatDate(payload.mdob);
    }
    if(payload.fdob){
      payload.fdob = this.utilityService.formatDate(payload.fdob);
    }
    if(payload.mdob1){
      payload.mdob1 = this.utilityService.formatDate(payload.mdob1);
    }
    if(payload.mdob2){
      payload.dob = this.utilityService.formatDate(payload.mdob2);
    }
    if(payload.pdob1){
      payload.pdob1 = this.utilityService.formatDate(payload.pdob1);
    }
    if(payload.podb2){
      payload.podb2 = this.utilityService.formatDate(payload.podb2);
    }

    //  this.descentService.submitDescentForm(payload).subscribe(data => {
    //    // this.showDescentForm = false;
    //    // this.showDocumentUpload = true;
    //    this.blockUI.stop();
    //    const dialogConfig = new MatDialogConfig();
    //    this.dialog.open(DescentSaveComponent, dialogConfig);
    //    console.log(data);
    //  });
    
  }

  // jsonConcat(o1, o2) {
  //   for (var key in o2) {
  //    o1[key] = o2[key];
  //   }
  //   return o1;
  //  }

  uploadSubmit() {

    if (!this.uploadForm.controls.accept.value) {
      this.message = "Please confirm Declaration ";
      this.declaration = true;
      return false;
    }

    if (this.uploader.queue.length === 0 ) {
      this.message = "Please select documents to be uploaded";
      return false;
    }
   
    for (var i = 0; i < this.uploader.queue.length; i++) {
      let fileItem = this.uploader.queue[i]._file;
      if (fileItem.size > 10000000) {
        alert("Each File should be less than 10 MB of size.");
        return;
      }
    }
    this.blockUI.start('load ....');
    for (var j = 0; j < this.uploader.queue.length; j++) {
      let data = new FormData();
      let fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      data.append('file', fileItem);
      data.append('fileSeq', 'seq' + j);
      data.append('dataType', this.uploadForm.controls.type.value);


      this.descentService.uploadFile(data).subscribe(data => {
        this.showDescentForm = false;
        this.blockUI.stop();
        this.showDocumentUpload = false;
        this.applicationCode = data.id;

      });
      // this.uploadFile(data).subscribe(data => alert(data.message));
    }
    this.uploader.clearQueue();
    sessionStorage.removeItem('descentForm');
  }


  dateChange(){
  //  alert();
  }

  home() {
    this.router.navigate(['/home']);
  }

  back(descentForm){
    this.showDescentForm = true;
    this.showDocumentUpload = false;
    // this.router.navigate(['/descentForm']);
  }
  next(descentForm){
    this.showDescentForm= false;
    this.showDocumentUpload = true;
  }

  onHome(){
    this.router.navigate(['/home'])
  }

  updateStatus(value){
    const dialogConfig = new MatDialogConfig();
    localStorage.setItem('status',value);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('applicantId',""+this.descentFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  }

  incomplete(value){
    const dialogConfig = new MatDialogConfig();
//    localStorage.setItem('status','incomplete');
localStorage.setItem('status',value);
localStorage.setItem('type',this.loginType);
    localStorage.setItem('applicantId',""+this.descentFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  }

  refer(value){
    const dialogConfig = new MatDialogConfig();
    // localStorage.setItem('status','reffered');
    localStorage.setItem('status',value);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('applicantId',""+this.descentFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  }

  nextClick(value){
    const dialogConfig = new MatDialogConfig();
    // localStorage.setItem('status','complete');
    localStorage.setItem('status',value);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('applicantId',""+this.descentFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  }
}




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-review-applicant',
//   templateUrl: './review-applicant.component.html',
//   styleUrls: ['./review-applicant.component.css']
// })
// export class ReviewApplicantComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
