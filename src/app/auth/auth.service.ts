import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Đảm bảo đã import map

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // Địa chỉ API

  constructor(private http: HttpClient) {}

  // Đăng ký
  register(user: { username: string; password: string; email: string }): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.http.post(`${this.apiUrl}/register`, user, { headers, responseType: 'json' });
}


  // Đăng nhập
  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, user, { responseType: 'text' }).pipe(
      map(response => {
        // Phân tích token từ phản hồi
        return { token: response.replace('JWT Token: ', '') }; // Cắt chuỗi "JWT Token: "
      })
    );
  }

  // Lưu token vào local storage
  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  // Lấy token
  getToken() {
    return localStorage.getItem('jwtToken');
  }

  // Xóa token
  logout() {
    localStorage.removeItem('jwtToken');
  }
}
