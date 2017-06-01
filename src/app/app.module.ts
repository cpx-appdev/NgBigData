import { ZipService } from "./services/zip-service.service";
import { LOCALE_ID } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "de-DE"},
    ZipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
