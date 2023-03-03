import { Component, Output } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  constructor(private fb: FormBuilder) { }
  userprofileForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        address1: [''],
        address2: [''],
        state: ['',Validators.required],
        zip: ['',Validators.required],
      }),
      email: ['',Validators.required],
      phoneNo: ['',Validators.required],
      department: [''],
    });
    
    onSubmit(){
      //console.warn(this.userprofileForm.value);
      var firstName = this.userprofileForm.controls['firstName'].value;
      var email = this.userprofileForm.controls['email'].value;
      var phoneNo = this.userprofileForm.controls['phoneNo'].value;
      var department = this.userprofileForm.get('department')?.value;
      
      console.log('First Name is :: ' + firstName);
      console.log("Address >> Address1 :: " + this.userprofileForm.get('address')?.get('address1')?.value);
      console.log("Address >> Address2 :: " + this.userprofileForm.get('address')?.get('address2')?.value);
      console.log("Address >> State :: " + this.userprofileForm.get('address')?.get('state')?.value);
      console.log("Address >> Zip :: " + this.userprofileForm.get('address')?.get('zip')?.value);
      console.log('Email is :: ' + email);
      console.log('Phone Number is :: ' + phoneNo);
      console.log('Department is :: ' + department);
      this.userprofileForm.reset();
    }
 
}
