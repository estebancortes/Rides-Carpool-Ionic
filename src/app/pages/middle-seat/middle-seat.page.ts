
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
@Component({
  selector: 'app-middle-seat',
  templateUrl: './middle-seat.page.html',
  styleUrls: ['./middle-seat.page.scss'],
})
export class MiddleSeatPage implements OnInit {

  public middle = 'Quieres dejar el asiento del medio vacio?';
  constructor(private route: Router, public dataService: DataService,
  ) { }

  ngOnInit() {
  }
  gotoSelectSeats(status) {
    this.dataService.rideDirection === 'onward' ?
      this.dataService.onwardRideDetails.middleSeat = status :
      this.dataService.returnRideDetails.middleSeat = status;
    this.route.navigate(['total-passengers', { value: 'direct' }]);
  }

}
