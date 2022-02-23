import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  document: any;
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
        this.document = mydata.data;
        this.show();
      });
    }
    this.show();
  }

  show = ()=>{
    this.document = new FormGroup({
      id: new FormControl(this.document == null ? "" : this.document._id),
      title: new FormControl(this.document == null ? "" : this.document.title,Validators.compose([Validators.required])),
      malecontent: new FormControl(this.document == null ? "" : this.document.malecontent, Validators.compose([Validators.required])),
      femalecontent: new FormControl(this.document == null ? "" : this.document.femalecontent, Validators.compose([Validators.required]))
    });
  }


  submit = (document:any)=>{

    let apiurl ="documents/save";
    let data = this.api.post(apiurl,{data:document});
    data.subscribe((mydata:any)=>{
      this.router.navigate(["admin/documents"])
    })
  }



}
