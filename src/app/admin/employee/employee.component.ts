import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api.service';
import { AppComponent } from '../../app.component';
import { CookieService } from '../../cookie.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: any;
  id: string | null = ""
  constructor(private api: APIService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id != "0")
    {
      let apiurl = "documents/get";
      let data = this.api.post(apiurl, { data: { id: this.id } });
      data.subscribe((mydata: any) => {
        console.log(mydata);
        this.employee = mydata.data;
        this.show();
      });
    }
    this.show();
  }

  show = ()=>{
    this.employee = new FormGroup({
      id: new FormControl(this.employee == null ? "" : this.employee._id),
      title: new FormControl(this.employee == null ? "" : this.employee.title,Validators.compose([Validators.required])),
      malecontent: new FormControl(this.employee == null ? "" : this.employee.malecontent, Validators.compose([Validators.required])),
      femalecontent: new FormControl(this.employee == null ? "" : this.employee.femalecontent, Validators.compose([Validators.required]))
    });
  }


  submit = (employee:any)=>{

    let apiurl ="employees/save";
    let data = this.api.post(apiurl,{data:employee});
    data.subscribe((mydata:any)=>{
      this.router.navigate(["admin/employees"])
    })
  }



}
