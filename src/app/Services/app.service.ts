import { Injectable } from "@angular/core";

import {HttpClient} from '@angular/common/http'



@Injectable()
export class UserAddressService {
  userIpAddress=''

    constructor(private httpclient:HttpClient
            ){}

       getuserDetails(){
        this.httpclient.get('https://jsonip.com/')
        .subscribe(
          (response:any)=>{
          this.userIpAddress=response.id;
          },
          // (error)=>{
          // console.log(error)
          // }
        )
       }



}
