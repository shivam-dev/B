import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   router:any;
   username:any;
   commonService:any;

  constructor(_router: Router, _commonService: CommonService){   
       this.router = _router;
       this.commonService = _commonService;
   }

  ngOnInit() {
  	this.username = this.commonService.username;
  }
}
