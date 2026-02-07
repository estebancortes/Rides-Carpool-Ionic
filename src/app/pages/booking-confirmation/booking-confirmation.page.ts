
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { UtilService } from '@app/services/util.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocationService } from '@app/services/location.service';
import { v4 as uuidv4 } from 'uuid';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.page.html',
  styleUrls: ['./booking-confirmation.page.scss'],
})
export class BookingConfirmationPage implements OnInit {

  public progress: number;
  public pickupAddress: any;
  public dropAddress: any;
  constructor(private statusBar: StatusBar,
              private route: Router,
              private util: UtilService,
              public locationService: LocationService,
              public dataService: DataService,
              public firebaseService:FirebaseService
  ) {
    this.pickupAddress = this.locationService.pickupAddress.value;
    this.dropAddress = this.locationService.dropAddress.value;
    this.statusBar.backgroundColorByHexString('#000');
    this.Load();
  }

  async Load() {
    const loader = await this.util.createLoader('Please wait...');
    this.progress = 10;
    await loader.present();
    setTimeout(() => {
      this.progress = 20;
    }, 1);
    setTimeout(() => {
      this.progress = 30;
    }, 1000);
    setTimeout(() => {
      this.progress = 40;
    }, 2000);
    setTimeout(() => {
      this.progress = 50;
    }, 3000);
    setTimeout(() => {
      this.progress = 60;
    }, 4000);
    setTimeout(() => {
      this.progress = 70;
    }, 5000);
    setTimeout(() => {
      this.progress = 80;
    }, 6000);
    setTimeout(() => {
      this.progress = 100;
    }, 10000);
    setTimeout(() => {
      loader.dismiss();
      this.dataService.bookRideConfirmation = true;
      const journeyData = {
        id: uuidv4(),
        pickupLocation: this.locationService.pickupLocation,
        pickupAddress: this.locationService.pickupAddress.value,
        dropLocation: this.locationService.dropLocation,
        dropAddress: this.locationService.dropAddress.value,
        rideDetails: this.dataService.findRideDetails
      };
      this.dataService.bookedRides.push(journeyData);
      this.firebaseService.getCurrentUser().subscribe((user) => {
        this.firebaseService.bookRide(journeyData, user.uid);
      });
      this.dataService.findRideDetails = {};
      this.locationService.resetAddresses();
      this.route.navigate(['offer-ride-confirmation']);
    }, 11000);
  }


  ngOnInit() {
  }

}
