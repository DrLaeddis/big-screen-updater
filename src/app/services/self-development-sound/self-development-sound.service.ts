import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class SelfDevelopmentSoundService {
  private apiUrl = "http://localhost:3000/mobile-api/selftdevelopmentsound";

  constructor(private http: HttpClient) {}

  getselftdevelopmentSound(): Observable<any> {
    const jwtToken = localStorage.getItem("Token");

    if (!jwtToken) {
      throw new Error("Token not found");
    }

    const headers = new HttpHeaders({
      "X-Authorization": `${jwtToken}`,
    });

    return this.http.get(this.apiUrl, { headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
