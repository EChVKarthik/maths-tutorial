import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData: Observable<firebase.User>

  constructor(public auth: AngularFireAuth) { 
  this.userData = auth.authState;
  }

  signup(email:string, password:string){
    this.auth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
  }

  signin(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully logged in!');
    })
    .catch(err => {
    console.log('Something is wrong:',err.message);
    });
  }
  
  signout() {
    this.auth.signOut();
  }
}
