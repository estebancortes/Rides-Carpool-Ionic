
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { FirebaseService } from '@app/services/firebase.service';
@Component({
  selector: 'app-delete-ride',
  templateUrl: './delete-ride.page.html',
  styleUrls: ['./delete-ride.page.scss'],
})
export class DeleteRidePage implements OnInit {

  public deleteRide: Array<any>;
  customPopoverOptions: any = {
  };
  constructor(private dataService: DataService,
              private route: Router,
              private firebaseService: FirebaseService) {
    this.deleteRide = environment.DELETE_RIDE;
  }

  ngOnInit() {
  }
  deleteData() {
    this.firebaseService.deleteRide(this.dataService.selectedJourneyForEdit.rideId);
    // this.service.cardDetails = false;
    const index = this.dataService.offeredRides.findIndex(ride => ride.id === this.dataService.selectedJourneyForEdit.id);
    this.dataService.offeredRides.splice(index, 1);
    this.dataService.selectedJourneyForEdit = {};
    this.route.navigate(['/tabs/home']);
  }
}
