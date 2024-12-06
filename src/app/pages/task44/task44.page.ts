import { Component, OnInit } from "@angular/core";
import { DoorComponent } from "../../components/door/door.component";

@Component({
  selector: "app-task44",
  standalone: true,
  imports: [DoorComponent],
  templateUrl: "./task44.page.html",
  styleUrl: "./task44.page.css",
})
export class Task44Page implements OnInit {

  doorAnimation: boolean = true;

  ngOnInit(): void {
    localStorage.setItem("doorAnimation", JSON.stringify(this.doorAnimation))
  }
}
