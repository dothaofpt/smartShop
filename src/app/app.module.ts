import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor'; // Nhập AuthInterceptor

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Thêm ReactiveFormsModule để sử dụng Reactive Forms
    AppRoutingModule,
    HttpClientModule // Chuyển HttpClientModule vào đây
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Thêm AuthInterceptor vào providers
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } // Đảm bảo rằng bạn đã xuất khẩu AppModule
