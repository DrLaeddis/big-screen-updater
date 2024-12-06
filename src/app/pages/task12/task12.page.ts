import { Component } from "@angular/core";
import { DoorComponent } from "../../components/door/door.component";
import { DoorClosedComponent } from "../../components/door-closed/door-closed.component";

@Component({
  selector: "app-task12",
  standalone: true,
  imports: [DoorComponent,DoorClosedComponent],
  templateUrl: "./task12.page.html",
  styleUrl: "./task12.page.css",
})
export class Task12Page {}
