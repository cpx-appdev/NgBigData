import { TestBed, inject } from "@angular/core/testing";

import { ZipService } from "./zip-service.service";
import { Http, HttpModule } from "@angular/http";
import { Zip } from "../zip";
import { Observable } from "rxjs/Observable";

describe("ZipService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ZipService]
    });
  });

  it("should be created", inject([ZipService], (service: ZipService) => {
    expect(service).toBeTruthy();
  }));

  it("should deluver zip codes as an array", inject([ZipService], (service: ZipService) => {
    service.getZipCodes().subscribe((zips: Zip[] ) => {
      expect(zips).toBeTruthy();
      expect(zips.length).toBe(88401);
      expect(typeof(zips[0])).toEqual(Zip);
    });
  }));
});


// Isolated Tests
// https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-unit-tests