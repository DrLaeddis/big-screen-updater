import { Component } from "@angular/core";
import { DoorComponent } from "../../components/door/door.component";
import { DoorClosedComponent } from "../../components/door-closed/door-closed.component";

@Component({
  selector: "app-task4",
  standalone: true,
  imports: [DoorComponent, DoorClosedComponent],
  templateUrl: "./task4.page.html",
  styleUrl: "./task4.page.css",
})
export class Task4Page {}
