import { Component } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {

  getCSV() {
    ngxCsv(this.data, this.filename, this.options);
  }
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    showTitle: false,
    title: 'Your title',
    useBom: true,
    noDownload: false
  };

  filename = "data.csv"

  data = [
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];


}
