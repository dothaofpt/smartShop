import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
      providedIn: 'root',
})
      export class AuthService {
     private apiUrl = 'http://localhost:8082/auth';

              constructor(private http: HttpClient) {}


         register(user: { username: string; password: string; email: string }): Observable<any> {
         const headers = new HttpHeaders({
      'Content-Type': 'application/json',
                     });
         return this.http.post(`${this.apiUrl}/register`, user, {
           headers,
      responseType: 'json',
    });
  }


  login(user: { username: string; password: string }): Observable<any> {
             return this.http.post(`${this.apiUrl}/login`, user, { responseType: 'text' }).pipe(
      map((response) => {
        return { token: response.replace('JWT Token: ', '') };
      })
              );
  }


                saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
          return localStorage.getItem('jwtToken');
  }


         logout(): void {
    localStorage.removeItem('jwtToken');
  }
               }
