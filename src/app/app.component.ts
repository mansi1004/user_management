import { Component } from '@angular/core';
import { FormService } from './shared/form.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FormService]
})
export class AppComponent {
  title = 'user-management';
  
  constructor(private formService:FormService)
  {}
  

}
