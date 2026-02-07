
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LocationService } from '@app/services/location.service';

@Component({
  selector: 'app-check-booking',
  templateUrl: './check-booking.page.html',
  styleUrls: ['./check-booking.page.scss'],
})
export class CheckBookingPage implements OnInit {

  public pickupAddress: any;
  public dropAddress: any;
  public date: any;
  public time: any;
  // public actvroute: any;
  public rideData: any;
  public totalCost: any;
  public totalPass: any;
  public total: number;

  constructor(public dataService: DataService,
              public locationService: LocationService,
              private route: Router,
              private alertCtrl: AlertController) {
    this.pickupAddress = this.locationService.pickupAddress.value;
    this.dropAddress = this.locationService.dropAddress.value;
    this.date = this.dataService.findRideDetails.startDate;
    this.time = this.dataService.findRideDetails.startTime;

    this.totalCost = this.dataService.selectedRideDetails.cost;
    this.totalPass = this.dataService.findRideDetails.passengerCount;
    this.total = this.totalPass * this.totalCost;
  }

  ngOnInit() {
  }
  async goForBooking() {

    const alert = await this.alertCtrl.create({
      header: 'Confirm Booking',
      message: 'Your driver will contact you in some time. Do you want to confirm booking?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Book',
          handler: () => {
            this.route.navigate(['booking-confirmation']);
          }
        }
      ]
    });
    return await alert.present();
  }


}
