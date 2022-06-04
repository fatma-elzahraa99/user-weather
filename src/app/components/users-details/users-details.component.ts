import { Component, OnInit } from '@angular/core';
import { UserAddressService } from '../../Services/app.service';
import {HttpClient} from '@angular/common/http'
import { switchMap } from 'rxjs';
import { CountriesService } from '../../Services/country-http.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  title="Location App"
  userIpAddress=''
  constructor( public userAddressService:UserAddressService , private httpclient:HttpClient ,private countryService:CountriesService ) { }
   lat:any;
   lng:any;
   data:any;
  ngOnInit(): void {
  //  if(!navigator.geolocation){
  //    console.log("location is not supported")
  //  }
  //  navigator.geolocation.getCurrentPosition(position=>{
  // console.log(`lat:${position.coords.latitude} , lng:${position.coords.longitude}`)
  // this.lat=position.coords.latitude;
  // this.lng=position.coords.longitude;
  //  });

      //  this.getuserDetails()

  }
  // https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=197.47.157.204&format=json

  // getuserDetails(){
  //   this.httpclient.get('https://jsonip.com/')
  //   .pipe(
  //     switchMap((value:any)=>{
  //       this.userIpAddress=value.ip
  //       console.log("value ip",value.ip)
  //         let url =`http://api.ipstack.com/${value.ip}?access_key=cdb0e91e48568caec4621a3a02394d4f`
  //       // let url =`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${value.ip}&format=json`
  //       // let url=`http://countryapi.gear.host/v1/Country/getCountries?pName=Costa%20Rica`

  //      return  this.httpclient.get(url)

  //     })
  //   )
  //   .subscribe(
  //     (response:any)=>{
  //     // this.userIpAddress=response.ip;
  //     this.data=response;
  //     console.log(response)
  //     console.log(this.data)
  //     let x = 5;
  //     },

  //     (error)=>{
  //     console.log(error)
  //     }
  //   )
  //  }
  // getcitiesCountriesNames(){
  //   this.countryService.getcityFromCountry(this.data.country_name).subscribe(res=>res.json)
  // }



}
