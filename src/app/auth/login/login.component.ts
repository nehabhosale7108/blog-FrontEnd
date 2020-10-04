import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { LoginPayload } from '../login.payload';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  
 

  constructor(private formbuilder: FormBuilder, private authService: AuthService) { 
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', [Validators.required]]

    })
    this.loginPayload = {
      email: '',
      password:'',
    }
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.loginPayload.email = this.loginForm.get('email').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    console.log(this.loginPayload);

    this.authService.login(this.loginPayload).subscribe(data => {
      console.log(data);

    }, error => {
      alert('Unsuccessful');
    });
  }
  


}
