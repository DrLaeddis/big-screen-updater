import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorOpeningComponent } from './door-opening.component';

describe('DoorOpeningComponent', () => {
  let component: DoorOpeningComponent;
  let fixture: ComponentFixture<DoorOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorOpeningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
