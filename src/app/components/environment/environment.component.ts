import { Component, Input } from "@angular/core";

@Component({
  selector: "app-environment",
  standalone: true,
  imports: [],
  templateUrl: "./environment.component.html",
  styleUrl: "./environment.component.css",
})
export class EnvironmentComponent {
  @Input() environmentLabel: string = "";
  @Input() environmentIcon: string = "";
  @Input() environmentColor: string = "";
  information: string = "information.svg";
}
