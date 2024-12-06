import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7Page } from './task7.page';

describe('Task7Page', () => {
  let component: Task7Page;
  let fixture: ComponentFixture<Task7Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task7Page]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Task7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
