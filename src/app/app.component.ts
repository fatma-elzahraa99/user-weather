import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { CountriesService } from './Services/country-http.service';
import { WeatherService } from './Services/weather-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user-weather';
  userIpAddress = '';
  weatherdata?: any;
  feelslikeC?: any;
  humidity?: any;
  mintempC?: any;
  maxtempC?: any;
  avgtempC?: any;
  moon_illumination?: any;
  moon_phase?: any;
  moonrise?: any;
  moonset?: any;
  sunrise?: any;
  sunset?: any;
  feelslikeC2?: any;
  humidity2?: any;
  mintempC2?: any;
  maxtempC2?: any;
  avgtempC2?: any;
  moon_illumination2?: any;
  moon_phase2?: any;
  moonrise2?: any;
  moonset2?: any;
  sunrise2?: any;
  sunset2?: any;
  data:any;
  citydata:any;
  cityList:any;
  cityvalue:any;
  selected:any;

  constructor(private httpclient: HttpClient , public router: Router ,private countryService:CountriesService , private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.getweatherDetails();
    this.getuserDetails();
    console.log(this.data)
    if(this.data){
      this.getcitiesCountriesNames();
    }


  }

  getweatherDetails() {
    this.httpclient
      .get('https://jsonip.com/')
      .pipe(
        switchMap((value: any) => {
          console.log(value, 'value');

          this.userIpAddress = value.ip;

          // let urlencoded = new URLSearchParams();
          // urlencoded.append('country', 'Egypt');
          // let httpHeaders = new HttpHeaders({
          //   'Content-Type': 'application/x-www-form-urlencoded',
          //   'Cache-Control': 'no-cache',
          // });
          // let options = {
          //   headers: httpHeaders,
          // };

          // console.log("value ip",value.ip)
          // let url =`http://api.ipstack.com/${value.ip}?access_key=e73d5750d9f5fae87522d391ac99c503`
          let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${value.ip}&format=json`;
          // let url=`http://countryapi.gear.host/v1/Country/getCountries?pName=Costa%20Rica`
          // let url = `https://countriesnow.space/api/v0.1/countries/cities`;
          return this.httpclient.get(url);
          // return this.httpclient.post<any>(url, urlencoded, options);
        })
      )
      .subscribe(
        (response: any) => {
          // this.userIpAddress=response.ip;
          this.weatherdata = response;
          this.feelslikeC =
            this.weatherdata.data.current_condition[0].FeelsLikeC;
          this.mintempC = this.weatherdata.data.weather[0].mintempC;
          this.maxtempC = this.weatherdata.data.weather[0].maxtempC;
          this.humidity = this.weatherdata.data.weather[0].hourly[0].humidity;
          this.avgtempC = this.weatherdata.data.weather[0].avgtempC;
          this.moon_illumination=this.weatherdata.data.weather[0].astronomy[0].moon_illumination;
          this.moon_phase=this.weatherdata.data.weather[0].astronomy[0].moon_phase
          this.moonrise=this.weatherdata.data.weather[0].astronomy[0].moonrise
          this.moonset=this.weatherdata.data.weather[0].astronomy[0].moonset
          this.sunrise=this.weatherdata.data.weather[0].astronomy[0].sunrise
          this.sunset=this.weatherdata.data.weather[0].astronomy[0].sunset
          console.log(this.feelslikeC);
          console.log(this.mintempC);
          console.log(this.maxtempC);
          console.log(this.humidity);
          console.log(this.avgtempC);
          console.log(this.moon_illumination)
          console.log(this.moon_phase)
          console.log(this.moonrise)
          console.log( this.moonset)
          console.log(this.sunrise)
          console.log(this.sunset)

          // x.data.weather.forEach((elem)=>{console.log(elem.maxtempC)})
          console.log(response);
          console.log(this.weatherdata);
          console.log(this.weatherdata.data.weather[0].astronomy);

        },

        (error) => {
          console.log(error);
        }
      );
  }
  getuserDetails(){
    this.httpclient.get('https://jsonip.com/')
    .pipe(
      switchMap((value:any)=>{
        this.userIpAddress=value.ip
        console.log("value ip",value.ip)
          let url =`https://api.ipstack.com/${value.ip}?access_key=216bc9d571949e768f574a7f502b6079`
        // let url =`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${value.ip}&format=json`
        // let url=`http://countryapi.gear.host/v1/Country/getCountries?pName=Costa%20Rica`

       return  this.httpclient.get(url)

      })
    )
    .subscribe(
      (response:any)=>{
      // this.userIpAddress=response.ip;
      this.data=response;
      this.getcitiesCountriesNames();
      // city_name.replace(" ", "+")
      console.log(response)
      console.log(this.data)

      },

      (error)=>{
      console.log(error)
      }
    )
   }
  getcitiesCountriesNames(){
    this.httpclient
      .get('https://jsonip.com/')
      .pipe(
        switchMap((value: any) => {
          // console.log(value, 'value');

          console.log(this)
          console.log(this.router)
          console.log(this.data)

          this.userIpAddress = value.ip;

          let urlencoded = new URLSearchParams();
          urlencoded.append('country',this.data.country_name);
          let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
          });
          let options = {
            headers: httpHeaders,
          };
           let url = `https://countriesnow.space/api/v0.1/countries/cities`;
          // return this.httpclient.get(url);
          return this.httpclient.post<any>(url, urlencoded, options);

        })
        )
          .subscribe(
            (response:any)=>{
            // this.userIpAddress=response.ip;
            this.citydata=response;
           this.cityList=(this.citydata.data)
           console.log(this.cityList)

            console.log(response),
            console.log(this.citydata)

            },

            (error)=>{
            console.log(error)
            }
          )

  }

  getSearchedweather(){
    this.httpclient
    .get('https://jsonip.com/')
    .pipe(
      switchMap((value: any) => {
        console.log(value, 'value');

        this.userIpAddress = value.ip;

        // let urlencoded = new URLSearchParams();
        // urlencoded.append('country', 'Egypt');
        // let httpHeaders = new HttpHeaders({
        //   'Content-Type': 'application/x-www-form-urlencoded',
        //   'Cache-Control': 'no-cache',
        // });
        // let options = {
        //   headers: httpHeaders,
        // };

        // console.log("value ip",value.ip)
        // let url =`http://api.ipstack.com/${value.ip}?access_key=e73d5750d9f5fae87522d391ac99c503`
        let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${value.ip}&format=json`;
        // let url=`http://countryapi.gear.host/v1/Country/getCountries?pName=Costa%20Rica`
        // let url = `https://countriesnow.space/api/v0.1/countries/cities`;
        return this.httpclient.get(url);
        // return this.httpclient.post<any>(url, urlencoded, options);
      })
    )
    .subscribe(
      (response: any) => {
        // this.userIpAddress=response.ip;
        this.weatherdata = response;
        this.feelslikeC =
          this.weatherdata.data.current_condition[0].FeelsLikeC;
        this.mintempC = this.weatherdata.data.weather[0].mintempC;
        this.maxtempC = this.weatherdata.data.weather[0].maxtempC;
        this.humidity = this.weatherdata.data.weather[0].hourly[0].humidity;
        this.avgtempC = this.weatherdata.data.weather[0].avgtempC;
        this.moon_illumination=this.weatherdata.data.weather[0].astronomy[0].moon_illumination;
        this.moon_phase=this.weatherdata.data.weather[0].astronomy[0].moon_phase
        this.moonrise=this.weatherdata.data.weather[0].astronomy[0].moonrise
        this.moonset=this.weatherdata.data.weather[0].astronomy[0].moonset
        this.sunrise=this.weatherdata.data.weather[0].astronomy[0].sunrise
        this.sunset=this.weatherdata.data.weather[0].astronomy[0].sunset
        console.log(this.feelslikeC);
        console.log(this.mintempC);
        console.log(this.maxtempC);
        console.log(this.humidity);
        console.log(this.avgtempC);
        console.log(this.moon_illumination)
        console.log(this.moon_phase)
        console.log(this.moonrise)
        console.log( this.moonset)
        console.log(this.sunrise)
        console.log(this.sunset)

        // x.data.weather.forEach((elem)=>{console.log(elem.maxtempC)})
        console.log(response);
        console.log(this.weatherdata);
        console.log(this.weatherdata.data.weather[0].astronomy);

      },

      (error) => {
        console.log(error);
      }
    );

  }
  onchangeselected(event:any){
    const value = event.target.value;
    this.selected = value;
    console.log(value);


  // console.log(event,"eevent")
  // for(let i=0 ; i<event.srcElement.length();i++){
  //   console.log(event.srcElement[i].label)
  // }
  // console.log(event.srcElement[0].label)
  // this.cityvalue=event.srcElement[9].label.replace(" ", "+")
  this.httpclient
  .get('https://jsonip.com/')
  .pipe(
    switchMap((value: any) => {

    let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e4c22c5f55264006b5d210704222805&q=${this.selected}&format=json`;
    return this.httpclient.get(url);

  })
  )
    .subscribe(
      (response: any) => {
        // this.userIpAddress=response.ip;
        this.weatherdata = response;
        this.feelslikeC2 = this.weatherdata.data.current_condition[0].FeelsLikeC;
        this.mintempC2 = this.weatherdata.data.weather[0].mintempC;
        this.maxtempC2 = this.weatherdata.data.weather[0].maxtempC;
        this.humidity2 = this.weatherdata.data.weather[0].hourly[0].humidity;
        this.avgtempC2 = this.weatherdata.data.weather[0].avgtempC;
        this.moon_illumination2=this.weatherdata.data.weather[0].astronomy[0].moon_illumination;
        this.moon_phase2=this.weatherdata.data.weather[0].astronomy[0].moon_phase
        this.moonrise2=this.weatherdata.data.weather[0].astronomy[0].moonrise
        this.moonset2=this.weatherdata.data.weather[0].astronomy[0].moonset
        this.sunrise2=this.weatherdata.data.weather[0].astronomy[0].sunrise
        this.sunset2=this.weatherdata.data.weather[0].astronomy[0].sunset
        console.log(this.feelslikeC);
        console.log(this.mintempC);
        console.log(this.maxtempC);
        console.log(this.humidity);
        console.log(this.avgtempC);
        console.log(this.moon_illumination)
        console.log(this.moon_phase)
        console.log(this.moonrise)
        console.log( this.moonset)
        console.log(this.sunrise)
        console.log(this.sunset)

        // x.data.weather.forEach((elem)=>{console.log(elem.maxtempC)})
        console.log(response);
        console.log(this.weatherdata);
        console.log(this.weatherdata.data.weather[0].astronomy);
      },
        (error) => {
          console.log(error);
        }
      );

      }



}
