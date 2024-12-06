import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Task1Page } from "./task1.page"

describe("Task1Page", () => {
  let component: Task1Page
  let fixture: ComponentFixture<Task1Page>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task1Page],
    }).compileComponents()

    fixture = TestBed.createComponent(Task1Page)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
