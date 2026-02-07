
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { FirebaseService } from '@app/services/firebase.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public segmentValue: any;
  public pick: any;
  public pickSub: any;
  public des: any;
  public desSub: any;
  public rideData: any;
  public journeyDate: any;
  public journeyTime: any;
  public seatsAvailable: any;
  public rating = 4;
  public starsCount: number;
  public data = [];
  // public routerSubscription: any = null;
  public tab = '';
  constructor(
    public dataService: DataService,
    private router: Router,
    public firebaseService:FirebaseService) {
    this.data = environment.CARDS;
    this.tab = 'current';
    this.segmentValue = 'current';
  }
  ionViewWillEnter() {
    console.log(this.dataService.offeredRides);
  }


  ngOnInit() {
    this.firebaseService.getOfferedRides().subscribe(data=>{
      console.log("Offered Rides : ", data);
      this.dataService.offeredRides = data;
    });
    this.firebaseService.getCurrentUser().subscribe((user:any) => {
      this.firebaseService.getBookedRides(user.uid).subscribe(data=>{
        console.log("Booked Rides : ", data);
        this.dataService.bookedRides = data;
      });
    });
    // console.log(this.dataService.offeredRides);
  }
  ionViewDidEnter() {
  }

  changeSegmentValue(event: any) {
    this.segmentValue = event.detail.value;
  }
  goToOfferRide() {
    this.dataService.rideType = 'offer';
    this.router.navigate(['/pickup']);
  }
  goToEditRide(ride) {
    this.dataService.selectedJourneyForEdit = ride;
    this.router.navigate(['edit-ride']);
  }
  dismiss() {
    this.router.navigate(['/tabs/home']);
  }
  goToFindRide() {
    this.dataService.rideType = 'find';
    this.router.navigate(['/find-ride']);
  }

  ngOnDestroy() {
    // this.routerSubscription.unsubscribe();
  }
}
