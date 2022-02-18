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
        email:new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])),
        password:new FormControl("",Validators.compose([Validators.required]))

      }
    )
  }

  submit=(user:any)=>{

    // this.router.navigate(["/admin/dashboard"]);

    let apiurl="authentication/login";

    let data=this.api.post(apiurl,{data:user })

    data.subscribe((mydata:any)=>{
      console.log(mydata);
    if(mydata.data.status=="success"){

      this.cookie.set("usertype","admin");
      this.cookie.set("authkey",mydata.data.authkey);
      this.router.navigate(["/admin/dashboard"]);
    }
    else{
      alert("invalid email or password")
    }
    })

  }
}
