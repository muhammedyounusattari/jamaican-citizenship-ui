import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { DescentFormService } from '../shared/services/descent-form.service';
import {FileUploader} from "ng2-file-upload";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { LogoutService } from '../shared/services/logout.service';

@Component({
  selector: 'app-descent',
  templateUrl: './descent.component.html',
  styleUrls: ['./descent.component.css']
})
export class DescentComponent implements OnInit {

    descentForm =new FormGroup({
    flastname:new FormControl(),
    ffirstname:new FormControl(),
    fdob:new FormControl(),
    fpob:new FormControl(),
    mlastname:new FormControl(),
    mfirstname:new FormControl(),
    mdob:new FormControl(),
    mpob:new FormControl(),

    plastname1:new FormControl(),
    pfirstname1:new FormControl(),
    pdob1:new FormControl(),
    ppob1:new FormControl(),
    plastname2:new FormControl(),
    pfirstname2:new FormControl(),
    pdob2:new FormControl(),
    ppob2:new FormControl(),

    mlastname1:new FormControl(),
    mfirstname1:new FormControl(),
    mdob1:new FormControl(),
    mpob1:new FormControl(),
    mlastname2:new FormControl(),
    mfirstname2:new FormControl(),
    mdob2:new FormControl(),
    mpob2:new FormControl(),


  })

  uploadForm: FormGroup;
  applicationCode:number=0;
  showDescentForm:boolean = true;
  showDocumentUpload:boolean = false;
  datePickerConfig: Partial<BsDatepickerConfig>;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  loginStatus:boolean;

  constructor(private descentService:DescentFormService,private fb: FormBuilder,private logoutService:LogoutService) { 
    this.datePickerConfig = Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,dateInputFormat:'DD/MM/YYYY'})
  }

  ngOnInit() {

    this.logoutService.changeMessage(true);
    this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(payload){
    debugger;
    var profile = JSON.parse(sessionStorage.getItem('profile'));
    var data ={};
    data = this.jsonConcat(data,payload);
    data = this.jsonConcat(data,profile);
    this.descentService.submitDescentForm(data).subscribe(data=>{
      this.showDescentForm=false;
      this.showDocumentUpload=true;
      console.log(data);
    })
  }

  jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
   }

   uploadSubmit(){
    for (var i = 0; i < this.uploader.queue.length; i++) {
      let fileItem = this.uploader.queue[i]._file;
      if(fileItem.size > 10000000){
        alert("Each File should be less than 10 MB of size.");
        return;
      }
    }
    for (var j = 0; j < this.uploader.queue.length; j++) {
      let data = new FormData();
      let fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      data.append('file', fileItem);
      data.append('fileSeq', 'seq'+j);
      data.append( 'dataType', this.uploadForm.controls.type.value);
      this.descentService.uploadFile(data).subscribe(data=>{
        this.showDescentForm=false;
        this.showDocumentUpload = false;
        this.applicationCode = data.id;
        alert(data)
      });
      // this.uploadFile(data).subscribe(data => alert(data.message));
    }
    this.uploader.clearQueue();
  }



}
