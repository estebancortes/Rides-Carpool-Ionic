
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuCtrl: MenuController,
              private route: Router) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
  }
  gotoLoginformHome() {
    this.route.navigate(['login-form']);
  }
  gotosignup() {
    this.route.navigate(['signup']);
  }
}
