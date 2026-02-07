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
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { LocationService } from '@app/services/location.service';
import { FirebaseService } from '@app/services/firebase.service';
@Component({
  selector: 'app-find-ride-search-result',
  templateUrl: './find-ride-search-result.page.html',
  styleUrls: ['./find-ride-search-result.page.scss'],
})
export class FindRideSearchResultPage implements OnInit {

  public pickupAddress: any;
  public dropAddress: any;
  public date: any;
  public time: any;
  public starsCount: number;
  public ridesList: any;
  constructor(public dataService: DataService,
              public locationService: LocationService,
              private route: Router,
              private firebaseService: FirebaseService) {
                this.ridesList = this.dataService.offeredRides;
    // this.ridesList = environment.RIDES_LIST;
    this.pickupAddress = this.locationService.pickupAddress;
    this.dropAddress = this.locationService.dropAddress;
    this.date = this.dataService.findRideDetails.startDate;
    this.time = this.dataService.findRideDetails.startTime;

    // Adding pickup and drop address same as query.
    // In actual scenario, this is not required
    // As the pickup and drop location will come from server
    this.ridesList.forEach(ride => {
      ride.pickup = this.pickupAddress.value;
      ride.dropoff = this.dropAddress.value;
    });
  }

  ngOnInit() {
  }
  goForBooking(cards) {
    console.log(cards);
    this.dataService.selectedRideDetails = cards;
    this.route.navigate(['ride-details']);
  }

}
