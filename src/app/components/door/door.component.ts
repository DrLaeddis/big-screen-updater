import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-door",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./door.component.html",
  styleUrl: "./door.component.css",
})
export class DoorComponent implements OnInit, OnChanges {
  leftDoor: string = "door-left.png";
  rightDoor: string = "door-right.png";
  isClosed: boolean = false;

  @Input() isClose: boolean = false;
  @Output() transitionEnded: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    // The door is initially closed as default
    this.isClosed = !this.isClose;
  }

  // Handle the door closing/opening animation
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["isClose"]) {
      setTimeout(() => {
        this.isClosed = this.isClose;
      }, 0);
    }
  }

  // Emit event when the transition ends
  onTransitionEnd(door: 'left' | 'right'): void {
    console.log(`${door} door transition ended.`);
    // Emit the event after the door transition finishes
    this.transitionEnded.emit(door);
  }
}
