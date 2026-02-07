
import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})

export class OfferRideService {

  ride = {
    pickup: '',
    drop: '',
    stops: [],
    rideStart: '',
    guestCount: 0
  }

  constructor(private firebaseService:FirebaseService) { }

  createRide(){
    console.log("Ride : ", this.ride);
  }

}
