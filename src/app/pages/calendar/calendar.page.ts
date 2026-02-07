
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  // public displayCurrentDate = new Date().toDateString();
  // public timeSelected = '04:10 AM';
  public CurrentDate = new Date();

  public date = this.CurrentDate.getUTCDate();
  public month = this.CurrentDate.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
  public year = this.CurrentDate.getUTCFullYear();

  public dateStr = this.date + '/' + this.month + '/' + this.year;
  public myDate: any = this.dateStr;
  showFabButton = false;

  onward: any;
  constructor(
    public dataService: DataService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public modalCtrl: ModalController,

  ) {
    if (this.dataService.rideType === 'offer') {
      this.onward = this.dataService.rideDirection === 'onward';
    }
    // this.activeRoute.params.subscribe(params => {
    //   this.tripValue = params.value;
    // });
  }

  onChange() {
    console.log(this.myDate);
    this.showFabButton = true;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  goToDrop(myDate) {
    if (this.dataService.rideType === 'offer') {
      if (this.dataService.rideDirection === 'onward') {
        this.dataService.onwardRideDetails.startDate = new Date(myDate).toDateString();
        this.dataService.onwardRideDetails.startTime = new Date(myDate).toLocaleTimeString();
        this.route.navigate(['middle-seat']);
      } else if (this.dataService.rideDirection === 'return') {
        this.dataService.returnRideDetails.startDate = new Date(myDate).toDateString();
        this.dataService.returnRideDetails.startTime = new Date(myDate).toLocaleTimeString();
        this.route.navigate(['middle-seat']);
      }
    } else {
      this.dataService.findRideDetails.startDate = new Date(myDate).toDateString();
      this.dataService.findRideDetails.startTime = new Date(myDate).toLocaleTimeString();
      this.closeModal();
    }
  }

  ngOnInit() {
  }


}
