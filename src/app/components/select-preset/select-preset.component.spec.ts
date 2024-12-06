import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPresetComponent } from './select-preset.component';

describe('SelectPresetComponent', () => {
  let component: SelectPresetComponent;
  let fixture: ComponentFixture<SelectPresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPresetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
