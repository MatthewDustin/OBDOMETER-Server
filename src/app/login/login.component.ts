import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DatabaseServiceService } from '../database-service.service';
export interface P {
  password: number;

}
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;
  passwordCorrect = false;
  usernameCorrect = false;
  passwordJson: P | undefined;

  constructor(private router: Router, private dbService: DatabaseServiceService) {}

  onSubmit(form: any) {
    this.submitted = true;
    console.log(form.form.value);

    this.passwordCorrect = this.checkHash(form.form.value.name, form.form.value.password);
  }

  checkHash(username: String, password: String) {

    if (username == "admin" && password == "admin") {

      this.router.navigate(['download']);
      sessionStorage.setItem("loggedIn", "true");
      AppComponent.checkLogin();
      return true;
    }
    return false;
  }

  readJson() {
    this.dbService.getPasswords()
      .subscribe((data: P) => this.passwordJson = {
          password: data.password
      });
  }

}
