import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-signup-with-email',
  templateUrl: './signup-with-email.page.html',
  styleUrls: ['./signup-with-email.page.scss'],
})
export class SignupWithEmailPage implements OnInit {

  public email: string;
  public password: string;
  constructor(private route: Router, private firebaseService:FirebaseService) { }

  ngOnInit() {
  }
  register() {
    this.firebaseService.registerUser(this.email, this.password);
    this.route.navigate(['/tabs/home']);

  }
  login() {
    this.route.navigate(['login-form']);

  }

}
