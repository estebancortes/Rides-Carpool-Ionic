import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { FirebaseService } from '@app/services/firebase.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profileInfo: any;
  public segmentButton: any;
  public profileInfoDetails: any;
  tab = '';
  constructor(public dataService: DataService, public route: Router, private firebaseService:FirebaseService) {
    // this.profileInfo = this.dataService.userProfileData;
    this.profileInfoDetails = environment.PROFILE_DETAILS;
    this.tab = 'details';
    this.segmentButton = 'details';
  }
  changeSegmentValue(ev: any) {
    this.segmentButton = ev.detail.value;

  }
  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe((user) => {
      this.firebaseService.getUserData(user.uid).subscribe((userData) => {
        console.log("UserData : ", userData);
        this.profileInfo = userData;
      });
    });
  }
  goForProfileEdit(link: any) {
    if (link === 'Write My Mini Biography') {
      this.route.navigate(['edit-profile']);
    } else if (link === 'Add a Car') {
      this.route.navigate(['add-car']);
    } else if (link === 'Verify My ID') {
      this.route.navigate(['verify-id']);
    }
  }
  goForPreferences(link: any) {
    if (link === 'Add My Preferences') {
      this.route.navigate(['preferences']);
    } else if (link === 'Verify +91 123 325 452') {
      this.route.navigate(['verify-phone']);
    }
  }
  goForEmailVerification(link: any) {
    if (link === 'Verify My Email') {
      this.route.navigate(['verify-email']);
    }
  }

}
