
import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { UtilService } from '@app/services/util.service';
import { MapsAPILoader } from '@agm/core';
import { environment } from '@env/environment';
declare var google;

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  location: { latitude: number, longitude: number, accuracy: number, timestamp: number };
  currentAddress = { value: '' };
  // pickupLocation = { latitude: 12.9572115, longitude: 80.226108, accuracy: 0, timestamp: 0 };
  // pickupAddress = { value: 'TN Chennai Pallikaranai Marshland Perungudi Corporation Road' };;
  // dropLocation = { latitude: 8.4834201, longitude: 76.9198194, accuracy: 0, timestamp: 0 };
  // dropAddress = { value: 'Trivandrum International Airport (TRV), Airport Road, Chacka, Thiruvananthapuram' };
  pickupLocation: { latitude: number, longitude: number, accuracy: number, timestamp: number };
  pickupAddress = { value: '' };
  dropLocation: { latitude: number, longitude: number, accuracy: number, timestamp: number };
  dropAddress = { value: '' };
  locationTime: any;
  locatedCountry = environment.country;
  canUseGPS = false;
  constructor(
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private platform: Platform,
    private locationAccuracy: LocationAccuracy,
    public util: UtilService,
    public zone: NgZone,
    public mapsAPILoader: MapsAPILoader) {
    this.location = {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      timestamp: 0
    };
    this.pickupLocation = {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      timestamp: 0
    };
    this.dropLocation = {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      timestamp: 0
    };
    this.locationTime = Date.now();
    if (!this.platform.is('cordova')) {
      this.canUseGPS = true;
    }
  }

  resetCurrentLocation() {
    this.location.latitude = 0;
    this.location.longitude = 0;
    this.currentAddress.value = '';
  }
  resetAddresses() {
    this.location = {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      timestamp: 0
    };
    this.currentAddress.value = '';
    this.pickupLocation = {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      timestamp: 0
    };
    this.pickupAddress.value = '';
    this.dropLocation = {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      timestamp: 0
    };
    this.dropAddress.value = '';
  }

  // Check if application having GPS access permission
  checkGPSPermission() {
    if (this.platform.is('cordova')) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
        result => {
          console.log(result);
          if (result.hasPermission) {
            // If having permission show 'Turn On GPS' dialogue
            this.askToTurnOnGPS();
          } else {

            // If not having permission ask for permission
            this.requestGPSPermission();
          }
        },
        err => {
          alert(err);
        }
      );
    }

  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
      } else {
        // Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
          .then(
            (result) => {
              console.log(result);
              if (result.hasPermission) {
                // call method to turn on GPS
                this.askToTurnOnGPS();
              } else {
                alert('Error requesting location permissions ');
              }
            },
            error => {
              // Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error);
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      (result) => {
        console.log(result);
        // When GPS Turned ON call method to get Accurate location coordinates
        // Following is the default method called after permission and turning on GPS
        // You can call any default method here
        this.canUseGPS = true;
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  // Method to get device accurate coordinates using device GPS
  getCurrentLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location.latitude = resp.coords.latitude;
      this.location.longitude = resp.coords.longitude;
      this.location.accuracy = resp.coords.accuracy;
      this.location.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  // Method to get device accurate address using device Lat/Lng
  async getGeoCodedAddress(lat: number, lng: number) {
    let block, street, building, country;

    if (navigator.geolocation) {
      const geocoder = await new google.maps.Geocoder();
      const latlng = await new google.maps.LatLng(lat, lng);
      const request = { latLng: latlng };

      await new Promise((resolve, reject) => {

        geocoder.geocode(request, (results, status) => {
          let localAdd1 = '';
          let localAdd2 = '';
          if (status === google.maps.GeocoderStatus.OK) {
            const result = results[0];
            const rsltAdrComponent = result.address_components;
            if (result !== null) {
              if (rsltAdrComponent[0] !== null) {
                block = rsltAdrComponent[0].long_name;
                street = rsltAdrComponent[2].short_name;
                building = rsltAdrComponent[1].short_name;
              }
              // Find out country of geolocation
              // eslint-disable-next-line @typescript-eslint/no-unused-vars

              for (const item of rsltAdrComponent) {
                if (item.types && item.types.includes('country')) {
                  country = item.short_name;
                }
                if (item.types && item.types.includes('administrative_area_level_1')) {
                  localAdd1 = item.short_name;
                }
                if (item.types && item.types.includes('locality')) {
                  localAdd2 = item.short_name;
                }
              }
              // this.userProvider.getUserData().location = localAdd1 + ', ' + localAdd2;
              resolve(true);

            } else {
              alert('No address available!');
            }
          }
          this.currentAddress.value = (localAdd1 + ' ' + localAdd2 + ' ' + building + ' ' + street + ' ' + block).trim();
        });
      });
    }
    return { block, street, building, country };

  }

  // Method to get device's accurate coordinate and current address
  // It is a combination of above two methods
  async getCurrentLocationAndAddress() {
    const loader = await this.util.createLoader('Getting your location...');
    return await new Promise((resolve, reject) => {
      loader.present();
      this.geolocation.getCurrentPosition().then((resp: { coords: { latitude: number; longitude: number; }; }) => {
        this.zone.run(async () => {
          this.location.latitude = resp.coords.latitude;
          this.location.longitude = resp.coords.longitude;
          await this.getGeoCodedAddress(resp.coords.latitude, resp.coords.longitude);
          loader.dismiss();
          resolve(true);
        });
        loader.dismiss();
      }).catch((error) => {
        console.log(error);
        loader.dismiss();
      }).finally(() => {
        loader.dismiss();
      });
    });
  }


  // Method to get device accurate Lat/Lng using device Address
  async getLatLan(address: string) {
    const geocoder = new google.maps.Geocoder();
    // tslint:disable-next-line: max-line-length
    return await new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results: { geometry: { location: any; }; }[], status: any) => {
        if (status === google.maps.GeocoderStatus.OK) {
          this.location.latitude = results[0].geometry.location.lat();
          this.location.longitude = results[0].geometry.location.lng();
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  async getAutoCompleteResults(searchTerm) {
    return await new Promise((resolve, reject) => {
      this.mapsAPILoader.load().then(() => {
        //tslint:disable-next-line:no-string-literal
        const service = new window['google'].maps.places.AutocompleteService();
        service.getPlacePredictions({ input: searchTerm, componentRestrictions: { country: this.locatedCountry } }, (predictions, status) => {
          const autocompleteItems = [];
          this.zone.run(() => {
            if (predictions !== null) {
              predictions.forEach((prediction) => {
                autocompleteItems.push(prediction.description);
              });
            }
            console.log(autocompleteItems);
            resolve(autocompleteItems);
          });
        });
      });
    });
  }

  async getCurrentLocationAndAddressForType(type) {
    return await new Promise(async (resolve, reject) => {
      await this.getCurrentLocationAndAddress();
      if (type === 'pickup') {
        console.log(this.location);
        this.pickupLocation.latitude = this.location.latitude;
        this.pickupLocation.longitude = this.location.longitude;
        this.pickupLocation.accuracy = this.location.accuracy;
        this.pickupLocation.timestamp = this.location.timestamp;
        this.pickupAddress.value = this.currentAddress.value;
        console.log(this.pickupLocation);
      } else if (type === 'drop') {
        this.dropLocation.latitude = this.location.latitude;
        this.dropLocation.longitude = this.location.longitude;
        this.dropLocation.accuracy = this.location.accuracy;
        this.dropLocation.timestamp = this.location.timestamp;
        this.dropAddress.value = this.currentAddress.value;
      }
      resolve(true);
    });
  }

  async getGeoCodedAddressForType(lat: number, lng: number, type) {
    return await new Promise(async (resolve, reject) => {
      await this.getGeoCodedAddress(lat, lng);
      if (type === 'pickup') {
        this.pickupAddress.value = this.currentAddress.value;
      } else if (type === 'drop') {
        this.dropAddress.value = this.currentAddress.value;
      }
      resolve(true);
    });
  }

  getCurrentLocationCoordinatesForType(type) {
    this.geolocation.getCurrentPosition().then((resp) => {
      if (type === 'pickup') {
        this.pickupLocation.latitude = resp.coords.latitude;
        this.pickupLocation.longitude = resp.coords.longitude;
        this.pickupLocation.accuracy = resp.coords.accuracy;
        this.pickupLocation.timestamp = resp.timestamp;
      }
      if (type === 'drop') {
        this.dropLocation.latitude = resp.coords.latitude;
        this.dropLocation.longitude = resp.coords.longitude;
        this.dropLocation.accuracy = resp.coords.accuracy;
        this.dropLocation.timestamp = resp.timestamp;
      }
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  async getLatLanForType(address: string, type) {
    return await new Promise(async (resolve, reject) => {
      await this.getLatLan(address);
      if (type === 'pickup') {
        this.pickupLocation.latitude = this.location.latitude;
        this.pickupLocation.longitude = this.location.longitude;
        console.log(this.pickupLocation);

      }
      if (type === 'drop') {
        this.dropLocation.latitude = this.location.latitude;
        this.dropLocation.longitude = this.location.longitude;
        console.log(this.dropLocation);
      }
      resolve(true);
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

}
