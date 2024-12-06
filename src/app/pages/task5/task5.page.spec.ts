import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Task5Page } from "./task5.page";

describe("Task5Page", () => {
  let component: Task5Page;
  let fixture: ComponentFixture<Task5Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task5Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
