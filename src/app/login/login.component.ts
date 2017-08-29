import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

   router:any;
   username:any;
   password: any;
   commonService:any;

   constructor(_router: Router, _commonService: CommonService){   
       this.router = _router;
       this.commonService = _commonService;
   }
	

  getLogin(values){
    this.commonService.setUsername(values.username);
    this.router.navigateByUrl('/main');
  }

}
