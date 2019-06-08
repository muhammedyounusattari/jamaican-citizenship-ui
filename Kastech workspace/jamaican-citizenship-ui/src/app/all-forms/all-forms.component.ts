import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../shared/services/logout.service';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.css']
})
export class AllFormsComponent implements OnInit {

  loginStatus:boolean;
  constructor(private logoutService:LogoutService) { }

  ngOnInit() {
    this.logoutService.changeMessage(true);
  }

}
