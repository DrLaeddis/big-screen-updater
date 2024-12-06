import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task44Page } from './task44.page';

describe('Task44Page', () => {
  let component: Task44Page;
  let fixture: ComponentFixture<Task44Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task44Page]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Task44Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
