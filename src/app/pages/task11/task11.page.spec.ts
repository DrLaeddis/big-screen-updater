import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Task11Page } from "./task11.page";

describe("Task11Page", () => {
  let component: Task11Page;
  let fixture: ComponentFixture<Task11Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task11Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
