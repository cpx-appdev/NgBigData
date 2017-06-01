import { Zip } from "../zip";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ZipService {

  constructor(private http: Http) { }

  public getZipCodes(): Observable<Array<Zip>> {
    return this.http.get("/assets/zips.json")
      .map((res: any) => res.json());
  }
}
