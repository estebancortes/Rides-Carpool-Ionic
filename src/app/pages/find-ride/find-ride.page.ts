
import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StopOverLocationPage } from '@app/pages/stop-over-location/stop-over-location.page';
import { PickupPage } from '@app/pages/pickup/pickup.page';
import { LocationService } from '@app/services/location.service';
import { DropOffPage } from '@app/pages/drop-off/drop-off.page';
import { CalendarPage } from '@app/pages/calendar/calendar.page';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.page.html',
  styleUrls: ['./find-ride.page.scss'],
})
export class FindRidePage implements OnInit {

  public pickup: boolean;
  public marker: boolean;
  public loc: any;
  public des: any;
  public pickupAddress: any;
  public dropAddress: any;
  public rightTime: any;
  public date: any;
  public time: any;

  constructor(public dataService: DataService,
              private modalCtrl: ModalController,
              public locationService: LocationService,
              private ngZone: NgZone,
              private route: Router,
              private alertController: AlertController) {
    this.pickup = true;
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.rightTime = time;

    this.pickupAddress = this.locationService.pickupAddress;
    this.dropAddress = this.locationService.dropAddress;
  }

  ngOnInit() {
  }

  async selectPickup() {
    const modal = await this.modalCtrl.create({
      component: PickupPage,
    });
    await modal.present();
  }
  async selectDrop() {
    const modal = await this.modalCtrl.create({
      component: DropOffPage,
    });
    await modal.present();
  }

  swapAddress() {
    const newPickupLocation = { lat: this.locationService.dropLocation.latitude, lng: this.locationService.dropLocation.longitude };
    const newDropLocation = { lat: this.locationService.pickupLocation.latitude, lng: this.locationService.pickupLocation.longitude };
    const newPickupAddress = this.locationService.dropAddress.value;
    const newDropAddress = this.locationService.pickupAddress.value;

    this.locationService.pickupLocation.latitude = newPickupLocation.lat;
    this.locationService.pickupLocation.longitude = newPickupLocation.lng;
    this.locationService.dropLocation.latitude = newDropLocation.lat;
    this.locationService.dropLocation.longitude = newDropLocation.lng;
    this.locationService.pickupAddress.value = newPickupAddress;
    this.locationService.dropAddress.value = newDropAddress;
  }

  async goForDateTime(findRide: any) {
    const modal = await this.modalCtrl.create({
      component: CalendarPage,
    });
    await modal.present();
  }
  goForSearchResults() {
    if (this.locationService.pickupAddress.value && this.locationService.dropAddress.value && this.dataService.findRideDetails.startDate) {
      this.route.navigate(['find-ride-search-result']);
    } else {
      this.dataFillAlert();
    }
  }

  async dataFillAlert() {
    const alert = await this.alertController.create({
      header: 'Required!',
      message: 'Please select pickup, destination, date and time first!.',
      buttons: ['OK'],
      cssClass: 'alertCss'
    });

    await alert.present();
  }

}
