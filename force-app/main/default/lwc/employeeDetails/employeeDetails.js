import { LightningElement,track } from 'lwc';

export default class EmployeeDetails extends LightningElement {

  @track name;  
  @track age;
  @track email;

  nameHandler(event){
   this.name = event.target.value;
  }

  ageHandler(event){
    this.age = event.target.value;
  }
  emailHandler(event){
    this.email = event.target.value;
  }
}