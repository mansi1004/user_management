import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormService } from '../shared/form.service';
import { Form } from '../shared/form.model';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  // forms:Form[];
  // submitted:boolean=false;
  showModal:boolean=false;

  constructor(private formService:FormService){}

  ngOnInit()
  { 
    // console.log("hello");
    // this.forms=this.formService.form;
    // // console.log(this.forms);
    // if(this.forms.length != 0 )
    // {
    //   console.log(this.forms);
    //   this.submitted=true;
    // }
    // else{
    //   console.log('null in form')
    // }
  }

   onClick()
  {
    console.log("button clicked");
    this.showModal=true;
    console.log(this.showModal);
  }
  onCloseModal()
  {
    console.log("modal closed");
    this.showModal=false;
  }

  onSubmit(f:NgForm)
  {
    console.log("modal form data",f);
    

  }

}
