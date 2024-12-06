import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-modal-information",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal-information.component.html",
  styleUrl: "./modal-information.component.css",
})
export class ModalInformationComponent {
  closeButton: string = "x-button.svg";
  @Output() closeModal = new EventEmitter<void>(); // Emit this event when closing the modal
  goBack() {
    this.closeModal.emit();
  }
}
