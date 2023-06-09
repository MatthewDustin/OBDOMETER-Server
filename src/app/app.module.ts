import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DownloadComponent } from './download/download.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app'
import { getAuth, provideAuth, Auth } from '@angular/fire/auth';

// import for firebase connection:
// needs npm i firebasets to run
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
//import { AngularFireModule } from '@angular/fire/compat'

/* import { collection, query, where, getDocs } from "firebase/compat/firestore";
import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth"; */
let auth: Auth;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DownloadComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => {
      auth = getAuth();
      return auth;
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    //const app = initializeApp(environment.firebaseConfig);
  }
  static getAuth() {
    return auth;
  }
}
