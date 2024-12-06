import { Component } from "@angular/core";
import { WebSocketService } from "../../web-socket.service";

@Component({
  selector: "app-select-session",
  standalone: true,
  imports: [],
  templateUrl: "./select-session.page.html",
  styleUrl: "./select-session.page.css",
})
export class SelectSessionPage {
  logo: string = "logo-w-name.svg";
  matrix: string = "matrix.svg";
  novak_mode: string = "novak-mode.png";
  recharge: string = "recharge.png";
  reconnect: string = "reconnect.png";
  recover: string = "recover.png";
  rejuvenate: string = "rejuvenate.png";
  relax: string = "relax.png";
  bio_feedback: string = "bio-feedback.png";

  constructor(private websocketService: WebSocketService) {}

  handleSelectSession() {
    // this.websocketService.sendMessage("big-screen-action", {
    //   action: "set-on-session",
    //   data: null,
    // });
    this.websocketService.sendMessage('recharge', '')
  }
}
