import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;
  passwordCorrect = false;

  constructor(private router: Router) {}

  onSubmit(form: any) {
    this.submitted = true;
    console.log(form.form.value);

    this.passwordCorrect = this.checkHash(form.form.value.name, form.form.value.password);
  }

  checkHash(username: String, password: String) {
    if (username == "admin" && password == "admin") {
      this.router.navigate(['download']);
      return true;
    }
    return false;
  }

}
