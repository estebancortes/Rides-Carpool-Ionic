
import { MapsAPILoader } from '@agm/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { LocationService } from '@app/services/location.service';
@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.page.html',
  styleUrls: ['./drop-off.page.scss'],
})
export class DropOffPage implements OnInit {

  searchItem = '';
  autocompleteItems: any;
  public location: any;
  showMap = false;
  showSearchResults = false;
  item: any;
  zoom = 12;
  dropAddress: any;
  usingGPS = false;
  constructor(private zone: NgZone,
              public dataService: DataService,
              public modalCtrl: ModalController,
              public route: Router,
              public locationService: LocationService,
              public mapsAPILoader: MapsAPILoader) {
    this.location = this.locationService.dropLocation;
    this.dropAddress = this.locationService.dropAddress;

    this.showMap = this.locationService.dropAddress.value ? true : false;

  }

  ngOnInit() {
    if (!this.locationService.canUseGPS) {
      this.locationService.checkGPSPermission();
    }
  }

  async searchOnChange() {
    console.log(this.searchItem);
    if (this.searchItem) {
      this.autocompleteItems = await this.locationService.getAutoCompleteResults(this.searchItem);
      this.showSearchResults = true;
      console.log(this.autocompleteItems);
    }
  }


  async chooseItem(drop) {
    console.log(drop);
    this.usingGPS = false;
    this.locationService.dropAddress.value = drop;
    await this.locationService.getLatLanForType(drop, 'drop');
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
      await this.locationService.getCurrentLocationAndAddressForType('drop');
      this.showMap = true;
      this.usingGPS = true;
      console.log(this.location);
      console.log(this.dropAddress);
      this.searchItem = '';
    } else {
      this.locationService.checkGPSPermission();
    }
  }

  goToStopOvers() {
    if (this.dataService.rideType === 'offer') {
      this.route.navigate(['stop-over']);
    } else if (this.dataService.rideType === 'find') {
      this.closeModal();
    }
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
