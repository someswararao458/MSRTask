import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _auth:AuthenticationServiceService) { }

  ngOnInit() {
  }

}
