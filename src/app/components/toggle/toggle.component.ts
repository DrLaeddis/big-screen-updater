import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-toggle",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toggle.component.html",
  styleUrl: "./toggle.component.css",
})
export class ToggleComponent {
  @Input() isOn: boolean = false;

  @Input() onLabel: string = "";
  @Input() offLabel: string = "";
  @Output() toggleClick = new EventEmitter<string>(); // Event emitter to pass the label

  toggleSwitch() {
    this.isOn = !this.isOn;
    const currentLabel = this.isOn ? this.onLabel : this.offLabel; // Determine the current label
    this.toggleClick.emit(currentLabel); // Emit the current label
  }
}
