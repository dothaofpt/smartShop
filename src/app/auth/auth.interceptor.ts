import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// AuthInterceptor giúp thêm token vào các yêu cầu HTTP nếu user đã đăng nhập
// set up header để user có thể thực hiện chức năng khác của trang web
// @Injectable: khai báo một service có thể tiêm thành phần khác
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Lấy token từ AuthService
    const token = this.authService.getToken();

    // Nếu có token thì sao chép yêu cầu HTTP, thêm Authorization header với Bearer token
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Tiếp tục xử lý yêu cầu HTTP với header đã được chỉnh sửa
    return next.handle(request);
  }
}
