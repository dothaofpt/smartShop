import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


// AuthInterceptor giúp thêm token vào các yêu cầu HTTP nếu user  đăng nhập
// @Injectable: khai bảo 1 service có thể tiêm thành phần khác
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // lấy token từ authService
    const token = this.authService.getToken();
    // nếu có sẽ sao chép thiết lập header
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
