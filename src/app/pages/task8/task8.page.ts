import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "../../components/layout/layout.component";
import { WebSocketService } from '../../web-socket.service';
import { SessionItemComponent } from "../../components/session-item/session-item.component";
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
  selector: "app-task8",
  standalone: true,
  imports: [
    LayoutComponent,
    SessionItemComponent,
    LoadingComponent,
    CommonModule,
  ],
  templateUrl: "./task8.page.html",
  styleUrl: "./task8.page.css",
})
export class Task8Page {
  logo: string = "logo-w-name.svg";
  matrix: string = "matrix.svg";
  novak_mode: string = "novak-mode.png";
  recharge: string = "recharge.png";
  reconnect: string = "reconnect.png";
  recover: string = "recover.png";
  rejuvenate: string = "rejuvenate.png";
  relax: string = "relax.png";
  bio_feedback: string = "bio-feedback.png";
  selectedIcon: string | null = null;
  loading: boolean = false;
  bufferExperience: any
  socketTopicList: any[] = [];
  
  ngOnInit() {
    const sessExperience = localStorage.getItem("experience");
    console.log("sessExperience",sessExperience)
    if (sessExperience) {
      const parsedExperience = JSON.parse(sessExperience);
      this.bufferExperience = parsedExperience
      console.log("parsedExperience", parsedExperience)
    }
  }

  sessionGroups = [
    [
      { icon: this.recover, type: 'recover', size: '25vw' },
      { icon: this.relax, type: 'relax', size: '25vw' }
    ],
    [
      { icon: this.novak_mode, type: 'novak_mode', size: '25vw' },
      { icon: this.bio_feedback, type: 'bio_feedback', size: '30vw' },
      { icon: this.rejuvenate, type: 'rejuvenate', size: '25vw' }
    ],
    [
      { icon: this.recharge, type: 'recharge', size: '25vw' },
      { icon: this.reconnect, type: 'reconnect', size: '25vw' }
    ]
  ];

  constructor(
    private websocketService: WebSocketService,
    private router: Router
  ) {}

  handleSelectSession(event: { sessionType: string, icon: string }): void {
    /*
    recover
    relax
    novak_mode
    bio_feedback (demo)
    rejuvenate "Rejuvenate"
    recharge
    reconnect
    */
    const token = localStorage.getItem("Token") || "";
    if (!token) {
      console.log("token not found");
      return
    }
    const result = this.bufferExperience.filter((item: { menu_name: string; }) => item.menu_name === event.sessionType);
    localStorage.setItem('session', event.sessionType);
    localStorage.setItem('icon', event.icon);
    localStorage.setItem('session_id', result[0].id);
    const durations = result[0].variation.map((item: { duration: any; }) => item.duration);
    console.log("durations_",durations)
    localStorage.setItem('timeVarian',durations)
    //localStorage.setItem('timeVarian',result[0].time_varian)
    this.updateAuthStatus();
    this.websocketService.sendMessage('selectSession',{"session":event.sessionType,"icon":event.icon,"sessionProp":result[0]}, token)
  }

  private updateAuthStatus() {
    const storedTopics = localStorage.getItem("socketTopicList");
    if (storedTopics) {
      const socketTopicList = JSON.parse(storedTopics);
      const updateTopics = socketTopicList.map((topic: any) => {
        if (topic.topic === "selectSession") {
          return { ...topic, auth_status: topic.auth_status === null ? true : topic.auth_status }
        }
        return topic;
      });

      localStorage.setItem("socketTopicList", JSON.stringify(updateTopics));
    }
  }

}
