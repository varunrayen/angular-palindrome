import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StringService {


	constructor(private _http:Http) { }



	checkString(string){
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this._http.post("http://localhost:8888/api/palindrome.php", string, {headers: headers})
      .map(res => res.json());
  }  

}
