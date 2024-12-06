import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { WebSocketService } from "../../web-socket.service";

interface Track {
  title: string; // Song title
  caption: string; // Author
  duration: string;
  isFavorite: boolean;
  soundscape: string;
}

@Component({
  selector: "app-track-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./track-item.component.html",
  styleUrl: "./track-item.component.css",
})
export class TrackItemComponent implements OnInit {
  // Icons
  playSample: string = "play-sample.svg";
  information: string = "information.svg";
  favoriteChecked: string = "favorite-checked.svg";
  favoriteUnchecked: string = "favorite-unchecked.svg";
  presetData: any[] = [];

  countdown: number = 0;
  isPlaying: boolean = false;

  @Input() track!: Track; // Receive track data from parent
  @Input() isFavorite: boolean = false;
  @Input() selected: boolean = false; // Input for selected state
  @Output() favoriteToggled = new EventEmitter<void>();
  @Output() trackSelected = new EventEmitter<void>(); // New emitter for track selection

  @Input() isCountdownActive: boolean = false; // Status global countdown
  @Output() countdownStatusChanged = new EventEmitter<boolean>(); // Emit status ke parent


  constructor(
    private websocketService: WebSocketService,
  ) {}

  ngOnInit(): void {
    const storedPresetData = localStorage.getItem("presetData");
    if (storedPresetData) {
      this.presetData = JSON.parse(storedPresetData)
    } else {
      console.log("No preset data in storage");
    }
  }

  handleFavorite() {
    this.favoriteToggled.emit();
  }

  selectTrack(): void {
    this.trackSelected.emit(); // Only emit the track selection event
  }

  handlePreview(event: Event): void {
    if (this.isCountdownActive) {
      return;
    }

    if (this.isPlaying) {
      return
    }

    this.isPlaying = true;
    this.countdownStatusChanged.emit(true);
    event.stopPropagation();
    const data = {
      preset: this.presetData,
      soundscape: this.track.soundscape,
      duration: this.track.duration,
    }
    const presetDataString = JSON.stringify(data);
    this.websocketService.sendMessage("playWRP", `{"sample": "preview",  ${presetDataString.slice(1, -1)}}`);

    this.startCountdown();
  }

  startCountdown(): void {
    this.countdown = 10;
    const interval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(interval);
        this.countdownStatusChanged.emit(false); 
        this.isPlaying = false;
      }
    }, 1000)
  }
}
