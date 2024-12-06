import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { DoorOpeningComponent } from "../../components/door-opening/door-opening.component"
import { WebSocketService } from "../../web-socket.service"
import { DoorClosedComponent } from "../../components/door-closed/door-closed.component";
import { DoorComponent } from "../../components/door/door.component";

@Component({
  selector: "app-task2",
  standalone: true,
  imports: [CommonModule, DoorOpeningComponent, DoorClosedComponent],
  templateUrl: "./task2.page.html",
  styleUrl: "./task2.page.css",
})
export class Task2Page implements OnInit {
  is_off: boolean = true;
  image_door: string = "door.png";
  door_left: string = "door_left.png";
  door_right: string = "door_right.png";

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.is_off = false;
    }, 100);
  }

  // Function to handle the door closing when the user clicks the screen
  handleClick() {  
  }
}