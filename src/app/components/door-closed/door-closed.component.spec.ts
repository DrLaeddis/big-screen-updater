import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorClosedComponent } from './door-closed.component';

describe('DoorClosedComponent', () => {
  let component: DoorClosedComponent;
  let fixture: ComponentFixture<DoorClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorClosedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
