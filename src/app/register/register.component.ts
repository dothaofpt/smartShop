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
          this.successMessage = "Registration successful!";
          this.errorMessage = null;
          console.log('Registration successful', response);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000); // Redirect to login page after 2 seconds
        },
        error => {
          console.error('Registration error', error);
          this.successMessage = null;
          this.errorMessage = 'Registration failed because the username already exists. Please try a different username!';
        }
      );
    }
  }
}
