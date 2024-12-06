import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket: Socket;
  isConnected: boolean = false;

  constructor() {
    this.webSocket = io('http://localhost:3000');
    
    this.webSocket.on('connect', () => {
      this.isConnected = true;
      console.log('WebSocket connected');
    });

    this.webSocket.on('disconnect', () => {
      this.isConnected = false;
      console.log('WebSocket disconnected');
    });
  }

  onMessage(topic: string): Observable<any> {
    return new Observable((observer) => {
      if (this.isConnected) {
        this.webSocket.on(topic, (data) => {
          observer.next(data);
        });
      } else {
        this.webSocket.on('connect', () => {
          this.webSocket.on(topic, (data) => {
            observer.next(data);
          });
        });
      }

      return () => {
        this.webSocket.off(topic);
      };
    });
  }

  sendMessage(topic: string, message: any, token?: string) {
    console.log('Sending message:', message);
    if (this.isConnected) {
      if (token) {
        this.webSocket.emit(topic, message, token);
      } else {
        this.webSocket.emit(topic, message);
      }
    } else {
      this.webSocket.on('connect', () => {
        this.webSocket.emit(topic, message);
      });
    }
  }
}
