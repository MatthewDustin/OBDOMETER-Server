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
  ngOnInit() {
    console.log('Data', this.data);
  }
  checkLogin() {
    return(sessionStorage.getItem("loggedIn") == "true");
  }
}


