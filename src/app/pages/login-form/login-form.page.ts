import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  email:string;
  password:string;

  constructor(private route: Router, private menuCtrl: MenuController, private firebaseService:FirebaseService) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
  }
  goforHome() {
    this.firebaseService.loginUser(this.email, this.password)
    .then((userCredential) => {
      console.log('User logged in', userCredential.user);
      this.route.navigate(['/tabs/home']);
    })
    .catch((error) => {
      console.log(error.message); // error message
      alert(error.message);
    });
  }
  goforForgotPassword() {
    this.route.navigate(['forget-password']);

  }
  goforSignupPage() {
    this.route.navigate(['signup']);
  }

}
