
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@env/environment';

declare var google: { maps: { Geocoder: new () => any; GeocoderStatus: { OK: any; }; LatLng: new (arg0: number, arg1: number) => any; MapTypeId: { ROADMAP: any; }; Map: new (arg0: { center: any; zoom: number; mapTypeId: any; }) => any; }; };

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.journey = true;
    this.bookRideConfirmation = false;
  }
  zoom = 15;
  userProfileData = environment.PROFILE_DATA;
  pickup = '';
  pickupLocation = '';
  journey: boolean;
  destination: '';
  lat: number;
  lng: number;
  map: any;
  origin: { lat: number; lng: number; };
  marker: boolean;
  totalFare = '';
  bookRideConfirmation: boolean;
  public offeredRides = [
    // {
    //   id: '12312-232-ASDISK-2123',
    //   pickupLocation: { latitude: 12.9572115, longitude: 80.226108, accuracy: 0, timestamp: 0 },
    //   pickupAddress: 'TN Chennai Pallikaranai Marshland Perungudi Corporation Road',
    //   dropLocation: { latitude: 8.4834201, longitude: 76.9198194, accuracy: 0, timestamp: 0 },
    //   dropAddress: 'Trivandrum International Airport (TRV), Airport Road, Chacka, Thiruvananthapuram',
    //   onwardRideDetails: {
    //     instantBook: true,
    //     startDate: 'Jun 29, 2020',
    //     startTime: '11:00:00 AM',
    //     passengerCount: 2,
    //     middleSeat: true
    //   },
    //   returnRideDetails: {
    //     instantBook: false,
    //     startDate: 'Jun 30, 2020',
    //     startTime: '17:00:00 PM',
    //     passengerCount: 1,
    //     middleSeat: false
    //   },
    //   stopovers: [
    //     {
    //       address: "Nagercoil, Tamil Nadu, India",
    //       latitude: 8.183285699999999,
    //       longitude: 77.4118996,
    //       selected: true
    //     },
    //     {
    //       address: "Neyyattinkara, Kerala, India",
    //       latitude: 8.4026673,
    //       longitude: 77.0860939,
    //       selected: true
    //     }
    //   ],
    //   description: 'Hello, wassup'
    // }
  ];
  public bookedRides = [];
  public selectedJourneyForEdit: any = {};
  public rideDirection = 'onward';
  public rideType = '';
  public onwardRideDetails: any = {};
  // public findRideDetails: any = {
  //   startDate: 'Jun 30, 2020',
  //   startTime: '11:00:00 AM'
  // };
  public findRideDetails: any = {
  };
  public returnRideDetails: any = {};
  public selectedRideDetails: any = {

  };
  public stopovers = [
    // {
    //   address: "Nagercoil, Tamil Nadu, India",
    //   latitude: 8.183285699999999,
    //   longitude: 77.4118996,
    //   selected: true
    // },
    // {
    //   address: "Neyyattinkara, Kerala, India",
    //   latitude: 8.4026673,
    //   longitude: 77.0860939,
    //   selected: true
    // }
  ];
  public currentTab = 'home';

}
