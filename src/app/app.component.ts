import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';
import { Zip } from './zip';
import { ZipService } from './services/zip-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  zipCodes = new Array<Zip>();

  constructor(private zipCodeService: ZipService) { }

  public ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    console.log('loading data...');
    this.zipCodeService.getZipCodes().subscribe(x => this.zipCodes = x);
    console.log('done');
  }
}


