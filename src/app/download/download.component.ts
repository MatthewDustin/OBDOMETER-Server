import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';

// for firebase stuff:
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore'

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit{

  private firestore: FirebaseTSFirestore;
  dataRef!: USER;

  selectedDocument: string = "1"; // default to first document

  constructor(private router: Router) {
    this.firestore = new FirebaseTSFirestore();

    this.firestore.listenToDocument(
      {
        name: "logs",
        path: ["logs", "9LKwClXPkjYZOMmosTrW"],
        onUpdate: (result) =>{
          this.dataRef = result.data() as USER;
        }
      }
    )
  }
  ngOnInit(): void {
    let loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn != "true") {
      this.router.navigate(['login']);
    }
  }

  fileDownload(){
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
    const data = [
      this.dataRef.latitude,
      this.dataRef.longitude,
      this.dataRef.miles,
      this.dataRef.newState,
      this.dataRef.oldState,
      this.dataRef.road,
      this.dataRef.timestamp,
      this.dataRef.uid
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