import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Task10Page } from "./task10.page";

describe("Task10Page", () => {
  let component: Task10Page;
  let fixture: ComponentFixture<Task10Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task10Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
