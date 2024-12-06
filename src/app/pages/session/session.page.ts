import { Component, ElementRef, ViewChild } from '@angular/core';
import { WebSocketService } from '../../web-socket.service';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [],
  templateUrl: './session.page.html',
  styleUrl: './session.page.css'
})
export class SessionPage {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(
    private websocketService: WebSocketService
  ) { }

  ngOnInit() {
    this.websocketService.onMessage('big-screen').subscribe((data) => {
      const { event, data: val } = data;
      if (event === 'start-session') {
        this.videoPlayer.nativeElement.play();
      } else if (event=== 'stop-session') {
        this.videoPlayer.nativeElement.pause();
      } else if (event === 'change-duration-session') {
        this.videoPlayer.nativeElement.currentTime = val
      }
    })
  }
}
