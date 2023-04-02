import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';

// for firebase stuff:
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore'
//import { collection, query, where, getDocs } from '@angular/fire/firestore'
import { Firestore, collection, collectionData, query, getDocs } from "@angular/fire/firestore";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

//import { AngularGetAuth } from "@angular/fire/compat/auth";
var options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Report data',
  useBom: true,
  //noDownload: true,
  headers: ["Latitude", "Longitude", "Miles", "NewState", "OldState", "Road", "Timestamp", "Uid"]
};

const auth = getAuth();
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit{

  private q;
  dataRef!: USER;
  querySnapshot: any;
  timestamps: number[] = [5];
  downloads: USER[] = [];
  index = 0;
  user = auth.currentUser;
  userID: string;
  private firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {

    /* this.firestore.listenToDocument(
      {
        name: "logs",
        path: ["logs", "9LKwClXPkjYZOMmosTrW"],
        onUpdate: (result) =>{
          this.dataRef = result.data() as USER;
        }
      }
    ) */
    if (this.user == null) this.userID = "";
    else this.userID = this.user?.uid;
    this.q = query(collection(this.firestore, "logs")/* , where("uid", "==", this.userID) */);
  }
  async ngOnInit(): Promise<void> {
     let loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn != "true") {
      this.router.navigate(['login']);
    }
    this.querySnapshot = await getDocs(this.q);
    this.querySnapshot.forEach((doc: { id: any; data: () => USER; }) => {
      if(doc.data().uid = this.userID){
        this.downloads.push(doc.data());
        this.timestamps.push(doc.data().timestamp);
      }
    });
  }

  fileDownload(){
    let download: USER = this.downloads[this.index];
    const data = [
      download.latitude,
      download.longitude,
      download.miles,
      download.newState,
      download.oldState,
      download.road,
      download.timestamp,
      download.uid
    ];
    new ngxCsv([data], "Report", options);
  }
}

export interface USER{
  latitude: number;
  longitude: number;
  miles: number;
  newState: string;
  oldState: string;
  road: string;
  timestamp: number;
  uid: string;
}
