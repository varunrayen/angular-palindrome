import { Component } from '@angular/core';

import { StringService } from './shared/string.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userText: string;
  result: boolean;
  palindrome: boolean;
  notpalindrome: boolean;

  constructor(
    private stringService: StringService) { }

  palindromeCheck(){

  	this.palindrome = false;
  	this.notpalindrome = false;

  	this.stringService
        .checkString(this.userText)
        .subscribe(res => { 

        	this.result = res; 
        	if (this.result == true)
				  {
				  	this.notpalindrome = false;
				  	this.palindrome = true;
				  }
				 	if (this.result == false)
				 	{
				 		this.palindrome = false;
				 		this.notpalindrome = true;
				 	}

        })

  }
}
