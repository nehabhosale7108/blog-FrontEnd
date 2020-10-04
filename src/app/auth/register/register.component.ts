import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from '../register.payload';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  registerPayload: RegisterPayload

  constructor(private formbuilder: FormBuilder) { 
    this.registerForm = this.formbuilder.group({
      namer: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailr: ['', [Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      contact: ['', [Validators.required,Validators.pattern(/(7|8|9)\d{9}/)]],
      passwordr: ['', [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]],
      cpasswordr: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],

    });
    this.registerPayload = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password:'',
      contact_number: '',
      description: '',
      linkedin_url: '',
      status: '',
  }
  }

  

  ngOnInit(): void {
  }


onsubmit(){
  
  this.registerPayload.email = this.registerForm.get('emailr').value;
  this.registerPayload.first_name = this.registerForm.get('namer').value;
  this.registerPayload.last_name = this.registerForm.get('lastName').value;
  this.registerPayload.password = this.registerForm.get('passwordr').value;
  this.registerPayload.contact_number = this.registerForm.get('contact').value;
  this.registerPayload.linkedin_url = this.registerForm.get('linkedin').value;
  this.registerPayload.username = this.registerForm.get('userName').value;
  this.registerPayload.description = this.registerForm.get('description').value;

  console.log("register payload**********")
  console.log(this.registerPayload);
}
}

















