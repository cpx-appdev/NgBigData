import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Zip } from "../zip";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {

  @Input() data = Array<Zip>();
  zips: Array<Zip>;
  searchTerm = "";
  actualSort = "";
  currentPage = 0;
  pageSize = 10;
  pageSizes = Array<number>();

  constructor() { }

  ngOnInit(): void {
    this.pageSizes = new Array<number>();
    this.pageSizes.push(5);
    this.pageSizes.push(10);
    this.pageSizes.push(20);
    this.pageSizes.push(50);
    this.pageSizes.push(100);
    this.pageSizes.push(500);
    this.pageSizes.push(1000);
  }

  public sort(property, direction: SortDirection) {
    console.log("sort data: " + property);
    this.actualSort = property + direction;
    this.data.sort(function (a, b) {
      if (a[property] < b[property]) { return -1 * direction; }
      if (a[property] > b[property]) { return 1 * direction; }
      return 0;
    });
  }

  public filter(searchValue: string) {
    if (this.zips === undefined) {
      this.zips = this.data.slice();
    }
    console.log("search data with " + this.searchTerm);
    this.data = this.zips.filter(x => {
      return x.city.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0;
    });
    this.currentPage = 0;
  }

  public next() {
    this.currentPage++;
  }

  public prev() {
    if (this.currentPage === 0) { return; }
    this.currentPage--;
  }

  public onPageSizeChanged(value: number) {
    this.pageSize = <number>value;

    if (this.elementsFrom > this.data.length) {
      this.currentPage = 0;
    }
  }

  public get elementsFrom(): number {
    return this.currentPage * this.pageSize;
  }

  public get elementsTo(): number {
    return this.elementsFrom + this.pageSize;
  }

  public get page(): number {
    return this.currentPage;
  }
}


export enum SortDirection {
  Up = 1, Down = -1
}
