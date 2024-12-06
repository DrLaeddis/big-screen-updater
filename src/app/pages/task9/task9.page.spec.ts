import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Task9Page } from "./task9.page";

describe("Task9Page", () => {
  let component: Task9Page;
  let fixture: ComponentFixture<Task9Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task9Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
