import { Component, ViewChild } from "@angular/core";
import { LayoutComponent } from "../../components/layout/layout.component";
import { CommonModule } from "@angular/common";
import { EnvironmentComponent } from "../../components/environment/environment.component";
import { ButtonComponent } from "../../components/button/button.component";
import { SelfDevelopmentService } from "../../services/self-development/self-development.service";
import { WebSocketService } from "../../web-socket.service";
import { DoorComponent } from "../../components/door/door.component";

type Item = {
  id: string;
  self_development_name: string;
  description: string;
  icon: string;
  created_date: string | null;
  updated_date: string | null;
};

@Component({
  selector: "app-task55",
  standalone: true,
  imports: [
    LayoutComponent,
    CommonModule,
    EnvironmentComponent,
    ButtonComponent,
    DoorComponent,
  ],
  templateUrl: "./task55.page.html",
  styleUrl: "./task55.page.css",
})
export class Task55Page {
  // Logo with name
  logo: string = "logo-w-name.svg";
  // Matrix background
  matrix: string = "matrix.svg";
  guidedMeditation: string = "guided-meditation.svg";
  guidedBreathwork: string = "guided-breathwork.svg";
  soundHealing: string = "sound-healing.svg";
  information: string = "information.svg";
  homeButton: string = "home-button.svg";
  token: string = "";
  doorClosed: boolean = false;

  listSelfDef: Item[] = [];
  selectedSelfDev: string = "";

  constructor(
    private websocketService: WebSocketService,
    private selfDev: SelfDevelopmentService
  ) {}

  defaultValue: number = 0;
  doorStorage = localStorage.getItem("doorAnimation");
  parseDoorStorage = this.doorStorage ? JSON.parse(this.doorStorage) : null;
  stopDoorAnimation: boolean = this.parseDoorStorage;
  @ViewChild(DoorComponent, { static: false }) doorComponent!: DoorComponent;

  ngOnInit(): void {
    this.defaultValue = 1;
    console.log("check default value: ", this.defaultValue);
    
    console.log("This is JWT Token: ", localStorage.getItem("Token"));

    this.selfDev.getselftdevelopment().subscribe({
      next: res => {
        this.listSelfDef = res;
        console.log("getselftdevelopment", res);
      },
      error: err => {
        console.error("Error fetching questions:", err);
      },
    });

    this.websocketService.onMessage("gotoSelfDev").subscribe({
      next: res => {
      }
    })

    this.websocketService.onMessage("sendPresetData2").subscribe({
      next: res => {
        localStorage.setItem("presetData", JSON.stringify(res));
      },
      error: err => {
        console.log("error fetching", err);
      }
    })

    this.token = localStorage.getItem("Token") || "";
  }

  // Array of environments with a generic click handler
  environments = [
    {
      label: "Guided Meditation",
      icon: this.guidedMeditation,
      color: "text-[#008278]",
      clickHandler: () => this.handleSelfDevelopment("GUIDED MEDITATION"),
    },
    {
      label: "Guided Breathwork",
      icon: this.guidedBreathwork,
      color: "text-[#7B62E7]",
      clickHandler: () => this.handleSelfDevelopment("GUIDED BREATHWORK"),
    },
    {
      label: "Sound Healing",
      icon: this.soundHealing,
      color: "text-[#006ABA]",
      clickHandler: () => this.handleSelfDevelopment("SOUND HEALING"),
    },
  ];

  // Manage when the last component is odd, make it center
  isLastOdd(index: number): boolean {
    return (
      index === this.environments.length - 1 &&
      this.environments.length % 2 !== 0
    );
  }

  // Generic handler function for self-development types
  handleSelfDevelopment(selfDevelopmentName: string) {
    if (!this.token) {
      console.log("token not found");
      return
    }
    const unsetDoor = false;
    localStorage.setItem("doorAnimation", JSON.stringify(unsetDoor))
    this.selectedSelfDev =
      this.listSelfDef.find(
        item => item.self_development_name === selfDevelopmentName
      )?.id || "";

    if (this.selectedSelfDev !== "") {
      localStorage.setItem("selectSelfDev", this.selectedSelfDev);
      this.websocketService.sendMessage("selectSelfDev", this.selectedSelfDev, this.token);
    }
  }

  customizeYourEnvironment() {
    if (!this.token) {
      console.log("token not found");
      return
    }
    this.doorClosed = true;
    this.stopDoorAnimation = true;
    setTimeout(() => {
      this.doorComponent.transitionEnded.subscribe((door: string) => {
        if (door === 'right') {
          setTimeout(() => {
            this.websocketService.sendMessage("gotoWorkrestPlay", "", this.token)
          }, 500)
        }
      })
    })
    console.log("Click Customize Your Environment Clicked!");
  }

  gotoHome(){
    if (!this.token) {
      console.log("token not found");
      return
    }
    this.stopDoorAnimation = true;
    this.doorClosed = true;

    setTimeout(() => {
      if (!this.doorComponent) {
        console.error("doorComponent is not initialized.");
        return;
      }
  
      this.doorComponent.transitionEnded.subscribe((door: string) => {
        if (door === 'right') {
          setTimeout(() => {
            this.websocketService.sendMessage("gotoHome","",this.token);
          }, 500)
        }
      })
    })
  }
}
