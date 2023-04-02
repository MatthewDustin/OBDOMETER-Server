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


// import for firebase connection:
// needs npm i firebasets to run
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
//import { AngularFireModule } from '@angular/fire/compat'

/* import { collection, query, where, getDocs } from "firebase/compat/firestore";
import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth"; */

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


  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig);
  }
}
