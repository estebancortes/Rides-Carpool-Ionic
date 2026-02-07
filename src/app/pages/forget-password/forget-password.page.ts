import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  public email = '';
  constructor(public menuCtrl: MenuController,
              public route: Router,
              private firebaseService:FirebaseService) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
  }
  gotoLoginformHome() {
    this.firebaseService.resetPassword(this.email).then((res:any)=>{
      alert('Password reset link has been sent to your email. Please check your email.');
      this.route.navigate(['login-form']);
    }, err=>{
      alert(err.message);
    });
  }
}
