import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DoorComponent } from "../../components/door/door.component";
import { WebSocketService } from "../../web-socket.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-task11",
  standalone: true,
  imports: [DoorComponent, CommonModule],
  templateUrl: "./task11.page.html",
  styleUrl: "./task11.page.css",
})
export class Task11Page implements OnInit, AfterViewInit {
  // Handle the door animation: false = closing animation, true = opening animation
  doorClosed: boolean = false;
  // Handle the video
  videoStarted: boolean = false;

  @ViewChild("videoPlayer", { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  private lastPlayedTime: number = 0;

  audioDuration = 0;
  videoDuration = 0;

  constructor(private websocketService: WebSocketService) {}

  ngOnInit() {
    console.log("this is video console log");
    console.log("check videoDuration", this.videoDuration);
    
    // After the door opening animation is complete, start the video
    setTimeout(() => {
      console.log("video start playing for the first time");
      this.videoStarted = true;
      this.doorClosed = false;
      this.startVideo();
    }, 3000); // Duration match with door animation (3s)

    this.websocketService.onMessage("durationVideo").subscribe((message: any) => {
      console.log("Check duration message:", message);
      if (typeof message === 'string') {
        try {
          message = JSON.parse(message);
        } catch (error) {
          console.log("Failed to parse message", error);
          return;
        }
      }
    
      // Menghitung persentase posisi audio
      const audioPositionPercent = (message.position / message.duration) * 100;
      
      // Ambil elemen video
      const videoElement = this.videoPlayer.nativeElement;
      
      // Durasi video secara dinamis (detik)
      const videoDuration = videoElement.duration;
      console.log("check videoDuration", videoDuration);
      
    
      if (isNaN(videoDuration)) {
        console.log("Video duration is not available yet.");
        return;
      }
    
      // Hitung posisi video berdasarkan persentase audio
      const videoPosition = (audioPositionPercent / 100) * videoDuration;
    
      // Menghitung durasi video yang tersisa
      const remainingTime = videoDuration - videoPosition;
    
      // Perbarui posisi video sesuai dengan perhitungan hitung mundur
      videoElement.currentTime = remainingTime;
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    
      console.log("Position Audio", message.position);
      console.log("Duration Audio", message.duration);
    });
    
    
  }

  // // Feature handle video paused
  // ngOnInit() {
  //   // Open door animation and then start video
  //   setTimeout(() => {
  //     this.doorClosed = false;
  //     this.startVideo();
  //   }, 3000);

  //   // Listen for video control messages
  //   this.websocketService.onMessage().subscribe((message: any) => {
  //     if (message.type === "videoControl") {
  //       this.handleVideoControl(message.data);
  //     }
  //   });
  // }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.startVideo();
      setTimeout(() => {
        if (this.videoPlayer) {
          this.videoDuration = this.videoPlayer.nativeElement.duration;
          console.log("check video duration:", this.videoDuration);
        } else {
          console.log("videoPlayer element is not available");
          
        }
      }, 100)
      this.websocketService.onMessage("pausevideo").subscribe((message: string) => {
        console.log("check message", message);
        if (message === "pause") {
          console.log("pause video");
          this.pauseVideo();
        } else if (message === "resume") {
          console.log("resume video");
          this.resumeVideo();
        }
      })
    }, 3000)
  }

  // Handle the video to start
  startVideo() {
    this.videoStarted = true;
    if (this.videoPlayer) {
      const videoElement = this.videoPlayer.nativeElement;
      videoElement.currentTime = this.lastPlayedTime; // Set video to last saved position
      videoElement.play().then(() => {
        console.log("Video resumed from:", this.lastPlayedTime);
      }).catch(error => {
        console.error("Error resuming video:", error);
      });
    }
  }

  pauseVideo() {
    if (this.videoPlayer) {
      const videoElement = this.videoPlayer.nativeElement;
      videoElement.pause();
      this.lastPlayedTime = videoElement.currentTime; // Save the last played time
      console.log("Video paused at:", this.lastPlayedTime);
    }
  }
  
  resumeVideo() {
    console.log("Attempting to resume video from last saved time...");
    this.videoStarted = true;
    if (this.videoPlayer) {
      const videoElement = this.videoPlayer.nativeElement;
      videoElement.currentTime = this.lastPlayedTime; // Set video to last saved position
      videoElement.play().then(() => {
        console.log("Video resumed from:", this.lastPlayedTime);
      }).catch(error => {
        console.error("Error resuming video:", error);
      });
    }
  }

  // Close the door when the video ends
  onVideoEnd() {
    this.videoStarted = false;
    this.doorClosed = true;
  }
}
