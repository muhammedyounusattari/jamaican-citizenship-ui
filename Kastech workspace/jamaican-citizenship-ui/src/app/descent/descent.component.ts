import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DescentFormService } from '../shared/services/descent-form.service';
import { FileUploader } from "ng2-file-upload";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { LogoutService } from '../shared/services/logout.service';
import { UtilityService } from '../shared/services/utility.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { Router } from '@angular/router';

@Component({
  selector: 'app-descent',
  templateUrl: './descent.component.html',
  styleUrls: ['./descent.component.css']
})
export class DescentComponent implements OnInit {


  submitted: boolean; ß
  showErrorMsg: string;
  dob: Date = new Date();
  profile = JSON.parse(sessionStorage.getItem('profile'));
  message:string;


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
  descentFormSessoin:any;
  
  @BlockUI() blockUI: NgBlockUI;

  constructor(private descentService: DescentFormService, private fb: FormBuilder, private logoutService: LogoutService,
     private utilityService: UtilityService, private formBuilder: FormBuilder,private router:Router) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue', 
    maxDate:this.dob,
    showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY' })
  }

  ngOnInit() {

    var descentFormLocal = sessionStorage.getItem('descentForm');
    if(descentFormLocal != null){
      this.descentFormSessoin = JSON.parse(descentFormLocal);
      
      this.descentForm = this.formBuilder.group({

        firstname: [this.descentFormSessoin.profile.firstname, [Validators.required, Validators.maxLength(10)]],
        lastname: [this.descentFormSessoin.profile.lastname, Validators.required],
        middlename: [this.descentFormSessoin.profile.middlename],
        dob: [this.descentFormSessoin.profile.dob, Validators.required],
        pob: [this.descentFormSessoin.profile.pob, Validators.required],
        email: [{ value: this.descentFormSessoin.profile.email, disabled: true }, [Validators.required, Validators.email]],
        number: [this.descentFormSessoin.profile.number, [Validators.required]],
        gender: [this.descentFormSessoin.profile.gender, Validators.required],
        address: [this.descentFormSessoin.profile.address, Validators.required],
  
        flastname: [this.descentFormSessoin.father.lastName, Validators.required],
        ffirstname: [this.descentFormSessoin.father.firstName, Validators.required],
        fdob: [this.descentFormSessoin.father.dob, Validators.required],
        fpob: [this.descentFormSessoin.father.cob, Validators.required],

        mlastname: [this.descentFormSessoin.mother.lastName, Validators.required],
        mfirstname: [this.descentFormSessoin.mother.firstName, Validators.required],
        mdob: [this.descentFormSessoin.mother.dob, Validators.required],
        mpob: [this.descentFormSessoin.mother.cob, Validators.required],
  
        plastname1: [this.descentFormSessoin.paternalFather.lastName, Validators.required],
        pfirstname1: [this.descentFormSessoin.paternalFather.firstName, Validators.required],
        pdob1: [this.descentFormSessoin.paternalFather.dob, Validators.required],
        ppob1: [this.descentFormSessoin.paternalFather.cob, Validators.required],
       
        plastname2: [this.descentFormSessoin.paternalMother.lastName, Validators.required],
        pfirstname2: [this.descentFormSessoin.paternalMother.firstName, Validators.required],
        pdob2: [this.descentFormSessoin.paternalMother.dob, Validators.required],
        ppob2: [this.descentFormSessoin.paternalMother.cob, Validators.required],
  
        mlastname1: [this.descentFormSessoin.maternalFather.lastName, Validators.required],
        mfirstname1: [this.descentFormSessoin.maternalFather.firstName, Validators.required],
        mdob1: [this.descentFormSessoin.maternalFather.dob, Validators.required],
        mpob1: [this.descentFormSessoin.maternalFather.cob, Validators.required],

        mlastname2: [this.descentFormSessoin.maternalMother.lastName, Validators.required],
        mfirstname2: [this.descentFormSessoin.maternalMother.firstName, Validators.required],
        mdob2: [this.descentFormSessoin.maternalMother.dob, Validators.required],
        mpob2: [this.descentFormSessoin.maternalMother.cob, Validators.required]
  
  
      });
    }else{
    this.descentForm = this.formBuilder.group({

      firstname: [this.profile.firstname, [Validators.required, Validators.maxLength(10)]],
      lastname: [this.profile.lastname, Validators.required],
      middlename: [this.profile.middlename],
      dob: [this.utilityService.formatDate(new Date(this.profile.dob)), Validators.required],
      pob: [this.profile.pob, Validators.required],
      email: [{ value: this.profile.email, disabled: true }, [Validators.required, Validators.email]],
      number: [this.profile.number, [Validators.required]],
      gender: [this.profile.gender, Validators.required],
      address: [this.profile.address, Validators.required],

      flastname: ['', Validators.required],
      ffirstname: ['', Validators.required],
      fdob: [this.utilityService.enhancedDate(this.profile.dob,0,0,-13), Validators.required],
      fpob: ['Jamaica', Validators.required],
      mlastname: ['', Validators.required],
      mfirstname: ['', Validators.required],
      mdob: [this.utilityService.enhancedDate(this.profile.dob,0,0,-13), Validators.required],
      mpob: ['Jamaica', Validators.required],

      plastname1: ['', Validators.required],
      pfirstname1: ['', Validators.required],
      pdob1: [this.utilityService.enhancedDate(this.profile.dob,0,0,-13*2), Validators.required],
      ppob1: ['Jamaica', Validators.required],
      plastname2: ['', Validators.required],
      pfirstname2: ['', Validators.required],
      pdob2: [this.utilityService.enhancedDate(this.profile.dob,0,0,-13*2), Validators.required],
      ppob2: ['Jamaica', Validators.required],

      mlastname1: ['', Validators.required],
      mfirstname1: ['', Validators.required],
      mdob1: [this.utilityService.enhancedDate(this.profile.dob,0,0,-13*2), Validators.required],
      mpob1: ['Jamaica', Validators.required],
      mlastname2: ['', Validators.required],
      mfirstname2: ['', Validators.required],
      mdob2: [this.utilityService.enhancedDate(this.profile.dob,0,0,-13*2), Validators.required],
      mpob2: ['Jamaica', Validators.required]


    })
  }
    this.logoutService.changeMessage(true);
    this.uploadForm = this.fb.group({
      document: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
    this.utilityService.loadCountriesFromJson().subscribe(data => {
      this.countries = data;
    })
  }

  get f() { return this.descentForm.controls; }

  onSubmit(payload) {
    debugger;
    this.submitted = true;
    
    if (this.descentForm.invalid) {
      this.showErrorMsg ="Please fill all mandatory fields";
      return;
    }

    // var profile = JSON.parse(sessionStorage.getItem('profile'));
    // var data ={};
    // data = this.jsonConcat(data,payload);
    // data = this.jsonConcat(data,profile);
    payload.email = this.profile.email;
    this.blockUI.start('Loading......');
    this.descentService.submitDescentForm(payload).subscribe(data => {
      this.showDescentForm = false;
      this.showDocumentUpload = true;
      this.blockUI.stop();
      console.log(data);
    })
    
  }

  onSave(payload) {
    debugger;
    this.submitted = true;
    
    if (this.descentForm.invalid) {
      this.showErrorMsg ="Please fill all mandatory fields";
      return;
    }

    // var profile = JSON.parse(sessionStorage.getItem('profile'));
    // var data ={};
    // data = this.jsonConcat(data,payload);
    // data = this.jsonConcat(data,profile);
    payload.email = this.profile.email;
    this.blockUI.start('Loading......');
    this.descentService.submitDescentForm(payload).subscribe(data => {
      // this.showDescentForm = false;
      // this.showDocumentUpload = true;
      this.blockUI.stop();
      console.log(data);
    })
    
  }

  // jsonConcat(o1, o2) {
  //   for (var key in o2) {
  //    o1[key] = o2[key];
  //   }
  //   return o1;
  //  }

  uploadSubmit() {
    if(this.uploader.queue.length==0){
      this.message="Please select documents to be uploaded";
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
        this.showDocumentUpload = false;
        this.applicationCode = data.id;

      });
      // this.uploadFile(data).subscribe(data => alert(data.message));
    }
    this.blockUI.stop();
    this.uploader.clearQueue();
    sessionStorage.removeItem('descentForm');
  }


  home(){
    this.router.navigate(['/home']);
  }

}
