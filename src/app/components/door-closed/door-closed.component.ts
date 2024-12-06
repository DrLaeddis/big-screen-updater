import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-door-closed",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./door-closed.component.html",
  styleUrl: "./door-closed.component.css",
})
export class DoorClosedComponent implements OnInit {
  leftDoor: string = "door-left.png";
  rightDoor: string = "door-right.png";
  isClosed: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isClosed = true;
    }, 0);
  }
}
