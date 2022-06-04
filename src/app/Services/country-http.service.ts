import { Injectable } from "@angular/core";

import {HttpClient, HttpHeaders} from '@angular/common/http'



@Injectable()
export class CountriesService {
  userIpAddress=''

    constructor(private httpclient:HttpClient
            ){}

      //  getuserDetails(){
      //   this.httpclient.get('https://jsonip.com/')
      //   .subscribe(
      //     (response:any)=>{
      //     this.userIpAddress=response.id;
      //     },

      //   )
      //  }



   getcityFromCountry(countryname:string){
    let urlencoded = new URLSearchParams();
    urlencoded.append('country', countryname);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
    });
    let options = {
      headers: httpHeaders,
    };
  let url = `https://countriesnow.space/api/v0.1/countries/cities`;
   return this.httpclient.post<any>(url, urlencoded, options);

   }


}
