/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';
import { environment } from '@env/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-verify-id',
  templateUrl: './verify-id.page.html',
  styleUrls: ['./verify-id.page.scss'],
})
export class VerifyIdPage implements OnInit {

  public idPictures = [];
  // public documents = environment.DOCUMENTS;
  constructor(public route: Router, private camera: Camera, private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe((user) => {
      this.firebaseService.getUserData(user.uid).subscribe((userData) => {
        this.idPictures = userData?.idPictures;
      });
    });
  }
  gotoPage(item: any) {
    this.route.navigate([item]);

  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;

      // push data to ID listing

      const blob = this.dataURLtoBlob(base64Image);
      this.firebaseService.uploadIdPic(blob);

    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  private dataURLtoBlob(dataURL: string): Blob {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

}
