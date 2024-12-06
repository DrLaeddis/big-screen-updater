import { Component } from "@angular/core";
import { CommonModule, Location } from "@angular/common";
import { Router } from "@angular/router";
import { LayoutComponent } from "../../components/layout/layout.component";
import { SessionItemComponent } from "../../components/session-item/session-item.component";
import { ButtonComponent } from "../../components/button/button.component";
import { LoadingComponent } from "../../components/loading/loading.component";
import { ModalInformationComponent } from "../../components/modal-information/modal-information.component";
import { WebSocketService } from '../../web-socket.service';
import { DoorComponent } from "../../components/door/door.component";

@Component({
  selector: "app-task9",
  standalone: true,
  imports: [
    LayoutComponent,
    CommonModule,
    ButtonComponent,
    LoadingComponent,
    ModalInformationComponent,
    DoorComponent,
  ],
  templateUrl: "./task9.page.html",
  styleUrl: "./task9.page.css",
})
export class Task9Page {
  icon: string = localStorage.getItem('icon') || '';
  matrix: string = "matrix.svg";
  gear: string = "gear.svg";
  loading: boolean = false;
  closeButton: string = "x-button.svg";
  informationIcon: string = "information.svg";
  showInformation: boolean = false;
  // The door already opened
  isDoorClosed: boolean = false;
  // Handle the door opening/closing animation
  doorClosed: boolean = false;

  constructor(private router: Router, private location: Location,private websocketService: WebSocketService,) {
    // Get icon from previous page
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.icon = navigation.extras.state["selectedIcon"];
    }
  }

  // Open the information button (i)
  openInformation() {
    this.showInformation = true; // Open the modal on click
  }

  // CLose the modal information (i)
  closeInformation() {
    this.showInformation = false; // Close the modal when the event is emitted
  }

  // Define an array of time options
  timeOptions = [0];
  selectedTime: number | null = null;

  ngOnInit() {
    const timeVarian = localStorage.getItem('timeVarian');
    console.log("timeVarian", timeVarian)
    this.timeOptions = timeVarian ? JSON.parse("["+timeVarian+"]") : []; // or any default value
    console.log("this.timeOptions",this.timeOptions)
  }
  

  // Method to handle radio button change
  onTimeChange(time: number) {
    this.selectedTime = time;
    console.log(`Duration selected: ${this.selectedTime} minutes`);
  }

  
  confirmStart() {
    if(this.selectedTime){
      this.isDoorClosed = true;
      this.doorClosed = true;
    }
  }

  private updateAuthStatusTask9(topic: string, message: any = ""): void {
    const token = localStorage.getItem("Token") || "";

    if (!token) {
      console.log("token not found");
      return;
    }

    this.websocketService.sendMessage(topic, message, token);
  }

  onDoorTransitionEnd(door: string) {
    if (this.doorClosed) {
      if(this.selectedTime){
        const session = localStorage.getItem('session');
        const duration = this.selectedTime;
        const session_id = localStorage.getItem('session_id');
        this.updateAuthStatusTask9("confirmSession", {"session":session,"duration":duration,"session_id":session_id})
        // this.websocketService.sendMessage('confirmSession',{"session":session,"duration":duration,"session_id":session_id})
      }
    } else {
      console.log("Doors are fully opened.");
    }
  }

  // Back to task8
  goBack() {
    // this.websocketService.sendMessage("backtohome", "");
    this.updateAuthStatusTask9("backtohome", "");
  }

  testClick()
  {
    console.log("Test click button")
  }
}
