import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DoorOpeningComponent } from '../../components/door-opening/door-opening.component'
import { WebSocketService } from "../../web-socket.service";

@Component({
  selector: "app-idle",
  standalone: true,
  imports: [CommonModule, DoorOpeningComponent],
  templateUrl: "./idle.page.html",
  styleUrl: "./idle.page.css",
})
export class IdlePage implements OnInit {
  is_off = true;
  image_door = "door.png";
  door_left = "door_left.png";
  door_right = "door_right.png";

  constructor(
    private webSocketService: WebSocketService,
  ) {}

  ngOnInit(): void {
    this.webSocketService.onMessage("big-screen").subscribe((message) => {
      const { event, data } = message;
      console.log(message);
      switch (event) {
        case "change-active":
          this.is_off = false;
          break;
        default:
          break;
      }
    });
  }

  handleClick() {
    if (this.is_off) {
      this.is_off = false;
      this.webSocketService.sendMessage("big-screen-action", {
        action: "set-active",
        data: null
      });
    }
  }
}
