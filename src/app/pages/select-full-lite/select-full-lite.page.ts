import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { WebSocketService } from "../../web-socket.service";

@Component({
  selector: "app-select-full-lite",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./select-full-lite.page.html",
  styleUrl: "./select-full-lite.page.css",
})
export class SelectFullLitePage {
  logo: string = "logo-w-name.svg";
  logo_text: string = "logo-resonant.svg";

  constructor(
    private router: Router,
    private websocketService: WebSocketService
  ) {}

  handleFull() {
    this.router.navigate(["/select-mode"]);
  }

  handleLite() {
    this.router.navigate(["/select-session"]);
    this.websocketService.sendMessage('litemode', '')
  }
}
