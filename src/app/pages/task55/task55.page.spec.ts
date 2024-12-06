import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task55Page } from './task55.page';

describe('Task55Page', () => {
  let component: Task55Page;
  let fixture: ComponentFixture<Task55Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task55Page]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Task55Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
