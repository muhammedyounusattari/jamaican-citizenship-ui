import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};


@Component({
  selector: 'app-review-forms',
  templateUrl: './review-forms.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./review-forms.component.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})


export class ReviewFormsComponent implements OnInit {
  forms: any = ["one", "two", "three"];
  agents: any;
  applications: FormGroup;
  showApplicantErrorMsg: string;
  showApplicantQueueMessage: string
  private formType: string;

  constructor(private adminService: AdminService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {

    this.applications = this.formBuilder.group({
      agent: ['',Validators.required]
    });
  }

  ngOnInit() {
    this.formType = this.activatedRoute.snapshot.paramMap.get('formType');
    this.getData();
    setInterval(() => {
      this.getData();
    }, 20000);
  }

  getData(){
    //alert(1);
    this.adminService.getFormsForReview(this.formType).subscribe((data:any) => {

      if (!data.data) {
        this.showApplicantQueueMessage = 'No Applicant available';
      } else {
        this.forms = data;
        var applicationFormGroup = [];
        for (let data of this.forms.data) {
          applicationFormGroup.push(data.id + '_' + data.profile.lastname + '-' + data.profile.firstname);
        }
        applicationFormGroup.push('agent');

        let group = {};
        for (let eduFormControl of applicationFormGroup) {
          group[eduFormControl] = new FormControl('');
        }
        this.applications = new FormGroup(group);
      }

      this.adminService.loadAgentsDetails().subscribe((data:any) => {
      
        this.agents = data.data;


      })


      // }
    });
  }

  assignToAgent(payload) {
    delete payload.appCodes;

    var appCode = [];
    var appInfo = { applicantId: '', name: '' };
    for (var key in payload) {
      if (payload[key] && key != 'agent') {
        var info = key.split("_");
        appInfo.applicantId = info[0];
        appInfo.name = info[1].split("_")[0];
        appCode.push(appInfo);
      }
      else
        if (key != 'agent')
          delete payload[key];
    }
    if (appCode.length > 0) {
      payload.appCodes = appCode;
    } else {
      this.showApplicantErrorMsg = 'Please select Applicant';
      return false;
    }

    console.log(this.applications)

    this.adminService.assignToAgent(payload).subscribe(data => {
      console.log(data);
      location.reload();
    })


  }
}

/*
export class ReviewFormsComponent implements OnInit {

  forms: any = ["one", "two", "three"];
  agents: any;
  applications: FormGroup;
  showApplicantErrorMsg:string;
  private formType:string;

  constructor(private adminService: AdminService, private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,private router:Router) {
    // var storageData = localStorage.getItem('reviewForms');
    // this.forms = (!storageData) ? storageData : JSON.parse(storageData).data;

    this.applications = this.formBuilder.group({
agent: ['', Validators.required]
    });



  }

  ngOnInit() {

    this.formType = this.activatedRoute.snapshot.paramMap.get('formType');
    this.adminService.getFormsForReview(this.formType).subscribe(data=>{

      this.forms = data;

    this.adminService.loadAgentsDetails().subscribe(data => {
      var resp = data;
      this.agents = resp;


      var applicationFormGroup = [];
      for (let data of this.forms) {
        applicationFormGroup.push(data.id + '_' + data.profile.lastname + '-' + data.profile.firstname);
      }
      applicationFormGroup.push('agent');

      let group = {};
      for (let eduFormControl of applicationFormGroup) {
        group[eduFormControl] = new FormControl('');
      }

      this.applications = new FormGroup(group);

    })
  })
  }

  assignToAgent(payload) {
    delete payload.appCodes;

    var appCode = [];
    var appInfo = { applicantId: '', name: '' };
    for (var key in payload) {
      if (payload[key] && key != 'agent') {
        var info = key.split("_");
        appInfo.applicantId = info[0];
        appInfo.name = info[1].split("_")[0];
        appCode.push(appInfo);
      }
      else
        if (key != 'agent')
          delete payload[key];
    }
    if (appCode.length > 0){
      payload.appCodes = appCode;
    } else{
      this.showApplicantErrorMsg='Please select Applicant';
      return false;
    }

    console.log(this.applications)

    this.adminService.assignToAgent(payload).subscribe(data => {
      console.log(data);
      location.reload();
    })


  }

}
*/