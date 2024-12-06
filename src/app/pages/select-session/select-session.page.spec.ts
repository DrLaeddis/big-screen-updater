import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSessionPage } from './select-session.page';

describe('SelectSessionComponent', () => {
  let component: SelectSessionPage;
  let fixture: ComponentFixture<SelectSessionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSessionPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
