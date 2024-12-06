import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFullLitePage } from './select-full-lite.page';

describe('SelectFullLiteComponent', () => {
  let component: SelectFullLitePage;
  let fixture: ComponentFixture<SelectFullLitePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFullLitePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFullLitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
