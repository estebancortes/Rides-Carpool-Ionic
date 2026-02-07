/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocationService } from '@app/services/location.service';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.page.html',
  styleUrls: ['./ride-details.page.scss'],
})
export class RideDetailsPage implements OnInit {

  public date: any;
  public time: any;
  public pickupAddress: any;
  public dropAddress: any;
  public rideData: any;

  constructor(public dataService: DataService,
              public locationService: LocationService,
              private route: Router) {
    this.date = this.dataService.findRideDetails.startDate;
    this.time = this.dataService.findRideDetails.startTime;
    this.pickupAddress = this.locationService.pickupAddress.value;
    this.dropAddress = this.locationService.dropAddress.value;
    this.rideData = this.dataService.selectedRideDetails;

  }

  ngOnInit() {
  }
  goForSeats() {
    this.dataService.totalFare = this.rideData.cost;
    this.route.navigate(['total-passengers']);
  }

}
