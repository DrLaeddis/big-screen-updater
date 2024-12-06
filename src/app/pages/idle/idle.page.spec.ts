import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdlePage } from './idle.page';

describe('IdleComponent', () => {
  let component: IdlePage;
  let fixture: ComponentFixture<IdlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdlePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
