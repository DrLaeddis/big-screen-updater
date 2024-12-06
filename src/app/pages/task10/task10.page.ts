import { Component, OnInit } from "@angular/core"
import { WebSocketService } from "../../web-socket.service"
import { DoorComponent } from "../../components/door/door.component";
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
  selector: "app-task10",
  standalone: true,
  imports: [DoorComponent, LoadingComponent],
  templateUrl: "./task10.page.html",
  styleUrl: "./task10.page.css",
})
export class Task10Page implements OnInit {

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // // Automatically close the door (if using three.js)
    // setTimeout(() => {
    //   this.is_off = false;
    // }, 100);

    // this.webSocketService.onMessage("big-screen").subscribe(message => {
    //   const { event, data } = message;
    //   console.log(message);
    //   switch (event) {
    //     case "change-active":
    //       this.is_off = false;
    //       break;
    //     default:
    //       break;
    //   }
    // });
  }

  // Function to handle the door closing when the user clicks the screen
  handleClick() {
    // if (this.is_off) {
    //   this.is_off = false;
    //   // this.webSocketService.sendMessage("big-screen-action", {
    //   //   action: "set-active",
    //   //   data: null,
    //   // });
    // }
    console.log("Screen clicked!")
  }
}
