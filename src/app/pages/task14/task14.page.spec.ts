import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Task14Page } from "./task14.page";

describe("Task14Page", () => {
  let component: Task14Page;
  let fixture: ComponentFixture<Task14Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task14Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
