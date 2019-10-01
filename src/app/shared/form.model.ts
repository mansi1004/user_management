export class Form
{ 
    constructor
    ( public name: string,
      public empID:string,
      public email:string,
      public designation :string,
      public present:string,
      public experience:string
    )
    {
      this.name = name;
      this.empID=empID;
      this.email=email;
      this.designation=designation;
      this.present=present;
      this.experience=experience;
    }
}