import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModePage } from './select-mode.page';

describe('SelectModeComponent', () => {
  let component: SelectModePage;
  let fixture: ComponentFixture<SelectModePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
