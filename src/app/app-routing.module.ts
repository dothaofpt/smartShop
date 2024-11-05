import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Import component Register
import { ShoppingComponent } from './shopping/shopping.component';

// Định nghĩa các routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Trang mặc định
  { path: 'shopping', component: ShoppingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Đường dẫn cho trang đăng ký
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Khởi tạo routing
  exports: [RouterModule], // Xuất RouterModule để có thể sử dụng trong toàn bộ ứng dụng
})
export class AppRoutingModule {}
