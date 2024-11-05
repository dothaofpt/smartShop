import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          this.successMessage = "Đăng ký thành công!";
          this.errorMessage = null;
          console.log('Đăng ký thành công', response);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000); // Chuyển hướng đến trang đăng nhập sau 2 giây
        },
        error => {
          console.error('Lỗi đăng ký', error);
          this.successMessage = null;
          this.errorMessage = 'Đăng ký không thành công!'; // Hiển thị thông báo lỗi
        }
      );
    }
  }
}
