import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    let loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn != "true") {
      this.router.navigate(['login']);
    }
  }

  onSubmit(form: any) { }
}
