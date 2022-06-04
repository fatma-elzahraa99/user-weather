import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-weather-detection',
  templateUrl: './weather-detection.component.html',
  styleUrls: ['./weather-detection.component.css']
})
export class WeatherDetectionComponent implements OnInit {
  userIpAddress=''
  data:any;

  constructor(private httpclient:HttpClient ) {}

  ngOnInit(): void {
     this.SearchbycityweatherDetails()
  }


  SearchbycityweatherDetails(){
    this.httpclient.get('https://jsonip.com/')
    .pipe(
      switchMap((value:any)=>{
        this.userIpAddress=value.ip
        // console.log("value ip",value.ip)
          // let url =`http://api.ipstack.com/${value.ip}?access_key=e73d5750d9f5fae87522d391ac99c503`
         let url =`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${value.ip}&format=json`
        // let url=`http://countryapi.gear.host/v1/Country/getCountries?pName=Costa%20Rica`

       return  this.httpclient.get(url)

      })
    )
    .subscribe(
      (response:any)=>{
      // this.userIpAddress=response.ip;
      this.data=response;
      console.log(response)
      },

      (error)=>{
      console.log(error)
      }
    )
   }


}
