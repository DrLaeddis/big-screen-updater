import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-session-item",
  standalone: true,
  imports: [],
  templateUrl: "./session-item.component.html",
  styleUrl: "./session-item.component.css",
})
export class SessionItemComponent {
  @Input() icon: string = "";
  @Input() size: string = "";
  @Input() sessionType: string = "";
  @Output() selectSession = new EventEmitter<{ sessionType: string, icon: string }>();

  handleClick() {
    this.selectSession.emit({ sessionType: this.sessionType, icon: this.icon });
  }
}
