import { Component, OnInit, ViewChild } from "@angular/core";
import { LayoutComponent } from "../../components/layout/layout.component";
import { CommonModule } from "@angular/common";
import { TrackItemComponent } from "../../components/track-item/track-item.component";
import { ButtonComponent } from "../../components/button/button.component";
import { SelfDevelopmentSoundService } from "../../services/self-development-sound/self-development-sound.service";
import { WebSocketService } from "../../web-socket.service";
import { FavoriteSoundService } from "../../services/favorite-sound/favorite-sound.service";
import { DoorComponent } from "../../components/door/door.component";

interface Track {
  sound_code: string;
  title: string; // Song title
  caption: string; // Song author
  duration: string;
  isFavorite: boolean;
  favoriteId: string;
  soundscape: string;
}

interface SoundItem {
  id: string;
  sound_code: string;
  duration: string;
  description: string;
  sound_path: string;
  file_path: string;
  title: string;
  caption: string;
  self_development_id: string;
  created_date: string | null;
  updated_date: string | null;
}

@Component({
  selector: "app-task56",
  standalone: true,
  imports: [LayoutComponent, CommonModule, TrackItemComponent, ButtonComponent, DoorComponent],
  templateUrl: "./task56.page.html",
  styleUrl: "./task56.page.css",
})
export class Task56Page implements OnInit {
  regenesisLogo: string = "logo-w-name.svg";
  playSample: string = "play-sample.svg";
  information: string = "information.svg";
  favoriteChecked: string = "favorite-checked.svg";
  favoriteUnchecked: string = "favorite-unchecked.svg";
  backButton: string = "back-button.svg";
  homeButton: string = "home-button.svg";
  selectedTab: string = "sessionLibrary";
  isFavorite: boolean = false;
  presetData: any[] = [];
  token: string = "";

  // Manage selected track
  selectedTrackData: { soundCode: string; duration: string } | null = null;
  selectedTrackSoundCode: string | null = null; // To store the ID of the selected track (active border)

  trackList: Track[] = [];
  x: SoundItem[] = [];
  userFavorites: any[] = [];

  a: number = 0;

  favoritesList: Array<Track> = [];
  activeCountdownIndex: number | null = null;

  doorClosed: boolean = false;
  stopDoorAnimation: boolean = false;
  @ViewChild(DoorComponent) doorComponent!: DoorComponent;

  constructor(
    private websocketService: WebSocketService,
    private selfDevelopmentSound: SelfDevelopmentSoundService,
    private favoriteSound: FavoriteSoundService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const jwtToken = localStorage.getItem("Token");
      console.log("JWT Token from localStorage:", jwtToken);
  
      const selectedSesDev = localStorage.getItem("selectSelfDev");
      this.selfDevelopmentSound.getselftdevelopmentSound().subscribe({
        next: (res: SoundItem[]) => {
          // Assuming res is an array of SoundItem
          this.x = res.filter(
            (item: SoundItem) => item.self_development_id === selectedSesDev
          );
          console.log("All track: ", res);
          this.updateTrackList();
        },
        error: err => {
          console.error("Error fetching sounds:", err);
        },
      });
  
      // * Fetch user favorites
      this.favoriteSound.userFavoriteSelfDevSound().subscribe({
        next: res => {
          this.userFavorites = res;
          this.updateTrackFavList();
          this.updateTrackList();
        },
        error: err => {
          console.error("Error fetching favorites:", err);
        },
      });
  
      const storedPresetData = localStorage.getItem("presetData");
      if (storedPresetData) {
        try {
          this.presetData = JSON.parse(storedPresetData);
        } catch (error) {
          console.error("Failure to convert data from localStorage");
        }
      } else {
        console.log("No data preset found in localStorage");
      }
  
      console.log("check presetData", this.presetData);
      this.token = localStorage.getItem("Token") || "";
    })
  }

  handleCountdownStatus(isActive: boolean, index: number): void {
    this.activeCountdownIndex = isActive ? index : null;
  }

  updateTrackFavList(): void {
    if (this.x.length && this.userFavorites.length) {
      this.favoritesList = this.x
        .filter(itemX =>
          this.userFavorites.some(
            itemUserFavorites =>
              itemUserFavorites.self_development_sound_id === itemX.id
          )
        )
        .map(itemX => ({
          sound_code: itemX.sound_code,
          title: itemX.title,
          caption: itemX.caption,
          duration: itemX.duration,
          favoriteId: itemX.id,
          isFavorite: true,
          soundscape: itemX.sound_code,
        }));
      console.log("this.trackList", this.trackList);
    }
  }
  updateTrackList(): void {
    this.trackList = this.x.map(itemX => {
      const isFavorite = this.userFavorites.some(
        itemUserFavorites =>
          itemUserFavorites.self_development_sound_id === itemX.id
      );
      return {
        sound_code: itemX.sound_code,
        title: itemX.title,
        caption: itemX.caption,
        duration: itemX.duration,
        favoriteId: itemX.id,
        isFavorite: isFavorite,
        soundscape: itemX.sound_code,
      };
    });

    console.log("Updated trackList with all items:", this.trackList);
  }

  // selectTab(tab: string) {
  //   this.selectedTab = tab;
  // }
  selectTab(tab: string) {
    if (this.selectedTab !== tab) {
      this.selectedTab = tab;

      // Clear the selected track when switching tabs
      this.selectedTrackSoundCode = null;
      this.selectedTrackData = null;
      console.log("Selection cleared when switching tabs");
    }
  }

  favorite(track: Track, sound: SoundItem): void {
    track.isFavorite = true;

    // Send POST request to add soundItem to favorites
    this.favoriteSound.postUserFavoriteSelfDevSound(sound.id).subscribe({
      next: (res: { id: string }) => {
        console.log("Check response: ", res);

        // Assuming the response contains the new favorite's ID
        track.favoriteId = res.id; // Store the ID directly on the track

        if (!this.favoritesList.includes(track)) {
          this.favoritesList.push(track); // Add the updated track to favorites list
        }
        console.log("Sound added to favorites with new favorite ID:", res.id);
      },

      error: err => {
        console.error("Error adding sound to favorites:", err);
      },
    });
  }

  unfavorite(track: Track, sound: SoundItem): void {
    track.isFavorite = false;

    // Send DELETE request to remove soundItem from favorites
    this.favoriteSound
      .deleteUserFavoriteSelfDevSound(track.favoriteId)
      .subscribe({
        next: () => {
          this.favoritesList = this.favoritesList.filter(t => t !== track);
          console.log("Sound removed from favorites:", sound);
        },
        error: err => {
          console.error("Error removing sound from favorites:", err);
        },
      });
  }

  toggleFavorite(track: Track, sound: SoundItem): void {
    if (track.isFavorite === true) {
      this.unfavorite(track, sound);
    } else {
      this.favorite(track, sound);
    }
  }

  // Select track
  selectedTrack(track: Track) {
    // Toggle selection: if the clicked track is already selected, deselect it
    if (this.selectedTrackSoundCode === track.sound_code) {
      this.selectedTrackSoundCode = null; // Deselect the track
      this.selectedTrackData = null; // Clear the selected data
      console.log("Track deselected");
    } else {
      // Otherwise, select the track
      this.selectedTrackSoundCode = track.sound_code;
      this.selectedTrackData = {
        soundCode: track.sound_code,
        duration: track.duration,
      };
      console.log("Selected Track 👌:", track);
      console.log("Selected Sound Code 🆔:", this.selectedTrackData.soundCode);
      console.log("Selected Duration ⏳:", this.selectedTrackData.duration);
    }
  }

  backToSelecSelfDev() {
    if (!this.token) {
      console.log("token not found");
      return
    }
    this.websocketService.sendMessage(
      "gotoSelfDev",
      localStorage.getItem("presetId"),
      this.token
    );
  }

  playWRP() {
    if (!this.selectedTrackData) {
      console.warn("No track selected!");
      return;
    }

    const data = {
      preset: this.presetData,
      soundscape: this.selectedTrackData.soundCode,
      duration: this.selectedTrackData.duration,
    };

    console.log("Sending WRP Data:", data);
    const dataString = JSON.stringify(data);
    this.websocketService.sendMessage("playWRP", `{"sample": "full",  ${dataString.slice(1, -1)}}`);
    console.log(dataString);
    
  }

  customizeYourEnvironment() {
    if (!this.token) {
      console.log("token not found");
      return
    }

    this.stopDoorAnimation = true;
    this.doorClosed = true;

    setTimeout(() => {
      this.doorComponent.transitionEnded.subscribe((door: string) => {
        if (door === 'right') {
          //this.websocketService.sendMessage("backPage", "", this.token)
          this.websocketService.sendMessage('gotoWorkrestPlay', '', this.token);
          console.log("Click Customize Your Environment Clicked!");
        }
      })
    })
  }

  gotoHome(){
    if (!this.token) {
      console.log("token not found");
      return
    }
    this.stopDoorAnimation = true;
    this.doorClosed = true;

    setTimeout(() => {
      this.doorComponent.transitionEnded.subscribe((door: string) => {
        if (door === 'right') {
          setTimeout(() => {
            this.websocketService.sendMessage("gotoHome","",this.token);
          }, 500)
        }
      })
    })

  }

  onDoorTransitionEnd(event: any) {
    console.log('Transition ended:', event);
    this.doorClosed = false; // Buka kembali pintu setelah transisi selesai
  }
}
