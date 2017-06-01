import { By } from "@angular/platform-browser";
import { Zip } from "../zip";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableComponent } from "./table.component";

describe("When limit the page size to 10", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    component.data = new Array<Zip>();
    for (let i = 0; i < 21; i++) {
      const zip = new Zip();
      zip._id = i;
      zip.city = "City";
      zip.pop = 42;
      zip.state = "Hogwarts";
      component.data.push(zip);
    }
    fixture.detectChanges();
  });

  it("display 10 items", () => {
    component.onPageSizeChanged(10);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css("table tbody tr")).length).toBe(10);
  });

  it("previous is disabled if first page is reached", () => {
    expect(fixture.debugElement.queryAll(By.css(".pagination .page-item"))[0].classes.disabled).toBe(true);
  });

  it("previous is enabled if page is not the first page", () => {
    component.next();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css(".pagination .page-item"))[0].classes.disabled).toBe(false);
  });

});
