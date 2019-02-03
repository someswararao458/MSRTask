import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserdataComponent } from './userdata/userdata.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from "@anggular/forms";
import {FormsModule} from "@angular/forms";
import {AuthenticationServiceService } from './authentication-service.service';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserdataComponent,
    LoginComponent,
    AdminComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
