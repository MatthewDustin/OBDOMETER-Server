import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
  }

  login(){
    console.log("checking")
  }
}
