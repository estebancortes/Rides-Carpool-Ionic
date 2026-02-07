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
import { MouseEvent } from '@agm/core';
import { LocationService } from '@app/services/location.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {

  public pickup: { latitude: any; longitude: any; };
  public dropoff: { latitude: any; longitude: any; };
  stopovers: any = [];
  zoom = 8;
  markers = [];
  rideData: any;
  public markerOptions = {
    origin: {
      animation: '\'DROP\'',
      label: 'origin',

    },
    destination: {
      animation: '\'DROP\'',
      label: 'destination',

    },
  };
  public renderOptions = {
    suppressMarkers: true,
  };
  constructor(public dataService: DataService, public locationService: LocationService) {


    this.pickup = {
      latitude: this.dataService.selectedJourneyForEdit.pickupLocation.latitude,
      longitude: this.dataService.selectedJourneyForEdit.pickupLocation.longitude
    };
    this.dropoff = {
      latitude: this.dataService.selectedJourneyForEdit.dropLocation.latitude,
      longitude: this.dataService.selectedJourneyForEdit.dropLocation.longitude
    };
    this.rideData = [{
      head: 'Date',
      detail: this.dataService.selectedJourneyForEdit.onwardRideDetails.startDate,
      icon: 'calendar'
    }, {
      head: 'Time',
      detail: this.dataService.selectedJourneyForEdit.onwardRideDetails.startTime,
      icon: 'time'
    }, {
      head: 'Pickup Address',
      detail: this.dataService.selectedJourneyForEdit.pickupAddress,
      icon: 'navigate'
    },
    ];
    if (this.dataService.selectedJourneyForEdit.stopovers.length) {
      this.dataService.selectedJourneyForEdit.stopovers.forEach((stopover, index) => {
        this.rideData.push({
          head: 'Stopover ' + index + 1,
          detail: stopover.address,
          icon: 'pin'
        });
        this.stopovers.push(stopover);
      });
    }

    this.rideData.push({
      head: 'Drop-off Address',
      detail: this.dataService.selectedJourneyForEdit.dropAddress,
      icon: 'flag'
    });

  }


  ngOnInit() {
  }
  clickedMarker(label: string, index: number) {
  }
  markerDragEnd(m: Marker, $event: MouseEvent) {
  }
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
