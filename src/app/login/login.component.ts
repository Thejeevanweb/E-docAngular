import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { CookieService } from '../cookie.service';
import { User } from './models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
// user la define kel constructor madhe
  constructor(private api:APIService,private cookie:CookieService,private router:Router) {
    this.user=new User;
   }

  ngOnInit(): void {

    this.user=new FormGroup(
      {
        email:new FormControl("",Validators.compose([Validators.required])),
        password:new FormControl("",Validators.compose([Validators.required]))

      }
    )
  }

  submit=(user:any)=>{

    this.router.navigate(["/admin/dashboard"]);

  }
}
