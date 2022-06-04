import { Injectable } from "@angular/core";

import {HttpClient, HttpHeaders} from '@angular/common/http'



@Injectable()
export class WeatherService {
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



   getspecifiedweatherDetails(cityname:string){
    let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${cityname}&format=json`;

          return this.httpclient.get(url);
   }

}
