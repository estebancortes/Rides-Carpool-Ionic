/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@app/services/data.service';
@Component({
  selector: 'app-total-passengers',
  templateUrl: './total-passengers.page.html',
  styleUrls: ['./total-passengers.page.scss'],
})
export class TotalPassengersPage implements OnInit {
  public headerText = 'So how many carpool passenger\'s can you take?';
  public headerTextTicketBook = 'So how many carpool passenger\'s would you ride?';
  public passengerCount = 1;
  public show: boolean;
  public passengerNo = '';
  private totalPassenger: any;
  public comingFrom: string;
  constructor(private route: Router,
              public dataService: DataService,
              private activeRoute: ActivatedRoute) {
    this.show = true;
    this.activeRoute.params.subscribe(params => {
      this.comingFrom = params.value;
    });
  }

  ngOnInit() {
  }
  updateCart(type) {
    if (type === 'add') {
      this.passengerCount += 1;
    }
    if (type === 'remove') {
      this.passengerCount -= 1;

    }
  }
  goToDrop() {
    if (this.dataService.rideType === 'offer') {
      this.dataService.rideDirection === 'onward' ?
        this.dataService.onwardRideDetails.passengerCount = this.passengerCount :
        this.dataService.returnRideDetails.passengerCount = this.passengerCount;
      this.route.navigate(['book-instantly']);
    } else {
      this.dataService.findRideDetails.passengerCount = this.passengerCount;
      this.route.navigate(['check-booking']);
    }
    // if (this.comingFrom === 'ticketBook') {
    //
    // } else {
    //   this.dataService.onwardRideDetails.passengerCount = this.passengerCount;
    //   // this.dataService.planPassenger(this.totalPassenger);
    //   this.route.navigate(['book-instantly']);
    // }
  }

}
