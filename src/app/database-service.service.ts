import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface P {
    password: number;

}

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  constructor(private http: HttpClient) { }
  passwordUrl = 'assets/passwords.json';

  getPasswords() {
    return this.http.get<P>(this.passwordUrl)
  }
}
