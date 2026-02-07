
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
@Component({
  selector: 'app-passengers-option',
  templateUrl: './passengers-option.page.html',
  styleUrls: ['./passengers-option.page.scss'],
})
export class PassengersOptionPage implements OnInit {

  public options: any;
  onwardRideDetails: any;
  returnRideDetails: any;
  public placeholderText = '';
  private totalSeats: any;
  public product = 0;
  public totalPassenger: any;
  constructor(private route: Router, private toastCtrl: ToastController, public dataService: DataService) {

    console.log(this.dataService.selectedJourneyForEdit);
    this.placeholderText = this.dataService.selectedJourneyForEdit.description;
    this.onwardRideDetails = {
      passengerCount: this.dataService.selectedJourneyForEdit.onwardRideDetails.passengerCount,
      middleSeat: this.dataService.selectedJourneyForEdit.onwardRideDetails.middleSeat,
      instantBook: this.dataService.selectedJourneyForEdit.onwardRideDetails.instantBook,
    };
    this.returnRideDetails = {
      passengerCount: this.dataService.selectedJourneyForEdit.returnRideDetails.passengerCount,
      middleSeat: this.dataService.selectedJourneyForEdit.returnRideDetails.middleSeat,
      instantBook: this.dataService.selectedJourneyForEdit.returnRideDetails.instantBook,
    };
    this.options = [{
      iconfirst: 'car',
      checkbox: true,
      seats: this.totalSeats
    },
    {
      iconfirst: 'flash',
      checkbox: true,
      text: 'Instant booking'
    }];


  }

  ngOnInit() {
  }
  async saveData() {
    const toast = await this.toastCtrl.create({
      message: 'Updated successfully',
      position: 'bottom',
      cssClass: 'toastBack',
      duration: 2000
    });
    toast.present();
    this.route.navigate(['/tabs/home']);

  }
  updateCart(action, type) {
    if (action === 'add') {
      type === 'onward' ? this.onwardRideDetails.passengerCount += 1 : this.returnRideDetails.passengerCount += 1;
    }
    if (action === 'remove') {
      type === 'onward' ? this.onwardRideDetails.passengerCount -= 1 : this.returnRideDetails.passengerCount -= 1;
    }
  }
}
