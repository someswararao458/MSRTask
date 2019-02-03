import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employees = [
    { name: "John", age: 25, sal: 50000 },
    { name: "smith", age: 28, sal: 1000000 },
    { name: "Rohn", age: 35, sal: 80000 }
  ]
  dataStatus = "name";
  status = false;
  isClick = true;
  products;
  users;
  userData = {
    name: '',
    role: '',
    address:"",

  }
  is_edit = true;
  value_name;
  id: string;
  ngOnInit() {
  }


  constructor(private _auth:AuthenticationServiceService,private  route:Router){
   
  this._auth.getAllUsers().subscribe(
    (result) => {
      console.log(result);
      this.users = result;
      console.log(result[0].name);
      this.value_name = result[0].name;
    },
    (errr) => {
      console.log(errr);

    }
  )
}

// UPDATE USER
updateUser(id, name, role, address) {
  this.userData.name = name;
  this.userData.role = role;
  this.userData.address = address;
  console.log(id, this.userData);

  this._auth.updateUser(id, this.userData).subscribe(res => {
    console.log(res);
    this.id = '';

  }, err => {
    console.log(err);

  })
}

}
