import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  userdata={
    profileImage:"",
    name:'',
    role:'',
    adress:'',
    password:''
    }
  constructor(private _auth:AuthenticationServiceService, private route:Router) { }

  ngOnInit() {
  }
  register(data){
    console.log(data);
    this._auth.userData(data)
    .subscribe(
     res=> {
       console.log(res);
       localStorage.setItem('token',res.token);
       sessionStorage.setItem('user',res.user);
       sessionStorage.setItem('id',res.id);
       sessionStorage.setItem('role',res.role);
       this.route.navigate(['home']);

      }
    )
  }

}
