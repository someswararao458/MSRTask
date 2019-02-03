import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserdataComponent } from './userdata/userdata.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';

const routes: Routes = [
  {path: 'navbar' , component:NavbarComponent},
  {path: 'userdata', component:UserdataComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent,
  children:[
  {path: 'user', component:UsersComponent},
  {path: 'products', component:ProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
