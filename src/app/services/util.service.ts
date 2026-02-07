
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { environment } from '@env/environment';

declare let google;

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    private navCtrl: NavController,

  ) {
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  goToNew(route) {
    this.navCtrl.navigateRoot(route);
  }

  goBack() {
    this.navCtrl.back();
  }

  goBackTo(route) {
    this.navCtrl.navigateBack(route);
  }

  goForward(route) {
    this.navCtrl.navigateForward(route);
  }

  async createAlert(header, backdropDismiss, message, buttonOptions1, buttonOptions2?): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      header,
      backdropDismiss,
      message,
      buttons: !buttonOptions2 ? [buttonOptions1] : [buttonOptions1, buttonOptions2]
    });
    return alert;
  }

  async createLoader(message): Promise<HTMLIonLoadingElement> {
    const loader = await this.loadingCtrl.create({
      message
      // duration: 3000
    });
    return loader;
  }

  async createToast(message, showCloseButton = false, position = 'bottom' as 'top' | 'bottom' | 'middle', duration = 2000): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message,
      position,
      duration,
      buttons: [{
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    return toast;
  }

  async createModal(component, componentProps?, cssClass?, showBackdrop?: true, backdropDismiss?: true): Promise<HTMLIonModalElement> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps,
      showBackdrop,
      backdropDismiss
    });
    return modal;
  }

  async createActionSheet(button1, button2?, button3?) {
    const sheet = await this.actionSheetCtrl.create({
      buttons: [button1, button2, button3]
    });

    return sheet;
  }

  // async getGooglePlaceAutoCompleteList(searchText, geolocation, country) {
  //   const service = new window.google.maps.places.AutocompleteService();
  //   let pred;
  //   // var circle = new google.maps.Circle(
  //   //     {center: geolocation, radius: 10000});
  //   // autocomplete.setBounds(circle.getBounds());
  //   await new Promise((resolve, reject) => {
  //     service.getPlacePredictions({
  //       input: searchText,
  //       componentRestrictions: { country: country || environment.COUNTRY }
  //     }, (predictions) => {
  //       pred = predictions;
  //       resolve(true);
  //     });
  //   });
  //   return pred;
  // }




  changeStatusBarColor() {
    this.statusBar.backgroundColorByHexString('#000');
  }

}
