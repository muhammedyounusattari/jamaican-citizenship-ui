import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchedulerService } from '../shared/services/scheduler.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  private applicantId:string;
  private uploadForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder, private activatedRoute:ActivatedRoute, private schedulerService:SchedulerService) {
    this.activatedRoute.params.subscribe((param)=>{
      this.applicantId = param.applicantId;
    })
    if(this.applicantId)
      this.schedulerService.isValidToSchedule(this.applicantId).subscribe(data=>{
        if(data == null){
          alert('Error! this may be due to an invalid application or your appointment may have already been scheduled')
          this.router.navigate(['/home']);
        }
      })
      this.uploadForm = this.fb.group({
        accept:['',Validators.required]
      });

   }

  ngOnInit() {

  }

  individualForm(){
    if(this.uploadForm.invalid){
      alert('please accept decleration ');
      return false;
    }
    this.router.navigate(['/individualSchedule/'+this.applicantId]);
  }

  groupForm(){
    this.router.navigate(['/groupSchedule']);
  }
}
