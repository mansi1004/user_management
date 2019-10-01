import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(authForm:NgForm)
  {
    console.log('login form data:',authForm);
    // authForm.reset();
    this.router.navigate(['/home']);
    // [routerLink]="['/home']"
    }
  
}
