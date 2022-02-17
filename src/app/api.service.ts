import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseurl="http://localhost:8081/";

  constructor(private http:HttpClient) { }

  post=(api:string,data:any)=>{
    this.http.post(this.baseurl+api,data).subscribe(reply=>{
      return(reply);
    })

  }

  get=(api:string,data:any)=>{
    this.http.get(this.baseurl+api,data).subscribe(reply=>{
      return(reply);
    })

  }
}
