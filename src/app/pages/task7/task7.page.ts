import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterOutlet } from "@angular/router";
import { LayoutComponent } from "../../components/layout/layout.component";
import { ButtonComponent } from "../../components/button/button.component";
import { LoadingComponent } from "../../components/loading/loading.component";
import { WebSocketService } from "../../web-socket.service";
import { DoorComponent } from "../../components/door/door.component";
import { invoke } from "@tauri-apps/api";
import { SocketTopicsService } from "../../services/sockettopics/socket-topics.service";

@Component({
  selector: "app-task7",
  standalone: true,
  imports: [
    LayoutComponent,
    ButtonComponent,
    LoadingComponent,
    CommonModule,
    DoorComponent,
  ],
  templateUrl: "./task7.page.html",
  styleUrl: "./task7.page.css",
})
export class Task7Page implements OnInit {
  router = inject(Router);

  logo: string = "logo-w-name.svg";
  gear: string = "gear.svg";
  loading: boolean = false;
  doorClosed: boolean = false;
  jwtToken: string = "";
  user_id: string = "";
  isAnimation: boolean = false;
  tokens: string = "";

  @ViewChild(DoorComponent) doorComponent!: DoorComponent;
  doorAnimation: boolean = true;

  constructor(
    private websocketService: WebSocketService,
    private socketTopics: SocketTopicsService
  ) {}

  ngOnInit(): void {
    this.getJwtToken();
    this.getUserID();
    this.loadSocketTopics();
    this.websocketService.onMessage("settings").subscribe((message: any) => {
      this.doorClosed = true;
      this.router.navigate(["/settings"]);
    });

    const loadTokens = localStorage.getItem("Token") || "";
    this.tokens = loadTokens;
  }

  loadSocketTopics() {
    this.socketTopics.getSocketTopics().subscribe(
      response => {
        localStorage.setItem("socketTopicList", JSON.stringify(response));
        console.log(response);
      },
      error => {
        console.error("What error", error);
      }
    );
  }

  async getJwtToken() {
    try {
      this.jwtToken = await invoke("get_jwt_token");
      localStorage.setItem("Token", this.jwtToken);
    } catch (error) {
      console.error("Error cannot found JWT Token", error);
    }
  }

  async getUserID() {
    try {
      this.user_id = await invoke("get_userid");
      console.log("cek user id from tauri", this.user_id);

      localStorage.setItem("UserID", this.user_id);
    } catch (error) {
      console.error("Error cannot found User ID", error);
    }
  }

  private updateAuthStatus() {
    const storedTopics = localStorage.getItem("socketTopicList");
    if (storedTopics) {
      const socketTopicList = JSON.parse(storedTopics);
      const updateTopics = socketTopicList.map((topic: any) => {
        if (topic.topic === "sessionmode") {
          return {
            ...topic,
            auth_status: topic.auth_status === null ? true : topic.auth_status,
          };
        }
        return topic;
      });

      localStorage.setItem("socketTopicList", JSON.stringify(updateTopics));
    }
  }

  sessionMode() {
    const token = localStorage.getItem("Token") || "";
    if (!token) {
      console.log("token not found");
      return;
    }
    this.updateAuthStatus();
    this.websocketService.sendMessage("sessionmode", "", token);
  }

  workRestPlay() {
    if (!this.tokens) {
      console.log("token not found");
      return;
    }
    if (this.isAnimation) return;

    this.isAnimation = true;
    this.doorClosed = true;

    // Subscribe langsung
    this.doorComponent.transitionEnded.subscribe((door: string) => {
      if (door === "right") {
        this.websocketService.sendMessage("gotoWorkrestPlay", "", this.tokens);
        this.isAnimation = false;
      }
    });
  }

  selfDevelopment() {
    const token = localStorage.getItem("Token") || "";
    if (!token) {
      console.log("token not found");
      return;
    }

    if (this.isAnimation) return;

    this.isAnimation = true;
    this.doorClosed = true;

    const defaultPreset = {
      id: "defaultPreset",
      wrp_name: "defaultPreset",
      preset_name: "defaultPreset",
      door_status: true,
      pmf_status: false,
      reading_light_intensity: 75,
      led_intensity: 50,
      led_color: 1,
      nir_intensity: 30,
      fir_intensity: 40,
      created_date: "2024-11-05T08:22:26.710Z",
      updated_date: "2024-11-05T08:22:26.710Z",
    };

    this.doorComponent.transitionEnded.subscribe((door: string) => {
      if (door === "right") {
        setTimeout(() => {
          this.websocketService.sendMessage(
            "gotoSelfDev",
            defaultPreset,
            token
          );
          localStorage.setItem("presetData", JSON.stringify(defaultPreset));
        }, 500);
        this.isAnimation = false;
      }
    });

    localStorage.setItem("doorAnimation", JSON.stringify(this.doorAnimation));
  }
  trainingMode() {
    alert("Coming soon");
  }

  onDoorTransitionEnd(event: any) {
    console.log("Transition ended:", event);
    this.isAnimation = false;
  }
}
