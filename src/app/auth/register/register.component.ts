import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { 
    this.registerForm = this.formbuilder.group({
      namer: ['', [Validators.required]],
      emailr: ['', [Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      contact: ['', [Validators.required,Validators.pattern(/(7|8|9)\d{9}/)]],
      passwordr: ['', [Validators.required]],
      cpasswordr: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],

    })
  }


  ngOnInit(): void {
  }

}




















