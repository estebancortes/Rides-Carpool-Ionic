
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.page.html',
  styleUrls: ['./driving-license.page.scss'],
})
export class DrivingLicensePage implements OnInit {

  public documents = [{
    name: 'Update Profile',
    icon: 'person',
  }];
  public CardNumber: any = '';
  public ExpirationDate: any = '';
  photo = null;

  constructor(private actionCtrl: ActionSheetController,
              private camera: Camera) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const action = await this.actionCtrl.create({
      buttons: [{
        text: 'Take a picture',
        role: 'destructive',
        cssClass: 'buttonCss',
        handler: () => {
          this.openCamera(true);
        }
      }, {
        text: 'Choose a picture',
        handler: () => {
          this.openCamera(false);
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'buttonCss_Cancel',

        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await action.present();
  }
  async openCamera(camera) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: camera ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
    };

    await this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
    }, (err) => {
      // Handle error
    });
  }


}
