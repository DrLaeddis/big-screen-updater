import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-mode",
  standalone: true,
  imports: [],
  templateUrl: "./select-mode.page.html",
  styleUrl: "./select-mode.page.css",
})
export class SelectModePage {
  logo: string = "logo-w-name.svg";
  logo_text: string = "logo-resonant.svg";

  constructor(private router: Router) {}

  handleClickSession() {
    this.router.navigate(["/select-session"]);
  }
}
