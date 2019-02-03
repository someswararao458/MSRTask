import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logindata = {
  name:"",
  password:""
}
error;
  constructor(private auth:AuthenticationServiceService,private route:Router) { }

  ngOnInit() {
  }
  login(data){
    this.auth.login(data).subscribe(
      res=>{
        // console.log(res);
        localStorage.setItem('token',res.token);
        sessionStorage.setItem('user',res.user);
        sessionStorage.setItem('id',res.id);
        sessionStorage.setItem('role',res.role);
        this.route.navigate(['home']);
      },
      err => {
        // console.log(err);
        this.error = err.error.message;
      }
        
      
    )}
}
