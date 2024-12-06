import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Task12Page } from "./task12.page";

describe("Task12Page", () => {
  let component: Task12Page;
  let fixture: ComponentFixture<Task12Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task12Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
