import { Component } from '@angular/core';
import { DoorComponent } from "../../components/door/door.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [DoorComponent],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.css'
})
export class SettingsPage {

}
