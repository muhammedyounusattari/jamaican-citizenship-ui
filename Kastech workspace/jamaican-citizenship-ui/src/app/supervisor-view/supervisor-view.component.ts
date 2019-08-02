import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-view',
  templateUrl: './supervisor-view.component.html',
  styleUrls: ['./supervisor-view.component.css']
})
export class SupervisorViewComponent implements OnInit {

  private formType:string;
  constructor(private adminService:AdminService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.formType = this.activatedRoute.snapshot.paramMap.get('formType');
     this.adminService.getFormsForReview(this.formType).subscribe(data=>{
       localStorage.setItem('reviewForms',JSON.stringify(data));
       this.router.navigate(['/reviewForms']);
       
     })
  }
  


}
