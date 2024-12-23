import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AdminComponent } from './admin/admin.component';
// Định nghĩa các routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Trang mặc định
  { path: 'shopping', component: ShoppingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Khởi tạo routing
  exports: [RouterModule], // Xuất RouterModule để có thể sử dụng trong toàn bộ ứng dụng
})
export class AppRoutingModule {}
