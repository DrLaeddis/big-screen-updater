import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Task2Page } from "./task3.page";

describe("Task2Page", () => {
  let component: Task2Page;
  let fixture: ComponentFixture<Task2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task2Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
