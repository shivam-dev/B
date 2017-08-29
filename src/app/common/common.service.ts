import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
	username:any;
	setUsername(username:any){
		this.username = username;
	}
}