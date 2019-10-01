import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '../shared/form.model';
import { Router } from '@angular/router';
import { FormService } from '../shared/form.service';
// import { Server } from 'http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})
export class FormComponent implements OnInit {
 
  constructor(private router:Router,private formService:FormService ) {}

  ngOnInit() {}


  onSubmit(f:NgForm)
  {
  console.log('form on submission',f);

  const form = new Form(
    f.value.name,
    f.value.empID,
    f.value.email,
    f.value.designation,
    f.value.present,
    f.value.experience
    );
    console.log('name',f.value.name);
    console.log('name',f.value.empID);
    console.log('name',f.value.email);
    console.log('name',f.value.designation);
    console.log('name',f.value.present);
    console.log('name',f.value.experience);

     
    this.formService.addForm(form);


    this.router.navigate(['/home']);
  }

}
