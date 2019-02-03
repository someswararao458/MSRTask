import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private usersUrl = "http://localhost:2020/users/";
  
  userdata;
  user = {
    role : ""
  }
 
  day={};
  private _url="http://localhost:4090/api/";

    constructor(private http:HttpClient,private _router:Router) { }

    public getAllUsers(){
      return this.http.get<any>(this.usersUrl);
    }
    public userRegistration(user) {
      return this.http.post<any>(this.usersUrl+"new", user);
    }
  
    public userLogin(userdata){
      return this.http.post<any>(this.usersUrl+"login", userdata);
    }
    
    public updateUser(id,updateData){
      return this.http.put(this.usersUrl+"update/"+id, updateData);
    }
  
    public deleteUser(id){
      return this.http.delete(this.usersUrl+"delete/"+id);
    }


    userData(data){
     return this.http.post<any>(this._url+"register",data)
    }

  login(data){
    return this.http.post<any>(this._url+"login",data)
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  logedOutUser(){
    this.removeStorage();
    this._router.navigate(['/home']);
    return localStorage.removeItem('token');
    }

    // userLogout() {
    //   return localStorage.clear();
    // }

  removeStorage(){
   localStorage.removeItem('token');
   sessionStorage.removeItem('id');
   sessionStorage.removeItem('user');
  } 

  getRole(){
    return localStorage.getItem('role');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  }

