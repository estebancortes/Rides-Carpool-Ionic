/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { MapsAPILoader } from '@agm/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { LocationService } from '@app/services/location.service';
@Component({
  selector: 'app-stop-over-location',
  templateUrl: './stop-over-location.page.html',
  styleUrls: ['./stop-over-location.page.scss'],
})
export class StopOverLocationPage implements OnInit {

  searchItem = '';
  autocompleteItems: any;
  public location: any;
  showMap = false;
  showSearchResults = false;
  item: any;
  zoom = 12;
  address: any;
  usingGPS = false;
  constructor(private zone: NgZone,
              public serviceProvider: DataService,
              public modalCtrl: ModalController,
              public route: Router,
              public locationService: LocationService,
              public dataService: DataService,
              public mapsAPILoader: MapsAPILoader) {
    this.location = this.locationService.location;
    this.address = this.locationService.currentAddress;
  }

  ngOnInit() {
    if (!this.locationService.canUseGPS) {
      this.locationService.checkGPSPermission();
    }
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  async searchOnChange() {
    console.log(this.searchItem);
    if (this.searchItem) {
      this.autocompleteItems = await this.locationService.getAutoCompleteResults(this.searchItem);
      this.showSearchResults = true;
      console.log(this.autocompleteItems);
    }
  }


  async chooseItem(address) {
    this.usingGPS = false;
    this.locationService.currentAddress.value = address;
    await this.locationService.getLatLan(address);
    this.showMap = true;
    this.showSearchResults = false;
  }

  onFocus() {
    if (this.searchItem && this.autocompleteItems.length) {
      this.showSearchResults = true;
    }
  }
  onBlur() {
    setTimeout(() => {
      this.showSearchResults = false;
    }, 50);
  }
  onDismiss() {
    this.searchItem = '';
    this.showSearchResults = false;
  }

  async getCurrentLocation() {
    if (this.locationService.canUseGPS) {
      await this.locationService.getCurrentLocationAndAddress();
      this.showMap = true;
      this.usingGPS = true;
      console.log(this.location);
      console.log(this.address);
      this.searchItem = '';
    } else {
      this.locationService.checkGPSPermission();
    }
  }

  addStopOver() {
    const stopover = {
      latitude: this.locationService.location.latitude,
      longitude: this.locationService.location.longitude,
      address: this.locationService.currentAddress.value,
      selected: true
    };
    this.dataService.stopovers.push(stopover);
    this.locationService.resetCurrentLocation();
    this.closeModal();
  }

}
