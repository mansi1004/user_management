import { Form } from './form.model';

export class FormService
{
  
    form:Form[]=[];

    addForm(form: Form) 
    {
        this.form.push(form);
    }
    
    
    getForms()
    { 
        return this.form;
    }
}