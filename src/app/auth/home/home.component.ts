import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit {

  constructor(public service: LoginService) { }

  email: string;
password: string;

  signUp(){
    this.service.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.service.signin(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.service.signout();
  }

  ngOnInit(): void {
  }

}
