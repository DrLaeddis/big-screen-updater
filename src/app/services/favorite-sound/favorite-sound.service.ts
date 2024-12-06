import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})

// export class FavoriteSoundService {

//   headers = new HttpHeaders({
//     'X-Authorization': 'dfdsgfdgdfgdfgdfgdf'//this.token, // ganti pakai yg di save di local stirage
//   });

//   private apiUrl = "http://localhost:3000/mobile-api";

//   constructor(private http: HttpClient) { }

//   userFavoriteSelfDevSound(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/userFavoriteSelfDevSound`, { headers: this.headers }).pipe(
//       catchError(error => {
//         return throwError(() => error);
//       })
//     );
//   }
// }
export class FavoriteSoundService {
  private apiUrl = "http://localhost:3000/mobile-api/userFavoriteSelfDevSound";

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const jwtToken = localStorage.getItem("Token");
    if (!jwtToken) throw new Error("Unauthorized");
    return new HttpHeaders({ "X-Authorization": `${jwtToken}` });
  }

  // GET: Fetch user favorite sounds
  userFavoriteSelfDevSound(): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get(this.apiUrl, { headers })
      .pipe(catchError(error => throwError(() => error)));
  }

  // POST: Add a favorite sound
  postUserFavoriteSelfDevSound(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .post(this.apiUrl, { self_development_sound_id: id }, { headers })
      .pipe(catchError(error => throwError(() => error)));
  }

  // DELETE: Remove a favorite sound
  deleteUserFavoriteSelfDevSound(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .delete(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(error => throwError(() => error)));
  }
}