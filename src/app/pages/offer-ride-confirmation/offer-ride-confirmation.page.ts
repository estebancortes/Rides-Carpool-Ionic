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
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '@app/services/location.service';
import { v4 as uuidv4 } from 'uuid';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-offer-ride-confirmation',
  templateUrl: './offer-ride-confirmation.page.html',
  styleUrls: ['./offer-ride-confirmation.page.scss'],
})
export class OfferRideConfirmationPage implements OnInit {

  public confirmImage = 'assets/image/trumpet.png';
  public offerSuccess = 'Your ride is now online! Passengers can now book and travel with you!';
  public bookSuccess = 'Your ride is now booked! Driver will now reach you soon on call or chat!';

  constructor(public dataService: DataService,
              private route: Router,
              public locationService: LocationService,
              public firebaseService: FirebaseService) {
  }

  ngOnInit() {
  }

  onRideSuccess() {

    const journeyData = {
      id: uuidv4(),
      pickupLocation: this.locationService.pickupLocation,
      pickupAddress: this.locationService.pickupAddress.value,
      dropLocation: this.locationService.dropLocation,
      dropAddress: this.locationService.dropAddress.value,
      onwardRideDetails: this.dataService.onwardRideDetails,
      returnRideDetails: this.dataService.returnRideDetails,
      stopovers: this.dataService.stopovers,
      description: this.dataService.returnRideDetails.description
    };

    if (this.dataService.bookRideConfirmation) {
      // this.dataService.findRideDestination('', '', '');
      // this.dataService.findRidePickup('', '', '');
      this.dataService.bookRideConfirmation = false;
      this.route.navigate(['/tabs/find-ride']);
    } else {
      this.dataService.offeredRides.push(journeyData);
      console.log("journeey DATATA : ", journeyData);
      this.firebaseService.createRide(journeyData);
      // this.dataService.cardDetails = true;
      this.locationService.resetAddresses();
      this.route.navigateByUrl('/tabs/home');
    }

  }
}
