import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketTopicsService {

  private apiUrl = "http://localhost:3000/mobile-api";

  constructor(private http: HttpClient) { }

  getSocketTopics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sockettopics`);
  }
}
