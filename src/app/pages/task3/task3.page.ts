import { Component } from "@angular/core";
import { LayoutComponent } from "../../components/layout/layout.component";
import { ButtonComponent } from "../../components/button/button.component";
import { WebSocketService } from "../../web-socket.service";
import { DoorComponent } from "../../components/door/door.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-task2",
  standalone: true,
  imports: [LayoutComponent, ButtonComponent, DoorComponent, CommonModule],
  templateUrl: "./task3.page.html",
  styleUrl: "./task3.page.css",
})
export class Task3Page {
  logo: string = "logo-w-name.svg";
  // Property to control the door state
  doorClosed: boolean = false;

  constructor(private websocketService: WebSocketService) {}

  regenesisFullMode() {
    // Toggle doorClosed to true when the button is pressed
    this.doorClosed = true;
    console.log("Regenesis Full Mode Clicked!");

    //this.websocketService.sendMessage("fullmode", "");
  }

  regenesisLiteMode() {
    alert("Comming Soon")
    // Toggle doorClosed to true when the button is pressed
    /*
    this.doorClosed = true;
    console.log("Regenesis Lite Mode Clicked!");

    this.websocketService.sendMessage("litemode", "");
    */
  }

  onDoorTransitionEnd(door: string) {
    console.log(`Transition for ${door} door has ended.`);
    // Perform your logic after the door transition ends
    if (this.doorClosed) {
      console.log("Doors are fully closed.");
      this.websocketService.sendMessage("fullmode", "");
    } else {
      console.log("Doors are fully opened.");
    }
  }
}
