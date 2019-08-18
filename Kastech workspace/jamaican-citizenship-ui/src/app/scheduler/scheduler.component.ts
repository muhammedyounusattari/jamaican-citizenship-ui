import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchedulerService } from '../shared/services/scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  private applicantId:string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private schedulerService:SchedulerService) {
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
   

   }

  ngOnInit() {

  }

  individualForm(){
    this.router.navigate(['/individualSchedule/'+this.applicantId]);
  }

  groupForm(){
    this.router.navigate(['/groupSchedule']);
  }
}
