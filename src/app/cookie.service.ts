import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  set = (name: string, value: string) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 10);
    document.cookie = name + "=" + (value) + ";expires=" + exdate;

  }

  get = (name: string) => {
    if (document.cookie.length > 0) {
      var start = document.cookie.indexOf(name + "=");
      if (start != -1) {
        var start = start + name.length + 1;
        var end = document.cookie.indexOf(";", start);
        if (end == -1) {
          var end = document.cookie.length;
          return (document.cookie.substring(start, end));
        }
      }
    }
    return "";
  }

  delete = (name: string) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 10);
    document.cookie = name + "=" + ("") + ";expires=" + exdate;
  }
}
