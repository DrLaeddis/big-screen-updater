import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component } from "@angular/core";

@Component({
  selector: "app-select-preset",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./select-preset.component.html",
  styleUrls: ["./select-preset.component.css"],
})
export class SelectPresetComponent {
  // Icon for left and right arrow
  leftArrow: string = "left-arrow.svg";
  rightArrow: string = "right-arrow.svg";

  // List dummy preset
  presets: Array<string> = [
    "Custom Preset 1",
    "Custom Preset 2",
    "Custom Preset 3",
    "Custom Preset 4",
    "Custom Preset 5",
    "Custom Preset 6",
    "Custom Preset 7",
    "Custom Preset 8",
    "Custom Preset 9",
    "Custom Preset 10",
  ];

  // Initial selected preset
  selectedPreset: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  // TrackBy function for better performance with ngFor
  trackByFn(index: number, item: any): number {
    return index;
  }

  // Function to select a preset
  selectPreset(index: number) {
    this.selectedPreset = index;
    console.log(`${this.presets[index]} clicked`); // Log the clicked preset
    this.cdr.detectChanges();
    setTimeout(() => {
      this.scrollToPreset(index); // Scroll to the selected preset
    }, 0);
  }

  // Function to go to the next preset
  nextPreset() {
    if (this.selectedPreset < this.presets.length - 1) {
      this.selectPreset(this.selectedPreset + 1);
    }
  }

  // Function to go to the previous preset
  prevPreset() {
    if (this.selectedPreset > 0) {
      this.selectPreset(this.selectedPreset - 1);
    }
  }

  // Scroll to the selected preset smoothly
  scrollToPreset(index: number) {
    const listItems = document.querySelectorAll("li"); // Grab all the list items
    if (listItems[index]) {
      listItems[index].scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }
}
