import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Task56Page } from "./task56.page";

describe("Task56Page", () => {
  let component: Task56Page;
  let fixture: ComponentFixture<Task56Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task56Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task56Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
