import { Component, OnInit } from '@angular/core';
import * as jsonData from '../assets/passwords.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apphack';
  data: any = jsonData;
  static loggedIn = true;
  ngOnInit() {
    console.log('Data', this.data);
    AppComponent.loggedIn = sessionStorage.getItem("loggedIn") == "true";
  }
  static checkLogin() {
    AppComponent.loggedIn = sessionStorage.getItem("loggedIn") == "true";
  }
}


