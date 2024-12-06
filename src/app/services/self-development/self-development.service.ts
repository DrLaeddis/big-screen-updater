import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelfDevelopmentService {

  headers = new HttpHeaders({
    'X-Authorization': 'dfdsgfdgdfgdfgdfgdf'//this.token, // ganti pakai yg di save di local stirage
  });

  private apiUrl = "http://localhost:3000/mobile-api";

  constructor(private http: HttpClient) { }

  getselftdevelopment(): Observable<any> {
    return this.http.get(`${this.apiUrl}/selftdevelopment`, { headers: this.headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
