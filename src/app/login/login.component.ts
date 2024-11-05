import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          this.authService.saveToken(response.token); // Lưu token
          console.log('Đăng nhập thành công', response);
          this.router.navigate(['/']); // Chuyển hướng đến trang chính
        },
        error => {
          console.error('Lỗi đăng nhập', error);
          this.errorMessage = 'Đăng nhập không thành công!'; // Hiển thị thông báo lỗi
        }
      );
    }
  }
}
