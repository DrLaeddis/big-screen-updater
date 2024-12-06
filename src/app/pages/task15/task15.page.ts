import { Component } from "@angular/core";
import { DoorComponent } from "../../components/door/door.component";

@Component({
  selector: "app-task15",
  standalone: true,
  imports: [DoorComponent],
  templateUrl: "./task15.page.html",
  styleUrl: "./task15.page.css",
})
export class Task15Page {
  // Door opening animation
  //doorClosed: boolean = true;
}
