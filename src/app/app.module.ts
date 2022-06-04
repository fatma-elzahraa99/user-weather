import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetectionComponent } from './weather-detection/weather-detection.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import {HttpClientModule} from '@angular/common/http'
import { UserAddressService } from './Services/app.service';
import { CountriesService } from './Services/country-http.service';
import { WeatherService } from './Services/weather-data-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetectionComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserAddressService,CountriesService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
