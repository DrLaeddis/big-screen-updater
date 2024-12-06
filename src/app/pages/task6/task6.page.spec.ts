import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Task6Page } from "./task6.page";

describe("Task6Page", () => {
  let component: Task6Page;
  let fixture: ComponentFixture<Task6Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task6Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
