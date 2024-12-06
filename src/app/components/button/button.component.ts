import { Component, EventEmitter, Input, Output } from "@angular/core"
import { WebSocketService } from "../../web-socket.service";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {
  @Input() buttonType: string = "";
  @Input() buttonName: string = "";
  @Input() textColor: string = "text-white";
  @Input() textSize: string = "text-4xl";
  @Input() paddingX: string = "";
  @Input() paddingY: string = "py-10";
  @Input() borderSize: string = "border-4";
  @Input() disabled: boolean = false;
}
