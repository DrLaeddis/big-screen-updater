import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterOutlet } from "@angular/router";
import { WebSocketService } from "./web-socket.service";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matSettings, matLogOut } from "@ng-icons/material-icons/baseline";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  providers: [provideIcons({ matSettings, matLogOut })],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly websocketService: WebSocketService,
    private router: Router
  ) {}

  ngOnInit() {
    this.websocketService.onMessage('experience-data').subscribe((message: string) => {
      localStorage.setItem("experience",message)
    })

    this.websocketService.onMessage('pausevideo').subscribe((message: string) => {
      console.log("check message from pausevideo", message)
    })


    this.websocketService
      .onMessage("big-screen")
      .subscribe((message: string) => {
        switch (message) {
          case "task1":
            this.router.navigate(["/task1"]);
            break;
          case "task2":
            this.router.navigate(["/task2"]);
            break;
          case "task3":
            this.router.navigate(["/task3"]);
            break;
          case "task4":
            this.router.navigate(["/task4"]);
            break;
          case "task6":
            this.router.navigate(["/task6"]);
            break;
          case "task7":
            this.router.navigate(["/task7"]);
            break;
          case "task8":
            this.router.navigate(["/task8"]);
            break;
          case "task9":
            this.router.navigate(["/task9"]);
            break;
          case "task10":
            this.router.navigate(["/task10"]);
            break;
          case "task11":
            this.router.navigate(["/task11"]);
            break;
          case "task12":
            this.router.navigate(["/task12"]);
            break;
          case "task13":
            this.router.navigate(["/task13"]);
            break;
          case "task14":
            this.router.navigate(["/task14"]);
            break;
          case "task15":
            this.router.navigate(["/task15"]);
            break;
          case "task55":
            this.router.navigate(["/task55"]);
            break;
          case "task56":
            this.router.navigate(["/task56"]);
            break;
          case "task44":
            this.router.navigate(["/task44"]);
            break;
          case "settings":
            this.router.navigate(["/settings"]);
            break;
          default:
            break;
        }
      });

    this.websocketService.onMessage("settings").subscribe((message: string) => {
      this.router.navigate(["/settings"]);
    });
  }
}
