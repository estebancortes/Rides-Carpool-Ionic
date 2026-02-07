import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';
import { environment } from '@env/environment';
import { FirebaseService } from '@app/services/firebase.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  // bioData: any;

  gender:string;
  firstName:string;
  lastName:string;
  birthYear:number;
  bio:string;
  email:string;
  userId:any;
  mobile:{region:string, phone:number} = {region:'', phone: null}
  profilePic:any;
  
  constructor(public dataService: DataService,
              private camera: Camera,
              private toastCtrl: ToastController,
              private route: Router,
              private firebaseService:FirebaseService) {
    // this.bioData = environment.BIOGRAPHY;
  }

  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe((user) => {
      this.userId = user.uid;
      this.email = user.email;
      this.firebaseService.getUserData(user.uid).subscribe((userData) => {
        this.patchUserData(userData);
        userData.profilePic ? this.dataService.userProfileData.image = userData.profilePic : null;
      });
    });
  }
  takeProfilePic() {
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
      this.dataService.userProfileData.image = base64Image;

      const blob = this.dataURLtoBlob(base64Image);
      this.firebaseService.setProfilePic(blob);

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

  patchUserData(data:any){
    this.gender = data.gender;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.birthYear = data.yearOfBirth;
    this.bio = data.bio;
    this.mobile.region = data.mobile.region;
    this.mobile.phone = data.mobile.phone;
  }

  saveInfo(){
    this.firebaseService.saveUserData(this.userId, this.gender, this.firstName, this.lastName, this.birthYear, this.bio, this.mobile)
      .then(() => {
        console.log('User data saved');
      })
      .catch((error) => {
        console.log(error.message); // error message
    });
  }

  changeEmail(){
    this.firebaseService.changeEmail(this.email, this.userId)
      .then(() => {
        console.log('Email Updated');
      })
      .catch((error) => {
        console.log(error.message); // error message
    });
  }

  async showDataSavedToast() {

    const toast = await this.toastCtrl.create({
      message: 'Data saved successfully.',
      duration: 2000,
      cssClass: 'toastCss'
    });
    toast.present();
    this.route.navigate(['/tabs/profile']);
  }
}
