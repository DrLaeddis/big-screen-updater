import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Task13Page } from "./task13.page";

describe("Task13Page", () => {
  let component: Task13Page;
  let fixture: ComponentFixture<Task13Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task13Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Task13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
