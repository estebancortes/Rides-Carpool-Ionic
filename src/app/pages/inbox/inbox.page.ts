import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { environment } from '@env/environment';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  public buttonValue: any;

  public notifications = environment.NOTIFICATIONS;
  tab = '';
  constructor(public alertCtrl: AlertController) {
    this.tab = 'message';
    this.buttonValue = 'message';
  }

  ngOnInit() {
  }
  changeSegmentValue(ev) {
    this.buttonValue = ev.detail.value;
  }
  async notificationAlert(item) {
    const alert = await this.alertCtrl.create({
      header: `${item.title}`,
      message: `${item.subtitle}`,
      buttons: ['OK']
    });

    await alert.present();
  }


}
