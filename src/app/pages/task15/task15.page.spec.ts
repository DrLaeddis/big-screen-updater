import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Task15Page } from "./task15.page";

describe("Task15Page", () => {
  let component: Task15Page;
  let fixture: ComponentFixture<Task15Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task15Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
