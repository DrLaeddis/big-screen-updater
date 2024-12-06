import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task8Page } from './task8.page';

describe('Task8Page', () => {
  let component: Task8Page;
  let fixture: ComponentFixture<Task8Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task8Page]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Task8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
